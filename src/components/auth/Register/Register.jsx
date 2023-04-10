import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";

const Register = () => {
  const { handleRegister } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Enter all inputs");
    } else {
      console.log(email, password, passwordConfirm);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("activation_code", passwordConfirm);
      console.log(formData);
      handleRegister(formData);
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <input
        onClick={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onClick={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <input
        onClick={(e) => setPasswordConfirm(e.target.value)}
        type="password"
        placeholder="password confirm"
      />
      <button onClick={handleSave}>register</button>
    </div>
  );
};

export default Register;
