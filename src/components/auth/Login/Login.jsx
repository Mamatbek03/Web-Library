import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";

const Login = () => {
  const { handleLogin, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("Enter all inputs");
    } else {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  }
  return (
    <div>
      <h1>Login </h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSave}>login </button>
    </div>
  );
};

export default Login;
