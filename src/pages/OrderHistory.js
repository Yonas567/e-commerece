import React, { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orders.map((order, orderIndex) => {
            // Check if the order is an array of items or a single item
            const items = Array.isArray(order) ? order : [order];

            return (
              <div
                key={orderIndex}
                style={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  marginBottom: "20px",
                }}>
                <h2>Order #{orderIndex + 1}</h2>
                <p>
                  <strong>Date:</strong> {new Date().toLocaleDateString()}
                </p>
                <p>
                  <strong>Order Total:</strong> $
                  {items
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </p>
                <ul>
                  {items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "10px",
                        marginBottom: "10px",
                      }}>
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price}</p>
                      <p>Description: {item.description}</p>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ width: "100px" }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
