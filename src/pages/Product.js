import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$1200",
      description: "A high-performance laptop",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$800",
      description: "A latest-gen smartphone",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$200",
      description: "Noise-cancelling headphones",
    },
    {
      id: 4,
      name: "Camera",
      price: "$500",
      description: "A high-definition camera",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
