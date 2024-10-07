import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Calculate total by considering the quantity of each item
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle selecting/unselecting an item
  const handleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Proceed to Checkout function
  const handleProceedToCheckout = () => {
    if (selectedItems.length > 0) {
      // Push only the selected items to the checkout page
      navigate("/checkout", { state: { selectedItems } }); // Use navigate instead of history.push
    } else {
      alert("Please select at least one product to proceed to checkout.");
    }
    clearCart();
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleSelectItem(item)}
                />
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          {/* Total with quantity considered */}
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
