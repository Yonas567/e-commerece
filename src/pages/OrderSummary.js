import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleGoHome = () => {
    clearCart(); // Clear the cart after purchase
    navigate("/");
  };

  return (
    <div>
      <h1>Order Summary</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default OrderSummary;
