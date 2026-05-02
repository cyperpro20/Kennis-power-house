import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { getProductById, products } from '../data/products';
import '../styles/productdetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>Sorry, the product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-details">
      {/* Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="product-layout">
            {/* Product Image */}
            <div className="product-image-section">
              <div className="main-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-badges">
                <span className="badge">Best Seller</span>
                <span className="badge badge-hot">🔥 Hot</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <p className="product-category">{product.category}</p>
              <h1>{product.name}</h1>

              <div className="rating-section">
                <div className="stars">
                  {'⭐'.repeat(Math.floor(product.rating))}
                </div>
                <span className="rating-value">{product.rating} Rating</span>
                <span className="reviews-count">(128 reviews)</span>
              </div>

              <p className="product-description">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="specs-section">
                <h3>Specifications</h3>
                <div className="specs-list">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">{key}:</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase */}
              <div className="purchase-section">

                <div className="quantity-section">
                  <label>Quantity:</label>
                  <div className="quantity-input">
                    <button onClick={() => handleQuantityChange(quantity - 1)}>−</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(Number(e.target.value))}
                      min="1"
                    />
                    <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-add-to-cart"
                  onClick={handleAddToCart}
                >
                  {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>

                <div className="additional-options">
                  <button className="btn btn-secondary btn-full">
                    ❤️ Wishlist
                  </button>
                  <button className="btn btn-secondary btn-full">
                    💬 Ask a Question
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="shipping-info">
                <div className="info-item">
                  <span className="icon">🚚</span>
                  <div>
                    <p className="info-label">Free Shipping</p>
                    <p className="info-text">On orders over ₦10,000</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">✓</span>
                  <div>
                    <p className="info-label">2-Year Warranty</p>
                    <p className="info-text">On selected products</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">↩️</span>
                  <div>
                    <p className="info-label">30-Day Returns</p>
                    <p className="info-text">No questions asked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="container">
            <h2>Related Products</h2>
            <div className="products-grid grid-4">
              {relatedProducts.map(relProduct => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2>Customer Reviews</h2>
          <div className="reviews-grid">
            <div className="review card">
              <div className="review-header">
                <div className="reviewer">
                  <p className="reviewer-name">John Doe</p>
                  <p className="review-date">2 days ago</p>
                </div>
                <span className="review-stars">{'⭐'.repeat(5)}</span>
              </div>
              <p className="review-title">Excellent Product!</p>
              <p className="review-text">
                This product exceeded my expectations. Great quality and fast delivery. Highly recommend!
              </p>
            </div>

            <div className="review card">
              <div className="review-header">
                <div className="reviewer">
                  <p className="reviewer-name">Jane Smith</p>
                  <p className="review-date">1 week ago</p>
                </div>
                <span className="review-stars">{'⭐'.repeat(4)}</span>
              </div>
              <p className="review-title">Good Value</p>
              <p className="review-text">
                Good product at a reasonable price. Would have liked faster shipping but overall satisfied.
              </p>
            </div>

            <div className="review card">
              <div className="review-header">
                <div className="reviewer">
                  <p className="reviewer-name">Ahmed Hassan</p>
                  <p className="review-date">2 weeks ago</p>
                </div>
                <span className="review-stars">{'⭐'.repeat(5)}</span>
              </div>
              <p className="review-title">5 Stars Service</p>
              <p className="review-text">
                Amazing customer service and the product is exactly as described. Will order again!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
