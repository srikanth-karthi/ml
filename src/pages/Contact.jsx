import { useState } from 'react'
import './Contact.css'
import { FiPhone, FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="contact-page">
      <div className="contact-left">
        <div className="contact-header">
          <h1>Contact us</h1>
          <p className="contact-subtitle">Get in touch with us for any enquiries and questions</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-right">
        <div className="contact-info-section">
          <h2>location</h2>
          <p className="address">
            22, 4th floor, veeramamunivar street,<br />
            teachers colony, erode - 638011<br />
            tamil nadu.
          </p>

          <div className="contact-details">
            <h3>Let's Talk:</h3>
            <a href="tel:+919715071601" className="contact-link">
              <span className="icon"><FiPhone /></span>
            </a>
            <a href="mailto:info@mindlaparchitects.in" className="contact-link">
              <span className="icon"><FiMail /></span>
            </a>
          </div>

          <div className="social-section">
            <h3>Follow us:</h3>
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="icon"><FiInstagram /></span>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="icon"><FaFacebook /></span>
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="icon"><FiLinkedin /></span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Contact
