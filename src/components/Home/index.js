import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import HeadShot from '../../assets/images/headshot.png'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'J', 'o', 'm', 'i']
    const jobArray = ['C', 'S',' ', 'M', 'a', 'j', 'o', 'r', ' ', 'A', 't', ' ', 'S', 'e','a','t','t','l','e', ' ', 'U', '.']

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)  
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>S</span>
                <span className={`${letterClass} _12`}>u</span>
                <span className={`${letterClass} _12`}>p,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2> FullStack Developer interested in Backend Development</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Link className='logo' to='https://www.linkedin.com/in/jomikael-ruiz/'>
                <div className="Headshot">
                    <img className="profImage" src={HeadShot} alt="Jomikael Ruiz" />
                </div>
            </Link>
        </div>
    );

}

export default Home;