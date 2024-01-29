import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cybernuture from "../Assets/Cybernurture.png";
import { BsTwitterX } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[]);
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container' data-aos="flip-left" >
                <img src={Cybernuture} alt='' />
            </div>
            <div className='footer-icons' data-aos="fade-right">
              <a href='https://x.com/cybernurture?t=TZT-zgQzKJq0IRMlSWesPw&s=09' ><BsTwitterX/></a>  
              <a href='https://www.instagram.com/_cybernurture/'><BsInstagram/></a>
              <a href=' https://wa.me/+2347060504766'><BsWhatsapp/></a>
            </div>
        </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'data-aos="fade-right">
                    <span>Quality</span>
                    <span>Help</span>
                    <span >Share</span>
                    <span>Careers</span>
                    <span>About</span>
                </div>
                <div className='footer-section-columns' data-aos="fade-right">
                    <span>07060504766</span>
                    <span>lorem@gmail.com</span>
                    <span>Shdjgreare</span>
                    <span>Careersdndjfrhe</span>
                </div>
                <div className='footer-section-columns' data-aos="fade-right">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div> 
  )
};

export default Footer;