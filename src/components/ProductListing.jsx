import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: 'Wireless Mouse',
        price: 25.99,
        imageUrl: '/images/mouse.jpeg',
      },
      {
        id: 2,
        name: 'Mechanical Keyboard',
        price: 79.99,
        imageUrl: '/images/keyboard.jpeg',
      },
      {
        id: 3,
        name: 'USB-C Hub',
        price: 45.0,
        imageUrl: '/images/hub.jfif',
      },
    ];

    setProducts(dummyProducts);
    setLoading(false);
  }, []);

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id || product.name} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
              to={`/checkout?productId=${product.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
