import { Link } from "react-router-dom"
import './index.scss'
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from './Logo'
import Resume from '../Resume'; 


const Home = () =>{

    const [letterClass,setLetterClass] = useState(`text-animate`)
    const nameArray= [' ','A','k','h','i','l','a']
    const jobArray= ['W','e','b',' ','d','e','v','e','l','o','p','e','r','.',]
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Return a cleanup function to clear the timeout in case the component unmounts
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>ello,</span>
                     <br/>
                     <span className={`${letterClass} _13`}>I</span>
                     <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={22}/>
                </h1>
                <h2>MERN stack developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
            <div>    
            <Resume/>
               </div>
        </div>
    );
}
export default Home