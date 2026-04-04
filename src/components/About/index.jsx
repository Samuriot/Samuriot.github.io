import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faGolang, faLinux, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import experiencesData from '../data/experiences.json'
import cplusplusLogo from '../../assets/images/cplusplus.svg'
import typescriptLogo from '../../assets/images/typescript.svg'

const experiences = experiencesData.experiences || []

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [activeExperienceId, setActiveExperienceId] = useState(experiences[0]?.id || null)
    const activeExperience = experiences.find((experience) => experience.id === activeExperienceId) || null

    const handleExperienceSelect = (id) => {
        if (id !== activeExperienceId) {
            setActiveExperienceId(id)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className="about-shell">
                    <div className="about-main">
                        <section className="experience-block">
                            <span className="experience-kicker">Hover to learn more!</span>

                            <div className="experience-layout">
                                <div className="experience-list" role="listbox" aria-label="Experience list">
                                    {experiences.map((experience) => (
                                        <button
                                            key={experience.id}
                                            type="button"
                                            className={`experience-item${activeExperience?.id === experience.id ? ' is-active' : ''}`}
                                            onMouseEnter={() => handleExperienceSelect(experience.id)}
                                            onFocus={() => handleExperienceSelect(experience.id)}
                                            onClick={() => handleExperienceSelect(experience.id)}
                                        >
                                            <span>{experience.company}</span>
                                            <small>{experience.role}</small>
                                        </button>
                                    ))}
                                </div>

                                <article className="experience-detail" aria-live="polite">
                                    {activeExperience ? (
                                        <>
                                            <h2 className="detail-role">{activeExperience.role}</h2>
                                            <div className="detail-company">{activeExperience.company}</div>
                                            <div className="detail-period">{activeExperience.period}</div>
                                            <ul>
                                                {activeExperience.details.map((detail) => (
                                                    <li key={detail}>{detail}</li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <div className="detail-company">Add experiences in data to populate this section.</div>
                                    )}
                                </article>
                            </div>
                        </section>
                    </div>

                    <aside className="cube-column">
                        <p className="cube-kicker">Tech Snapshot</p>
                        <div className="stage-cube-cont">
                            <div className="cubespinner">
                                <div className="face1">
                                    <img className="tech-logo" src={cplusplusLogo} alt="C++" />
                                </div>
                                <div className="face2">
                                    <FontAwesomeIcon icon={faPython} color="#3776ab" />
                                </div>
                                <div className="face3">
                                    <FontAwesomeIcon icon={faGolang} color="#00add8" />
                                </div>
                                <div className="face4">
                                    <FontAwesomeIcon icon={faAws} color="#ff9900" />
                                </div>
                                <div className="face5">
                                    <img className="tech-logo" src={typescriptLogo} alt="TypeScript" />
                                </div>
                                <div className="face6">
                                    <FontAwesomeIcon icon={faLinux} className="linux-icon" color="#fbc02d" />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
