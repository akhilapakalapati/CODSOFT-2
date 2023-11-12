import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact =() => {

    const [letterClass,setLetterClass] = useState(`text-animate`)
    const form = useRef()

    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
  


  
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jsxj3j9', 'template_23cgk8m', form.current, 'ofySNlznsV4jZY66c')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
        }
    

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                I am interested in Frontend developer. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li className='second'>
                                <input placeholder='subject' type='text' name='subject' required/>
                            </li>
                            <li className='second'>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li >
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Akhila Pakalapati 
                <br/>
                India
                <br/>
                Eluru, Andhra Pradesh<br/>
                <span>akhiladentist@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[16.718201,81.119499]} zoom={15}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[16.718201,81.119499]}>
                        <Popup>Akhila lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="line-spin-fade-loader"/>
        </>
    )
}

export default Contact

