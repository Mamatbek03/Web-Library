import * as React from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import css from "./Register.css"
import { red } from '@mui/material/colors';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import registerImg from "./register.png"

export default function RegisterList() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const { handleRegister, loading, error, setError } = useAuth();

  const handleSave = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password2", passwordConfirm);
      formData.append("username", userName);
      handleRegister(formData, email);
    }
  };

  React.useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className="register" display="flex" >
         <h1>Register </h1>
        <div><PersonAddAlt1Icon/></div>
      <form className="inp" action="submit" onSubmit={handleSave}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          placeholder="password confirm"
        />
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="name"
          placeholder="username"
          />
        <button className="registering">register</button>
        {error ? <p>{error}</p> : null}
      </form>
      <div className="photo1">
          <img src={registerImg} alt="Register" width={400} />
          </div>
        </div>

  );
}
