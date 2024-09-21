import { Link } from "react-router-dom";
import products from "../data/products"; // Your product data
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Home;
