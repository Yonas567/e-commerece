import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just navigate to an order summary after "payment"
    navigate("/order-summary");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Credit Card:</label>
          <input type="text" required />
        </div>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
