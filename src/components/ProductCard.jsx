
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCard = ({ product }) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div
      className="bg-[#f9f9f9] rounded-2xl shadow-md p-4 transition-transform duration-300 hover:scale-105"
      data-aos="fade-up"
    >
      <figure className="h-64 sm:h-72 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="mt-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-600 text-sm">Best Airproof, Dustproof & Waterproof Jacket for Winter</p>
        <p className="text-sm text-gray-800 mt-1 font-medium">{product.price} BDT</p>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-outline btn-primary w-full mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
