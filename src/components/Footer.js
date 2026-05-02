import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Kennis Power House</h3>
              <p>Your trusted dealer for premium phone accessories.</p>
            </div>

            <div className="footer-section">
              <h4>Categories</h4>
              <ul>
                <li><a href="/shop?category=Phone Accessories">Phone Accessories</a></li>
                <li><a href="/shop">All Products</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Fast Delivery</h4>
              <p>🚚 Quick and reliable delivery to your doorstep across Accra, Ghana.</p>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📞 +233 209 262 174</p>
              <p>🕐 Mon - Fri: 9AM - 6PM</p>
              <p>📍 Osu, Ghana</p>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom" style={{ justifyContent: 'center' }}>
            <p>&copy; {currentYear} Kennis Power House. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
