import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faSteam, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)  
    }, [])

    return (
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a second-year Computer Science Major with a Data Science Minor at Seattle U!
                    I have interests in Backend Development, Game Development and Data Analytics.
                    Catch me playing VALORANT or coding up a new idea!
                </p>
                <p>
                    I have prior experience in Java, C++, C#, and Python and am extremely willing to 
                    learn more about programming and expand my knowledge.
                </p>
                <p>
                    As far as current projects, I am currently working on learning React through this website,
                    as well as learning the GODOT game engine to hopefully be able to produce an Indie 2D game with
                    my team!
                </p>
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
                </div>
            </div>

        </div>

    )

}

export default About