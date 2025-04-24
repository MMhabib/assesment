
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './../producslice';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  if (status === 'loading') return <p className="text-center p-4">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500 p-4">{error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold my-6 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
