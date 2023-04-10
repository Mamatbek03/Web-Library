import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
