import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const { state } = useLocation();
  const { selectedItems } = state;
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save selectedItems to localStorage
    localStorage.setItem("orderHistory", JSON.stringify(selectedItems));

    // Clear the cart after placing the order
    clearCart();

    // Navigate to order-summary page and pass state
    navigate("/order-summary", { state: { selectedItems } });
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
