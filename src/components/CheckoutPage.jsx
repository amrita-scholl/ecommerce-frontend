import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CheckoutPage = () => {
  const query = useQuery();
  const productId = query.get('productId');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      api.get(`/products/${productId}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error('Error fetching product', err));
    }
  }, [productId]);

  const handleCheckout = () => {
    api.post('/checkout', { productId })
      .then(res => alert('Purchase successful!'))
      .catch(err => alert('Checkout failed.'));
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="p-4">
      <h2>Checkout</h2>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleCheckout}>Confirm Purchase</button>
    </div>
  );
};

export default CheckoutPage;
