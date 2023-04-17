import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import CommentContextProvider from "./contexts/CommentContextProvider";

const App = () => {
  return (
    <CommentContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          {/* <Footer /> */}
        </AuthContextProvider>
      </ProductContextProvider>
    </CommentContextProvider>
  );
};

export default App;
