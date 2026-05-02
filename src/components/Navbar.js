import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/kennis-banner.jpg" alt="Kennis Power House" className="logo-img" />
          <span className="logo-text">Kennis Power House</span>
        </Link>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`nav-link ${isActive('/shop') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            className={`nav-link cart-link ${isActive('/cart') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="cart-icon">🛒</span>
            Cart
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
        </div>

        <button 
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
