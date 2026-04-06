import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeHigh, faVolumeLow, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const STATIONS = {
  rnb: {
    label: 'RNB',
    videoId: '3D8O3bfOEZs',
  },
  lofi: {
    label: 'Lofi',
    videoId: 'jfKfPfyJRdk',
  },
};

const API_SCRIPT_ID = 'youtube-iframe-api';
const STORAGE_KEY = 'portfolio-lofi-player';

const defaultState = {
  playing: false,
  volume: 35,
  mode: 'rnb',
};

const getStoredState = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY));

    if (!parsed) {
      return defaultState;
    }

    return {
      playing: defaultState.playing,
      volume: Number.isFinite(parsed.volume) ? Math.max(0, Math.min(100, parsed.volume)) : defaultState.volume,
      mode: STATIONS[parsed.mode] ? parsed.mode : defaultState.mode,
    };
  } catch {
    return defaultState;
  }
};

const MusicPlayer = () => {
  const initialStateRef = useRef(null);
  if (!initialStateRef.current) {
    initialStateRef.current = getStoredState();
  }

  const initialState = initialStateRef.current;
  const playerRef = useRef(null);
  const mountRef = useRef(null);
  const currentVideoIdRef = useRef(null);
  const playingRef = useRef(initialState.playing);
  const volumeRef = useRef(initialState.volume);
  const modeRef = useRef(initialState.mode);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(initialState.playing);
  const [volume, setVolume] = useState(initialState.volume);
  const [mode, setMode] = useState(initialState.mode);

  useEffect(() => {
    const createPlayer = () => {
      if (!window.YT || !window.YT.Player || !mountRef.current || playerRef.current) {
        return;
      }

      playerRef.current = new window.YT.Player(mountRef.current, {
        width: '1',
        height: '1',
        host: 'https://www.youtube-nocookie.com',
        videoId: STATIONS[modeRef.current].videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(volumeRef.current);
            const initialVideoId = STATIONS[modeRef.current].videoId;
            event.target.cueVideoById(initialVideoId);
            currentVideoIdRef.current = initialVideoId;
            setIsPlaying(false);
            setIsReady(true);
            if (playingRef.current) {
              event.target.playVideo();
            }
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              const activeVideoId = event.target.getVideoData?.().video_id;
              if (activeVideoId) {
                currentVideoIdRef.current = activeVideoId;
              }
            }

            if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED ||
              event.data === window.YT.PlayerState.UNSTARTED ||
              event.data === window.YT.PlayerState.CUED
            ) {
              setIsPlaying(false);
            }

            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    const existingScript = document.getElementById(API_SCRIPT_ID);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = API_SCRIPT_ID;
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);
    }

    const previousReady = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === 'function') {
        previousReady();
      }
      createPlayer();
    };

    return () => {
      window.onYouTubeIframeAPIReady = previousReady || null;
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    if (!isReady || !playerRef.current) {
      return;
    }

    const nextVideoId = STATIONS[mode].videoId;

    if (currentVideoIdRef.current === nextVideoId) {
      return;
    }

    if (playingRef.current) {
      playerRef.current.loadVideoById(nextVideoId);
    } else {
      playerRef.current.cueVideoById(nextVideoId);
    }

    currentVideoIdRef.current = nextVideoId;
  }, [isReady, mode]);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        volume,
        mode,
      })
    );
  }, [mode, volume]);

  const togglePlayback = () => {
    if (!playerRef.current || !isReady) {
      return;
    }

    if (isPlaying) {
      playerRef.current.pauseVideo();
      return;
    }

    if (currentVideoIdRef.current !== STATIONS[mode].videoId) {
      playerRef.current.loadVideoById(STATIONS[mode].videoId);
      currentVideoIdRef.current = STATIONS[mode].videoId;
      return;
    }

    playerRef.current.playVideo();
  };

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);
    if (playerRef.current && isReady) {
      playerRef.current.setVolume(nextVolume);
    }
  };

  const handleModeChange = (nextMode) => {
    if (nextMode === mode || !STATIONS[nextMode]) {
      return;
    }

    setMode(nextMode);
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return faVolumeXmark;
    }

    if (volume <= 45) {
      return faVolumeLow;
    }

    return faVolumeHigh;
  };

  return (
    <>
      <div className="music-player" aria-live="polite">
        <button
          type="button"
          className="music-player__play"
          onClick={togglePlayback}
          disabled={!isReady}
          aria-label={isPlaying ? `Pause ${STATIONS[mode].label} music` : `Play ${STATIONS[mode].label} music`}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>

        <div className="music-player__modes" role="group" aria-label="Music mode">
          {Object.entries(STATIONS).map(([stationKey, station]) => (
            <button
              key={stationKey}
              type="button"
              className={`music-player__mode${mode === stationKey ? ' is-active' : ''}`}
              onClick={() => handleModeChange(stationKey)}
            >
              {station.label}
            </button>
          ))}
        </div>

        <label className="music-player__volume" htmlFor="music-volume">
          <FontAwesomeIcon icon={getVolumeIcon()} />
          <input
            id="music-volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Music volume"
          />
        </label>
      </div>

      <div className="music-player__mount" ref={mountRef} aria-hidden="true" />
    </>
  );
};

export default MusicPlayer;
