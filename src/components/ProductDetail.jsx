
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './../producslice';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.product);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

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
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <div className="w-full h-72 sm:h-96 md:h-[500px] border rounded overflow-hidden">
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
                  className={`w-16 sm:w-20 h-16 sm:h-20 object-cover border-2 rounded transition-all duration-200 hover:scale-105 ${mainImage === img.name ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => setMainImage(img.name)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" data-aos="fade-left" data-aos-delay="100">{product.name}</h1>
          <p className="mb-2 text-gray-700" data-aos="fade-left" data-aos-delay="200">Price: <strong>{product.price} BDT</strong></p>
          <p className="mb-2 text-gray-700" data-aos="fade-left" data-aos-delay="300">Stock: {product.stock}</p>
          <p className="mb-2 text-gray-700" data-aos="fade-left" data-aos-delay="400">Category: {product.category?.name}</p>
          <p className="mb-6 whitespace-pre-line text-sm sm:text-base" data-aos="fade-left" data-aos-delay="500">{product.short_desc}</p>

          <div data-aos="fade-up" data-aos-delay="500">
            <Link
              to={`/order/${product.id}`}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-sm sm:text-base"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
