import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './component/ProductsPage/ProductsPage';
import Home from './component/Home/Home';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Navbar from './component/Navbar/Navbar';
import './App.css';
import CreateOrderPage from './component/Order/Orders';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './component/Profile';


export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };


  return (
    <div className="app">
      <BrowserRouter>
      <Navbar handleOpenLoginModal={handleOpenLoginModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage  />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails/>}
          />
          <Route path="/place-order" element={  <CreateOrderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {isLoginModalOpen && (
        <Login
          isOpen={isLoginModalOpen}
          onClose={handleCloseLoginModal}
        />
      )}
    </div>
  );
}