import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper' id="contact">
        <h1 className='primary-heading'>Have a Question in Mind?</h1>
        <h2 className='primary-heading'>Let us Help You</h2>
        <div className='contact-form-container'>
            <input type='text' placeholder='youremail@gmail.com' />
            <button className='secondary-button'>Submit</button>
        </div>

        
    </div>
  )
}

export default Contact;