import React,{useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
      AOS.init({duration: 500})
  },[]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs.sendForm("service_afkbby8","template_fle93nq", e.target, "jLjFCFxy1hoqECfbA")
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

    return (
      <div className='contact-page-wrapper' id="contact">
          <h1 className='primary-heading' data-aos="fade-down">Have a Question in Mind?</h1>
          <h2 className='primary-heading' data-aos="fade-up">Let us Help You</h2>
          <div className='contact-form-container' data-aos="zoom-in">
            <form>
              <label className='form-label'>Name</label><br/>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/><br/>

              <label className='form-label'>Email</label><br/>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br/>

              <label className='form-label'>Message</label><br/>
              <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required/>


              <button type="submit" className='secondary-button' data-aos="flip-right">Submit</button>
            </form>

          </div>

          
      </div>
    )
  }

export default Contact;