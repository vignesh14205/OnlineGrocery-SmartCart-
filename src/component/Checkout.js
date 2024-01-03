import React, { useState, useEffect } from 'react';
import { useCart } from './CardContext';
import Map from './Map';

const generateOrderId = () => {
  // You can implement your own logic to generate a unique order ID
  return Math.floor(Math.random() * 1000000);
};

const processCreditCardPayment = () => {
  // Implement credit card payment logic here
  console.log('Processing credit card payment...');
};

const processDebitCardPayment = () => {
  // Implement debit card payment logic here
  console.log('Processing debit card payment...');
};

const processCashOnDelivery = () => {
  // Implement cash on delivery payment logic here
  console.log('Processing cash on delivery payment...');
};

const processUpiPayment = () => {
  // Implement UPI payment logic here
  console.log('Processing UPI payment...');
};

const Checkout = () => {
  const { cart, calculateTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a unique order ID
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    // Process the order based on the selected payment method
    switch (formData.paymentMethod) {
      case 'credit-card':
        processCreditCardPayment();
        break;
      case 'debit-card':
        processDebitCardPayment();
        break;
      case 'cash-on-delivery':
        processCashOnDelivery();
        break;
      case 'upi':
        processUpiPayment();
        break;
      default:
        console.error('Invalid payment method');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img className="cartimage" src={item.image} alt={item.name} />
              {item.name} - ₹{item.price} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
      </div>

      <form onSubmit={handleSubmit}>
     <div className="form-field">
       <label htmlFor="name">Name</label>
       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
     </div>
     <div className="form-field">
       <label htmlFor="email">Email</label>
       <input type="email" id="name" name="email" value={formData.email} onChange={handleChange} required />
     </div>
     <div className="form-field">
       <label htmlFor="address">Address</label>
       <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
     </div>
       <Map/>
       <br/>
       <br/>
        <div className="form-field">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button type="submit">Place Order</button>
   </form>

      {orderId && (
        <div>
          <h3>Order ID: {orderId}</h3>
          {/* Display additional order details if needed */}
        </div>
      )}
    </div>
  );
};

export default Checkout;
