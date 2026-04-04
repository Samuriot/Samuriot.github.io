import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const emailAddress = 'jomi.g.ruiz@gmail.com'

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container contact-page">
                <div className="contact-content">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 'n', 'e', 'c', 't']}
                            idx={16}
                        />
                    </h1>
                    <p>
                        Reach out directly through email or connect with me on GitHub and LinkedIn.
                        For a copy of my resume, please reach out to me directly.
                    </p>

                    <div className="contact-links">
                        <a className="contact-button" href={`mailto:${emailAddress}`}>
                            Email
                        </a>
                        <a className="contact-button" href="https://github.com/Samuriot" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a className="contact-button" href="https://www.linkedin.com/in/jomikael-ruiz/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
