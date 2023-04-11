import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import Register from "../components/auth/Register/Register";
import Login from "../components/auth/Login/Login";
import EditPassword from "../components/auth/EditPassword/EditPassword";
import AddProduct from "../components/product/AddProduct";
import ProductList from "../components/product/ProductList";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/edit/:id" element={<ProductsPage />} />
        <Route path="/edit-password" element={<EditPassword />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
