import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-[#e5e5e5] w-96 shadow-sm m-4 p-4 rounded-2xl">
      <figure className="h-96 rounded-2xl p-2">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full h-full rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>Best Airproof, Dustproof & Waterproof Jacket for Winter</p>
        <p className="text-sm text-gray-600">{product.price} BDT</p>
        <div className="card-actions justify-end">
          <Link
            to={`/product/${product.id}`}
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
