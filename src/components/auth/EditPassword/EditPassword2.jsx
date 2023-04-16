import React, { useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import Loading from "../Loading";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./styles.css";

const EditPassword2 = () => {
  const { saveNewPassword, loading, error } = useProducts();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const [code, setCode] = useState(null);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function savePassword() {
    let formData = new FormData();
    formData.append("forgot_password_reset", code);
    formData.append("password", password);
    formData.append("password2", password2);
    saveNewPassword(formData);
  }
  if (loading) return <Loading />;

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
          <h1>Edit Password</h1>
        </center>

        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="activate code "
          variant="outlined"
          color="grey"
          name="title"
          size="small"
          onChange={(e) => setCode(e.target.value)}
        />

        <TextField
          sx={{ margin: "15px" }}
          id="outlined-basic"
          label="new password"
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
          onChange={(e) => setPassword2(e.target.value)}
        />
        <center>
          {error ? <p style={{ color: "red" }}>{error}</p> : null}
          <Button
            onClick={savePassword}
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
            save Changes
          </Button>
        </center>
      </div>
    </div>
  );
};

export default EditPassword2;
