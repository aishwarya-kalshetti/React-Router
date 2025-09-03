import React from "react";
import '../../App.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get in touch:</h1>
          <p>Fill in the form to start a conversation</p>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>Solapur, Maharashtra, India</div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>+91 1234567890</div>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <div>aish@gmail.com</div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="tel">Number</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Number"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
