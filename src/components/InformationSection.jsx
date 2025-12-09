import React from 'react'
import './InformationSection.css'
const InformationSection = () => {
  return (
    <div className='info-section'>
      <div className="brand-info">
        <h2>About Our Job Portal</h2>
        <p>1. We connect job seekers with their dream jobs through an easy-to-use platform.</p>
        <p>2. Our mission is to simplify the job search process and help employers find the best talent.</p>
        <p>3. We value transparency, efficiency, and user satisfaction in all our services.</p>
        <p>4. Join us today and take the next step in your career journey.</p>
      </div>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@jobfinder.com</p>
      </div>
    </div>
  )
}

export default InformationSection
