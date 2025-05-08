import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductListing from './components/ProductListing';
import CheckoutPage from './components/CheckoutPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
);

export default App;
