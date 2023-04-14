import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const API = "http://34.89.140.26";
  const API = "http://34.107.92.21";

  const navigate = useNavigate();

  const handleRegister = async (formData, email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData);
      handleLogin(formData, email);
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
      localStorage.setItem("email", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.respones.data.detail);
    } finally {
      setLoading(false);
      console.log(error);
    }
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    navigate("/");
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
  const updateAuth = async () => {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        header: {
          Authorization,
        },
      };
      console.log(tokens.refresh);
      const res = await axios.post(`${API}/accounts/refresh/`, {
        refresh: tokens.refresh,
        config,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setUser(email);
    } catch (error) {
      handleLogout();
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const values = {
    updateAuth,
    saveNewPassword,
    sendCodeToEmail,
    handleLogout,
    handleLogin,
    handleRegister,
    setError,
    user,
    error,
    loading,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
