import './App.css';
import { ProductEntryForm } from "./views/ProductEntryForm";
import { AllProducts } from './views/AllProducts';
import { OneProduct } from './views/OneProduct';
import {EditProduct } from './views/EditProduct';

import { Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate  to="/products" replace />}/>
        <Route path="/new" element={<ProductEntryForm />}></Route>
        <Route path="products/:id" element={<OneProduct />}/>
        <Route path="/products/:id/edit" element={ <EditProduct /> }></Route>
        <Route path="/products/new" element={<ProductEntryForm />} />
        <Route path="/products" element={<AllProducts/ >}/>
      </Routes>
    </div>
  );
}

export default App;
