import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const { handleLogin, error, setError, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function handleSave() {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", userName);
    formData.append("password", password);
    handleLogin(formData, email);
  }
  if (loading) return <Loading />;
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
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
          <h1>Login</h1>
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

        <center>
          {error ? (
            <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
          ) : null}
          <p
            className="forgot-password"
            onClick={() => navigate("/edit-password")}
          >
            forgot password?
          </p>
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
            login
          </Button>
        </center>
      </div>
    </div>
  );
};

export default Login;
