import * as React from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";

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
      handleRegister(formData);
    }
  };

  React.useEffect(() => {
    setError(false);
  }, []);

  return (
    <div>
      <h1>Register</h1>
      {error ? <h2>{error}</h2> : null}
      <form action="submit" onSubmit={handleSave}>
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
        <button>register</button>
      </form>
    </div>
  );
}
