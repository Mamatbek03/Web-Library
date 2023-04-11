import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
    </AuthContextProvider>
  );
};

export default App;
