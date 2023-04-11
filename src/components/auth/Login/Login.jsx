import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, error, setError, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSave() {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", userName);
    formData.append("password", password);
    handleLogin(formData, email);
  }
  if (loading) return <Loading />;
  return (
    <>
      <div>
        <h1>Login </h1>
        {error ? <p>{}</p> : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="user Name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button onClick={handleSave}>login </button>
      </div>
      <p onClick={() => navigate("/edit-password")}>forget Password?</p>
    </>
  );
};

export default Login;
