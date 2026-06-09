import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import './index.scss';
import pfp from '../../assets/images/grad-pic.jpg';

const Home = () => {
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
                    <p className="kicker">Interested in Systems & Network Engineering + DevOps</p>
                    <h1>
                        Hi, I&apos;m Jomi Ruiz! 
                    </h1>
                    <p className="summary">
                     Seattle University Alumnus with passion for working on high-traffic systems.
                     Experience with AI agents, Cloud Native & Linux OS development, and high throughput systems.  
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
                    <p className="role">Software Engineer @ Oracle Communications</p>
                </aside>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );

}

export default Home;
