import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
    useEffect(() => {
        AOS.init({duration: 500})
    },[]);
  return( 
    <div className='about-section-container' id="about">
        <div className='about-background-image-container' data-aos="fade-right">
            <img src={AboutBackground} alt='' />
        </div>
        <div className='about-section-image-container' data-aos="zoom-in">
            <img src={AboutBackgroundImage} alt=" "/>
        </div>
        <div className='about-section-text-container' data-aos="zoom-in">
        {/* <p className='primary-subheading'>About Cybernurture</p> */}
        <h1 className='primary-heading' data-aos="fade-down">
            About Cybernurture Innovation Hub
        </h1>
        <p className='primary-text' data-aos="fade-left">
        Cybernurture is a community aimed to promote learning of digital skills to every young Africans it gives the space to exhibit their skills.
        </p>
        <p className='primary-text' data-aos="fade-right">
        It is a community that encourage Africans to grow and thrive into the digital age from professional insight in other to contribute great impact in the technology space and creating positive digital footprint
        </p>
        <div className='about-buttons-container'>
            {/* <button className='secondary-button'>Learn More</button> */}

            {/* I Still want to make a video and add to this section */}
            {/* <button className='watch-video-button'>{" "}<BsFillPlayCircleFill/>watch Video</button> */}
        </div>
        </div>
    </div>

  );
};

export default About;