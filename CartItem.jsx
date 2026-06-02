
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <nav style={{ background: 'rgba(0,0,0,0.7)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Plants</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cart</a>
        </div>
      </nav>

      <h2>Shopping Cart</h2>
      <h3>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</h3>
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 4px' }}>{item.name}</h4>
              <p style={{ margin: '0 0 4px' }}>Unit Price: ${item.price}</p>
              <p style={{ margin: '0 0 8px' }}>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button onClick={() => handleDecrement(item)} style={{ padding: '4px 10px', cursor: 'pointer' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '4px 10px', cursor: 'pointer' }}>+</button>
                <button onClick={() => handleRemove(item.name)} style={{ padding: '4px 10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button onClick={onContinueShopping} style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button onClick={handleCheckout} style={{ padding: '10px 20px', background: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
