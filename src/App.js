import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
      <Footer />
    </div>
  );
};

export default App;
