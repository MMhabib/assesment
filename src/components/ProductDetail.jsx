import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './../producslice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.product);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  useEffect(() => {
    const found = products.find((p) => p.id.toString() === id);
    if (found) {
      setProduct(found);
      setMainImage(found.image);
    }
  }, [products, id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-full h-[500px] border rounded overflow-hidden">
            <img
              src={`https://admin.refabry.com/storage/product/${mainImage}`}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {product.product_images?.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide">
              {product.product_images.map((img) => (
                <img
                  key={img.id}
                  src={`https://admin.refabry.com/storage/product/${img.name}`}
                  alt="variant"
                  className={`w-20 h-20 object-cover border-2 rounded  transition-all duration-200  ${mainImage === img.name ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => setMainImage(img.name)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="mb-2 text-gray-700">Price: <strong>{product.price} BDT</strong></p>
          <p className="mb-2 text-gray-700">Stock: {product.stock}</p>
          <p className="mb-2 text-gray-700">Category: {product.category?.name}</p>
          <p className="mb-6 whitespace-pre-line">{product.short_desc}</p>

          <Link
            to={`/order/${product.id}`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
