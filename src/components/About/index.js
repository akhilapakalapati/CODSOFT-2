import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = ()=> {
    
    const [letterClass,setLetterClass] = useState(`text-animate`)
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    

    return(
    <>
    <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}  
                    strArray={['A','b','o','u','t',' ','m','e']} idx={15}/>
                </h1>
                <p>I am passionate about technology. With my skills and experience. I can contribute well as a Software developer. I got
hands-on experience with various technologies. I am open to learn continuously in my role. I want to make a positive
impact on society. I believe that technology has the power to make such an impact.</p>
                <h2>Skills</h2>
                <ul>
                    <li>Frontend - HTML, CSS, Bootstrap, JavaScript, React.js</li>
                    <li>Backend - Python, Express, Node.js</li>
                    <li>Databases - SQLite</li>
                    <li>Other skills - Express(node), Flexbox, Git</li>
                </ul>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
    </div>
    <Loader type="line-spin-fade-loader"/>
    </>)
}

export default About