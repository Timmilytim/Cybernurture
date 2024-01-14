import React from 'react';
import Cybernuture from "../Assets/Cybernurture.png";
import { BsTwitterX } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Cybernuture} alt='' />
            </div>
            <div className='footer-icons'>
              <a href='https://x.com/cybernurture?t=TZT-zgQzKJq0IRMlSWesPw&s=09'><BsTwitterX/></a>  
              <a href=''><BsInstagram/></a>
              <a href=''><BsWhatsapp/></a>
            </div>
        </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Careers</span>
                    <span>About</span>
                </div>
                <div className='footer-section-columns'>
                    <span>09026067000</span>
                    <span>lorem@gmail.com</span>
                    <span>Shdjgreare</span>
                    <span>Careersdndjfrhe</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div> 
  )
};

export default Footer;