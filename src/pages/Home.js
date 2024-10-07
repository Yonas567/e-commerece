import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import React, { useContext } from "react"; // Correct import statement for useContext

import { UserContext } from "../context/UserContext"; // Make sure the path is correct
import { ProductContext } from "../context/ProductContext";

function Home() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div>
        <h1>Welcome to the Store</h1>
        {user ? (
          <div>
            <p>Hello, {user.username}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please sign up or log in.</p>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => navigate("/cart")}>Go to cart</button>
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={`/product/${product.id}`}>
                <h2>{product.name}</h2>
                <img src={product.imageUrl} alt={product.name} />
                <p>Price: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
