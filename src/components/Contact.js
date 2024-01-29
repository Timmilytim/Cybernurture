import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
      AOS.init({duration: 500})
  },[]);
    return (
      <div className='contact-page-wrapper' id="contact">
          <h1 className='primary-heading' data-aos="fade-down">Have a Question in Mind?</h1>
          <h2 className='primary-heading' data-aos="fade-up">Let us Help You</h2>
          <div className='contact-form-container' data-aos="zoom-in">
              <input type='text' placeholder='youremail@gmail.com' />
              <button className='secondary-button' data-aos="flip-right">Submit</button>
          </div>

          
      </div>
    )
  }

export default Contact;