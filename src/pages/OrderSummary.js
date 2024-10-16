import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderSummary() {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] }; // Get the selected items passed from Checkout
  const navigate = useNavigate();

  // Calculate total based on selected items
  const total = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleGoHome = () => {
    navigate("/", { state: { selectedItems } });
  };

  return (
    <div>
      <h1>Order Summary</h1>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default OrderSummary;
