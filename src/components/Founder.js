import React from 'react'; 
import ProfilePic from "../Assets/john-doe-image.png";
import Cybernuture from "../Assets/Cybernurture.png";

const Founder = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
           
            <h1 className='primary-heading'>Our Founder</h1>
            <p className='primary-text'>
                 Meet Adejo.O. Oladunni also known as cyber geek, a dynamic and driven individual who wears multiple hats as a cybersecurity analyst, tech startup founder, and advocate for digital skills awareness and youth empowerment. With a deep passion for technology and its potential to shape the future, Oladunni has dedicated her career to ensuring the safety and security of digital spaces.
            </p>
        </div>
        <div className='founder-section-bottom'>
            <img src={ProfilePic} alt='' />
            <p >
                Oladunni aspires to secure networks and systems while emphasizing education and empowerment, especially for the younger generation. Passionate about equipping them with knowledge and tools, she aims to help them navigate the online realm responsibly, focusing on Africa. Oladunni seeks to bridge the digital divide and empower young Africans to harness technology's positive potential through education on digital skills and creating a positive digital footprint.
                <h2>Adejo.O. Oladunni</h2>
            </p>
            <div className='footer-logo-container'>
                <img src={Cybernuture} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Founder