import React from 'react'; 
import ProfilePic from "../Assets/john-doe-image.png";
import Cybernuture from "../Assets/Cybernurture.png";

const Founder = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
           
            <h1 className='primary-heading'>Our Founder</h1>
            <p className='primary-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt error, voluptas earum ue.
            </p>
        </div>
        <div className='founder-section-bottom'>
            <img src={ProfilePic} alt='' />
            <p >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt error, voluptas earum ue.
                <h2>Dunz</h2>
            </p>
            <div className='footer-logo-container'>
                <img src={Cybernuture} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Founder