import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API = "http://34.89.140.26";

  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      console.log(formData);
      const { data } = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("emails", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      setError(error.respones.data.detail);
    } finally {
      setLoading(false);
      console.log(error);
    }
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("tokens");
    localStorage.removeItem("emails");
  };
  const sendCodeToEmail = async (email) => {
    setLoading(true);
    try {
      console.log(23523);
      await axios.post(`${API}/accounts/forgot/`, email);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const saveNewPassword = async (formData) => {
    setLoading(true);
    try {
      await axios.put(`${API}/accounts/forgot/`, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const values = {
    saveNewPassword,
    sendCodeToEmail,
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
