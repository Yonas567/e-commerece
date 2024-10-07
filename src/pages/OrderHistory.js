import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
function OrderHistory() {
  const { user } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  // For demonstration, we'll use hardcoded orders.
  // Later, this can be fetched from a backend or saved locally.
  const orders = [
    {
      id: 1,
      date: "2024-09-20",
      items: [
        { name: "Product 1", quantity: 2, price: 59.98 },
        { name: "Product 2", quantity: 1, price: 49.99 },
      ],
      total: 109.97,
    },
    {
      id: 2,
      date: "2024-09-10",
      items: [
        { name: "Product 3", quantity: 1, price: 29.99 },
        { name: "Product 4", quantity: 3, price: 89.97 },
      ],
      total: 119.96,
    },
  ];

  return (
    <div>
      <h1>Order History for {user.username}</h1>
      {orders.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h2>Order placed on {cartItems.name}</h2>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
              <h3>Total: ${order.total.toFixed(2)}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
