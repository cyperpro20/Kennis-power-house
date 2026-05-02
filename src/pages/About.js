import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Kennis Power House</h1>
          <p>Your Trusted Partner in Power Solutions & Mobile Accessories</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, Kennis Power House emerged with a simple yet powerful mission: to provide 
                premium phone accessories and cutting-edge solar solutions to empower individuals and businesses 
                across Nigeria.
              </p>
              <p>
                What started as a small venture in Lagos has grown into a trusted name in the tech and renewable 
                energy space. We believe that quality doesn't have to come at an exorbitant price, and reliability 
                shouldn't be compromised for convenience.
              </p>
              <p>
                Today, we serve thousands of satisfied customers who rely on our products to stay connected and 
                powered, whether through our premium mobile accessories or innovative solar solutions.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card card">
              <div className="card-number">01</div>
              <h3>Our Mission</h3>
              <p>
                To deliver world-class phone accessories and solar solutions that enhance connectivity, 
                productivity, and sustainability for every customer we serve.
              </p>
            </div>
            <div className="mission-card card">
              <div className="card-number">02</div>
              <h3>Our Vision</h3>
              <p>
                To become West Africa's leading destination for premium tech products and renewable energy 
                solutions, creating a brighter, more connected future.
              </p>
            </div>
            <div className="mission-card card">
              <div className="card-number">03</div>
              <h3>Our Values</h3>
              <p>
                Integrity, innovation, and customer-centricity guide everything we do. We stand by our products 
                and commit to excellence in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Only authentic, high-quality products from trusted manufacturers worldwide.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">⚡</div>
              <h3>Expert Knowledge</h3>
              <p>Our team has years of experience in mobile tech and solar solutions industry.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💳</div>
              <h3>Competitive Pricing</h3>
              <p>Best prices in the market without compromising on quality or authenticity.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery to your doorstep across Lagos and environs.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🤝</div>
              <h3>Customer Support</h3>
              <p>Dedicated support team ready to help you 24/7 with any questions or concerns.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">✓</div>
              <h3>Warranty & Guarantees</h3>
              <p>All products backed by manufacturer warranties and our customer satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>5000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Products in Stock</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-card">
              <h3>6+</h3>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <h2>Ready to Experience Excellence?</h2>
          <p>Join thousands of satisfied customers enjoying premium quality and exceptional service.</p>
          <div className="cta-buttons">
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
