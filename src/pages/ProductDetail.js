import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
//Assuming you have a products data file

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Find the product based on the ID from the URL
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
