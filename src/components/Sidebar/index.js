import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src='https://img.freepik.com/premium-photo/floral-letter-with-watercolor-roses_653204-458.jpg' alt="logo"className="logo-ak"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#ee7674"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#ee7674"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#ee7674"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/akhila-pakalapati/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#ee7674"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/akhilapakalapati'>
                    <FontAwesomeIcon icon={faGithub} color="#ee7674"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCja-e11og6pzff7vW0nWHPA'>
                    <FontAwesomeIcon icon={faYoutube} color="#ee7674"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar