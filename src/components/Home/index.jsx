import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'o', 'm', 'i', ' ', 'R', 'u', 'i', 'z']
    const pfp = "https://media.licdn.com/dms/image/v2/D5603AQHOeL3fYFhTZg/profile-displayphoto-crop_800_800/B56ZhTCdBDHUAM-/0/1753739813067?e=1776902400&v=beta&t=Uzj8b7yb_KcQ7AT0S3ejOGsgj6lW6ox8aZ425aTIyC4";

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="home-content">
                <div className="intro-block">
                    <p className="kicker">Interested in Embedded Systems, Cloud Computing, & DevOps</p>
                    <h1>
                        Hi, I&apos;m <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />.
                    </h1>
                    <p className="summary">
                     Senior at Seattle University with passion for working on high-traffic systems.
                     Experience with AI agents, Embedded Systems/Linux OS development, and high throughput systems.  
                    </p>
                    <div className="actions">
                        <Link to="/project" className="flat-button">VIEW PROJECTS</Link>
                        <Link to="/contact" className="flat-button secondary">CONTACT</Link>
                    </div>
                </div>
                <aside className="profile-panel">
                    <a className='logo' href='https://www.linkedin.com/in/jomikael-ruiz/' target='_blank' rel='noreferrer'>
                        <div className="headshot">
                            <img className="profImage" src={pfp} alt="Jomikael Ruiz" />
                        </div>
                    </a>
                    <p className="role">SDE @ Amazon Games, Incoming SWE @ Oracle</p>
                </aside>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );

}

export default Home;
