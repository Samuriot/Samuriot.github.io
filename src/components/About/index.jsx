import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava, faJsSquare, faSteam, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className="about-content">
                <div className="about-text">
                    <h1 className="about-heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p className="about-copy">
                        I am a Computer Science major with a Data Science minor at Seattle University, focused on building practical,
                        reliable software that solves real problems.
                    </p>
                    <p className="about-copy">
                        My strongest interests are backend development, full-stack product work, and clean engineering workflows.
                        I currently work as an Automation Engineer Intern at Boehringer Ingelheim.
                    </p>
                    <p className="about-copy">
                        I have hands-on experience with Java, C++, C#, Python, and JavaScript. Right now I am building
                        Hands Up, a concert safety mobile app using Flutter for cross-platform support.
                    </p>
                    <div className="focus-list">
                        <span>Backend APIs</span>
                        <span>Automation</span>
                        <span>Data-Oriented Thinking</span>
                        <span>Mobile Product Work</span>
                    </div>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#DD0031"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faTwitch} color="#6441A5"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faSteam} color="#000000"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faYoutube} color="#ff0000"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )

}

export default About
