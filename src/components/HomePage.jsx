import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1>Welcome to Our Store</h1>
      <Link to="/products">Browse Products</Link>
    </div>
  );
};

export default HomePage;
