import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import Loading from "../Loading";
import { Button, TextField } from "@mui/material";
import "./styles.css";
const EditPassword = () => {
  const { sendCodeToEmail, loading } = useAuth();

  const [email, setEmail] = useState(null);
  if (loading) return <Loading />;

  return (
    <div
      className="register"
      style={{
        height: "1000px",
        backgroundColor: "transparent",
        padding: "50px 0",
      }}
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
          <h1>Отправить код в почту</h1>
        </center>

        <input
          className="register_inp"
          sx={{ margin: "30px 10px 20px" }}
          id="outlined-basic"
          placeholder="Email"
          variant="outlined"
          color="grey"
          name="title"
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <center>
          <Button
            onClick={() => sendCodeToEmail(email)}
            variant="contained"
            size="large"
            color="success"
            sx={{
              border: "1px solid black",
              color: "white",
              backgroundColor: "black",
              width: "80%",
              margin: "20px 0 30px 0",
            }}
          >
            Отправить
          </Button>
        </center>
      </div>
    </div>
  );
};

export default EditPassword;
