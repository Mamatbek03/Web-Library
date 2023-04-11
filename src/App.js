import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </ProductContextProvider>
  );
};

export default App;
