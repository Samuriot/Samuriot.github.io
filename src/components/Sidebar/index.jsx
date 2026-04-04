import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Jomikael Ruiz" />
        </Link>
        <nav>
            <NavLink
            end
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/">
                <FontAwesomeIcon icon={faHome} color="#473e66" />
            </NavLink>
            <NavLink 
                className={({ isActive }) => `about-link${isActive ? ' active' : ''}`}
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#473e66" />
            </NavLink>
            <NavLink 
                className={({ isActive }) => `contact-link${isActive ? ' active' : ''}`}
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#473e66" />
            </NavLink>
            <NavLink 
                className={({ isActive }) => `project-link${isActive ? ' active' : ''}`}
                to="/project"
            >
                <FontAwesomeIcon icon={faFolder} color="#473e66" />
            </NavLink>
        </nav>
        <ul className='social-links'>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Samuriot" aria-label="GitHub profile" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} color="#473e66" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jomikael-ruiz/" aria-label="LinkedIn profile" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} color="#473e66" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;
