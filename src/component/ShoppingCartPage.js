// import React, { useState } from 'react';

// const ShoppingCartPage = ({ cart}) => {
//   const [paymentMethod, setPaymentMethod] = useState('cash');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
  

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handlePlaceOrder = async () => {
//     setIsLoading(true);
//     setErrorMessage('');

//     // try {
//     //   const response = await axios.post('/api/orders', {
//     //     cartItems: cart,
//     //     paymentMethod,
//     //   });
//       alert(`Order placed successfully! Order ID`);
//     // } catch (error) {
//     //   setErrorMessage('Failed to place order. Please try again.');
//     //   console.error(error); // Log error details for debugging
//     // } finally {
//     //   setIsLoading(false);
//     // }
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };
//   return (
//     <div className="checkout"> {/* Use className instead of class for styling in React */}
//       <h2>Checkout</h2>

//       {/* Display Cart Items */}
//       <div>
//         <h3>Cart Items:</h3>
//         <ul>
//           {cart.map((item, index) => (
//            <li key={index}>
//            {item.name} - ₹{item.price} - Quantity: {item.quantity}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Display Total Amount */}
//       <div>
//         <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
//       </div>

//       {/* Select Payment Method */}
//       <div>
//         <label>Select Payment Method:</label>
//         <select value={paymentMethod} onChange={handlePaymentMethodChange}>
//           <option value="cash">Cash</option>
//           <option value="card">Card</option>
//         </select>
//       </div>

//       {/* Place Order Button */}
//       {isLoading ? (
//         <button disabled>Placing Order...</button>
//         ) : (
//           <button onClick={handlePlaceOrder}>Place Order</button>
//       )}
//     </div>
//   );
// };

// export default ShoppingCartPage;

// ShoppingCartPage.js
import React,{useEffect} from 'react';
import { useCart } from './CardContext';
import { Link } from 'react-router-dom';



const ShoppingCartPage = () => {
 
    const {cart,setCart } = useCart();

    const removeFromCart = (productId) => {
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
    };
  
    const increaseQuantity = (productId) => {
      const updatedCart = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    };
  
    const decreaseQuantity = (productId) => {
      const updatedCart = cart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    };
  
  
    // const calculateTotalPrice = () => {
    //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // };
  
  
  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      console.log(`Item: ${item.name}, Item Total: ${itemTotal}`);
      return total + itemTotal;
    }, 0);
    
    console.log("Total Price:", totalPrice);
    return totalPrice;
  };
  
  useEffect(() => {
    console.log('Cart:', cart);
    console.log('Total Price:', calculateTotalPrice());
  }, [cart]);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>

   
      <div class="cart">
      
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img className="cartimage" src={item.image} alt={item.name} />
            {item.name} - ₹{item.price} - Quantity: {item.quantity}
            <div class="cartbutton">
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
        <p>Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
      </ul>
      TotalQuantity- <div className="cart-icon"> <span>{totalQuantity}</span> </div>
      <Link to='/checkout'><button>Checkout</button></Link>
      </div>
    </div> 
    
  );
};

export default ShoppingCartPage;