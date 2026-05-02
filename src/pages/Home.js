import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import '../styles/home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(/kennis-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Power Your Devices & Home</h1>
          <p className="hero-subtitle">
            Premium Phone Accessories & Cutting-edge Solar Solutions
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-background">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
          <div className="glow glow-3"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Our Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="category-card card"
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked quality items for you</p>
          </div>
          <div className="products-grid grid-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn btn-primary btn-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <h2>Why Choose Kennis Power House?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Only the best brands and products that deliver genuine value.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep across Nigeria.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payment</h3>
              <p>Safe and flexible payment options for your convenience.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🤝</div>
              <h3>Expert Support</h3>
              <p>Dedicated customer service to answer all your questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Power Up?</h2>
          <p>Discover our complete range of Phone Accessories & Solar Solutions</p>
          <div className="cta-buttons">
            <Link to="/shop" className="btn btn-primary">
              Browse Shop
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

export default Home;
