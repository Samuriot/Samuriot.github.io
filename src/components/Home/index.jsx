import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'o', 'm', 'i', 'k', 'a', 'e', 'l']
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
            <div className="hero-grid">
                <div className="text-zone">
                    <p className="eyebrow">Available for internships and freelance work</p>
                    <h1>
                        Building polished web experiences with
                        <span className="highlight"> backend-first thinking.</span>
                    </h1>
                    <h2>
                        Hi, I&apos;m <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /> Ruiz.
                        I focus on full-stack development, clean UI delivery, and reliable application architecture.
                    </h2>
                    <div className="cta-row">
                        <Link to="/contact" className="flat-button">CONTACT ME</Link>
                        <Link to="/project" className="flat-button secondary">VIEW PROJECTS</Link>
                    </div>
                    <div className="quick-stats">
                        <div>
                            <h3>Backend</h3>
                            <p>API design, data modeling, and integration work.</p>
                        </div>
                        <div>
                            <h3>Frontend</h3>
                            <p>Responsive interfaces with React and modern CSS.</p>
                        </div>
                        <div>
                            <h3>Workflow</h3>
                            <p>Clean code structure, Git discipline, and iteration speed.</p>
                        </div>
                    </div>
                </div>
                <aside className="profile-card">
                    <a className='logo' href='https://www.linkedin.com/in/jomikael-ruiz/' target='_blank' rel='noreferrer'>
                        <div className="Headshot">
                            <img className="profImage" src={pfp} alt="Jomikael Ruiz" />
                        </div>
                    </a>
                    <h3>Jomikael Ruiz</h3>
                    <p>Full-Stack Developer</p>
                    <div className="profile-links">
                        <a href='https://www.linkedin.com/in/jomikael-ruiz/' target='_blank' rel='noreferrer'>LinkedIn</a>
                        <a href='https://github.com/Samuriot' target='_blank' rel='noreferrer'>GitHub</a>
                    </div>
                </aside>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );

}

export default Home;
