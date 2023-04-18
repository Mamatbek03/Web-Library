import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import CommentContextProvider from "./contexts/CommentContextProvider";
import CartContextProvider from "./contexts/CartContexProvider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <CommentContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </AuthContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </CommentContextProvider>
  );
};

export default App;
