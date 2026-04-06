import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeHigh, faVolumeLow, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const VIDEO_ID = '3D8O3bfOEZs';
const API_SCRIPT_ID = 'youtube-iframe-api';
const STORAGE_KEY = 'portfolio-lofi-player';

const defaultState = {
  playing: false,
  volume: 35,
};

const getStoredState = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY));

    if (!parsed) {
      return defaultState;
    }

    return {
      playing: Boolean(parsed.playing),
      volume: Number.isFinite(parsed.volume) ? Math.max(0, Math.min(100, parsed.volume)) : defaultState.volume,
    };
  } catch {
    return defaultState;
  }
};

const MusicPlayer = () => {
  const playerRef = useRef(null);
  const mountRef = useRef(null);
  const playingRef = useRef(defaultState.playing);
  const volumeRef = useRef(defaultState.volume);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(defaultState.playing);
  const [volume, setVolume] = useState(defaultState.volume);

  useEffect(() => {
    const stored = getStoredState();
    setIsPlaying(stored.playing);
    setVolume(stored.volume);
    playingRef.current = stored.playing;
    volumeRef.current = stored.volume;
  }, []);

  useEffect(() => {
    const createPlayer = () => {
      if (!window.YT || !window.YT.Player || !mountRef.current || playerRef.current) {
        return;
      }

      playerRef.current = new window.YT.Player(mountRef.current, {
        width: '1',
        height: '1',
        host: 'https://www.youtube-nocookie.com',
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
          loop: 1,
          playlist: VIDEO_ID,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(volumeRef.current);
            setIsReady(true);
            if (playingRef.current) {
              event.target.playVideo();
            }
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            }
            if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
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
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        playing: isPlaying,
        volume,
      })
    );
  }, [isPlaying, volume]);

  const togglePlayback = () => {
    if (!playerRef.current || !isReady) {
      return;
    }

    if (isPlaying) {
      playerRef.current.pauseVideo();
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
          aria-label={isPlaying ? 'Pause lofi music' : 'Play lofi music'}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>

        <span className="music-player__label">Lofi</span>

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
