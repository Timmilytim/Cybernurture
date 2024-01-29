import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfilePic from "../Assets/john-doe-image.png";
import Cybernuture from "../Assets/Cybernurture.png";

const Founder = () => {
    useEffect(() => {
        AOS.init({duration: 1500})
    },[]);
  return (
    <div className='work-section-wrapper' >
        <div className='work-section-top'>
           
            <h1 className='primary-heading' data-aos="fade-down">Our Founder</h1>
            <p className='primary-text' data-aos="fade-up">
                 Meet Adejo.O. Oladunni also known as cyber geek, a dynamic and driven individual who wears multiple hats as a cybersecurity analyst, tech startup founder, and advocate for digital skills awareness and youth empowerment. With a deep passion for technology and its potential to shape the future, Oladunni has dedicated her career to ensuring the safety and security of digital spaces.
            </p>
        </div>
        <div className='founder-section-bottom' data-aos="flip-left">
            <img src={ProfilePic} alt='' data-aos="zoom-in" />
            <p className='primary-text' data-aos="zoom-in">
                 I seek to bridge the digital division and empower young Africans to harness technology's positive potential through education on digital skills and creating a positive digital footprint.
                <h2>Adejo.O. Oladunni</h2>
            </p>
            <div className='footer-logo-container' data-aos="fade-up">
                <img src={Cybernuture} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Founder