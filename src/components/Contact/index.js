import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import cinamoroll from '../../assets/images/cinamoroll.png'
import { Link } from 'react-router-dom';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)  
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_q2dcubn',
                'template_zoh4inm',
                refForm.current,
                '0Pc8fLfotuCmRN2sN'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']}
                            idx={16}
                        />
                    </h1>
                    <p>
                        I am interested in learning more about programming and expanding my skills and knowledge to different projects!
                        If you would like to collaborate on a project or idea, please reach out!
                    </p>
                    <div className="contact-form">
                        <form ref ={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text"  name="Subject" required/>
                                </li>
                                <li>
                                    <textarea placeholdler="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <Link className='logo' to='https://www.linkedin.com/in/jomikael-ruiz/'>
                    <div className="Headshot">
                        <img className="profImage" src={cinamoroll} alt="Jomikael Ruiz" />
                    </div>
            </Link>
            </div>
            <Loader type="pacman" />
        </>


    )

}

export default Contact