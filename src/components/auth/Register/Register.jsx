import * as React from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./Register.css";
export default function RegisterList() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const { handleRegister, loading, error, setError } = useAuth();

  const handleSave = () => {
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
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);
  const handleMouseDownPasswordConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);

  return (
    <div
      className="register"
      style={{ height: "1000px", backgroundColor: "gray", padding: "50px 0" }}
    >
      <div
        className="register-places"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: " 50px auto",
          backgroundColor: "white",
          width: "35%",
          padding: "30px 20px",
          borderRadius: "30px",
        }}
      >
        <center>
          <h1>Register</h1>
        </center>

        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="email"
          variant="outlined"
          color="grey"
          name="title"
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          sx={{ margin: "15px" }}
          id="outlined-basic"
          label="password"
          variant="outlined"
          color="grey"
          name="title"
          size="small"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          sx={{ margin: "15px" }}
          id="outlined-basic"
          label="password confirm"
          variant="outlined"
          color="grey"
          name="title"
          size="small"
          type={showPasswordConfirm ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordConfirm}
                  onMouseDown={handleMouseDownPasswordConfirm}
                >
                  {showPasswordConfirm ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <center>
          {error ? <p style={{ color: "red" }}>{error}</p> : null}
          <Button
            onClick={handleSave}
            variant="contained"
            size="large"
            sx={{
              border: "1px solid black",
              color: "white",
              backgroundColor: "black",
              width: "80%",
              margin: "20px 0 30px 0",
            }}
          >
            register
          </Button>
        </center>
      </div>
    </div>
  );
}
