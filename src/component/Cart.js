import React, { useState } from 'react';

const Cart = ({ cart, clearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Implement order processing logic here (e.g., send order to backend)
    alert(`Order placed successfully! Payment Method: ${paymentMethod}`);
  };

  return (
    <div class="checkout">
      <h2>Checkout</h2>
      <div>
        <label>Select Payment Method:</label>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
