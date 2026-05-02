import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/productcard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="stars">
            {'⭐'.repeat(Math.floor(product.rating))}
          </span>
          <span className="rating-value">{product.rating}</span>
        </div>
        <button 
          className="btn btn-secondary btn-add-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
