import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './../producslice';
import axios from 'axios';
import Swal from 'sweetalert2';

const OrderForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.product);

  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    c_phone: '',
    c_name: '',
    courier: '',
    address: '',
    cod_amount: '',
    delivery_charge: '80',
  });

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  useEffect(() => {
    const found = products.find((p) => p.id.toString() === id);
    if (found) {
      setProduct(found);
      setFormData((prev) => ({ ...prev, cod_amount: found.price }));
    }
  }, [products, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      product_ids: product.id.toString(),
      s_product_qty: '1',
      ...formData,
    };
    axios.post('https://admin.refabry.com/api/public/order/create', payload)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Order Placed',
          text: 'Your order has been placed successfully!',
        }).then(() => navigate('/'));
      });
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Order: {product.name}</h2>
      <p className="mb-2 text-gray-700">Price: {product.price} BDT</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['c_name', 'c_phone', 'courier', 'address'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.replace('_', ' ')}
            className="w-full p-2 border rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
