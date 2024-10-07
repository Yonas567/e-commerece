import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext"; // Remove extra space

// Import your pages here
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <ProductProvider>
      <UserProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/order-history" element={<OrderHistory />} />
            </Routes>
          </Router>
        </CartProvider>
      </UserProvider>
    </ProductProvider>
  );
}

export default App;
