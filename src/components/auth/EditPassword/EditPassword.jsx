import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";

const EditPassword = () => {
  const { sendCodeToEmail, saveNewPassword } = useAuth();
  const [email, setEmail] = useState(null);
  const [code, setCode] = useState(null);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  //   function sendMessage() {
  //     let formData = new FormData();
  //     formData.append("email", email);
  //     sendCodeToEmail(formData);
  //   }
  function savePassword() {
    let formData = new FormData();
    formData.append("forgot_password_reset", code);
    formData.append("password", password);
    formData.append("password2", password2);
    saveNewPassword(formData);
  }

  return (
    <div>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <button onClick={() => sendCodeToEmail(email)}>send code</button>
      </div>
      <div>
        <input
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="code from email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="new password"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="text"
          placeholder="password confirm"
        />
        <button onClick={savePassword}>create New Password</button>
      </div>
    </div>
  );
};

export default EditPassword;
