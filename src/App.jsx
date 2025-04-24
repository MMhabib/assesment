import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import OrderForm from './components/OrderForm';



function App() {
  return (
    <div  className="p-4 max-w-6xl mx-auto">
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<OrderForm />} />
      </Routes>
    </div>
  );
}

export default App;