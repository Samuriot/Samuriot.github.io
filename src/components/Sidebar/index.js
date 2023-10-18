import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Jomikael Ruiz" />
        </Link>
        <nav>
            <NavLink exact="true" 
            activateclassname="active" 
            to="/">
                <FontAwesomeIcon icon={faHome} color="#473e66" />
            </NavLink>
            <NavLink 
                exact="true" 
                activateclassname="active" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#473e66" />
            </NavLink>
            <NavLink 
                exact="true" 
                activateclassname="active" 
                className="contact-link" 
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#473e66" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jomikael-ruiz/">
                    <FontAwesomeIcon icon={faLinkedinIn} color="#473e66" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Samuriot">
                    <FontAwesomeIcon icon={faGithub} color="#473e66" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;