import { useState } from 'react'
import './Contact.css'
import { FiInstagram, FiLinkedin, FiThumbsUp, FiArrowRight } from 'react-icons/fi'
import { FaFacebook, FaYoutube, FaVimeoV } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
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
          <h1>Get in Touch</h1>
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h3>find us:</h3>
            <p className="info-text">
              Mindlap architects,<br />
              22, 4th floor, veeramamunivar street,<br />
              teachers colony, erode - 638011<br />
              tamil nadu.
            </p>
          </div>

          <div className="info-section">
            <h3>lets talk:</h3>
            <p className="info-text">
              +91-97150-71601<br />
              info@mindlaparchitects.in
            </p>
          </div>

          <div className="info-section">
            <h3>follow us:</h3>
            <p className="info-text">
              insta, facebook, linkedin
            </p>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FiInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaYoutube /></a>
          <a href="https://www.vimeo.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaVimeoV /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FiLinkedin /></a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
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
              <label htmlFor="contactNo">Contact No.</label>
              <input
                type="tel"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>
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

          <div className="form-actions">
            <button type="submit" className="submit-btn">Send</button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
