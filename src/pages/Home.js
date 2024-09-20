import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Home() {
  const { cartItems } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Smartphone", price: "$800" },
    { id: 3, name: "Headphones", price: "$200" },
    { id: 4, name: "Camera", price: "$500" },
  ];

  return (
    <div>
      <nav>
        <Link to="/cart">Go to Cart ({cartItems.length})</Link>
      </nav>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
