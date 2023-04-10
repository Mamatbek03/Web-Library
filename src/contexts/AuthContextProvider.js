import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const API = "http://34.89.140.26/docs/?format=openapi";
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);
    try {
      await axios.post(`${API}/accounts/register/`, formData);
      navigate("/");
    } catch (error) {
      console.log(error.respones.data);
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("emails", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      console.log(error.respones.data);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("tokens");
    localStorage.removeItem("emails");
  };
  const values = {
    handleLogout,
    handleLogin,
    handleRegister,
    setError,
    // email,
    error,
    loading,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
