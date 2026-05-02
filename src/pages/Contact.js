import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us via WhatsApp</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-info-simple">
            {/* Location */}
            <div className="contact-card card">
              <div className="card-icon">📍</div>
              <h3>Location</h3>
              <div className="location-info">
                <span className="country-flag">🇬🇭</span>
                <p className="contact-value">Osu, Ghana</p>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="contact-card card">
              <div className="card-icon">💬</div>
              <h3>WhatsApp</h3>
              <p className="contact-value">+233 209 262 174</p>
              <a
                href="https://wa.me/233209262174"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
