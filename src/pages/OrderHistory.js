import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OrderHistory() {
  const location = useLocation();
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Retrieve order history from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(storedOrders);
  }, []);

  // If there’s a new order, update the order history
  useEffect(() => {
    if (location.state?.selectedItems) {
      const newOrder = {
        date: new Date().toLocaleDateString(),
        items: location.state.selectedItems,
      };

      const updatedOrderHistory = [newOrder, ...orderHistory];
      setOrderHistory(updatedOrderHistory);
      localStorage.setItem("orderHistory", JSON.stringify(updatedOrderHistory));
    }
  }, [location.state, orderHistory]);

  return (
    <div>
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index}>
              <h3>Order Date: {order.date}</h3>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    <strong>{item.name}</strong> - ${item.price} x{" "}
                    {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
