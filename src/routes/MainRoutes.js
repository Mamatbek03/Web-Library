import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/product/AddProduct";
import ProductList from "../components/product/ProductList";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/add" element={<ProductsPage />} />
        <Route path="/edit/:id" element={<ProductsPage />} /> */}
        <Route path="/addBook" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
