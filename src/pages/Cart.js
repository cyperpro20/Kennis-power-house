import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/cart.css';

const WHATSAPP_NUMBER = '233209262174';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const itemLines = cartItems
      .map(item => `• ${item.name} (x${item.quantity})`)
      .join('%0A');

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const message =
      `Hello! I'd like to order the following item${cartItems.length > 1 ? 's' : ''} from Kennis Power House:%0A%0A` +
      `${itemLines}%0A%0A` +
      `Total items: ${totalItems}%0A%0A` +
      `Please let me know the prices and availability. Thank you!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <section className="cart-header">
          <div className="container">
            <h1>Shopping Cart</h1>
          </div>
        </section>

        <section className="cart-content">
          <div className="container">
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your Cart is Empty</h2>
              <p>Start shopping to add items to your cart</p>
              <Link to="/shop" className="btn btn-primary btn-lg">
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart">
      <section className="cart-header">
        <div className="container">
          <h1>Shopping Cart</h1>
        </div>
      </section>

      <section className="cart-content">
        <div className="container">
          <div className="cart-layout">

            {/* Cart Items */}
            <div className="cart-items-section">
              <div className="cart-items-header">
                <h2>Cart Items ({cartItems.length})</h2>
                <button className="btn btn-secondary" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item card">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-category">{item.category}</p>
                    </div>

                    <div className="cart-item-quantity">
                      <label>Quantity:</label>
                      <div className="quantity-control">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          min="1"
                        />
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="cart-summary card">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Total items:</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Products:</span>
                <span>{cartItems.length} type{cartItems.length !== 1 ? 's' : ''}</span>
              </div>

              <p className="whatsapp-note">
                💬 Send your order to us on WhatsApp and we'll get back to you with pricing and availability.
              </p>

              <button
                className="btn btn-whatsapp btn-block"
                onClick={handleWhatsAppOrder}
              >
                <span>💬</span> Order via WhatsApp
              </button>

              <Link to="/shop" className="btn btn-outline btn-block">
                Continue Shopping
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
