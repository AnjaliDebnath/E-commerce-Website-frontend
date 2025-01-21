import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {useDispatch} from "@reduxjs/toolkit";

import axios from "axios";

const LINK = "http://localhost:3997"; 

const LoginForm = () => {
  const navigate = useNavigate(); 
  
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f6f6f6",
  };

  const formStyle = {
    width: "350px",
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#f0c14b",
    color: "#111",
    border: "1px solid #a88734",
    borderRadius: "4px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "10px 0",
  };

  const linkStyle = {
    fontSize: "14px",
    color: "#0066c0",
    textDecoration: "none",
  };

  const dividerStyle = {
    margin: "15px 0",
    fontSize: "14px",
    color: "#888",
  };

  const secondaryButtonStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #888",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#fff",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post(`${LINK}/login`, { email, password });

      // Store tokens in localStorage
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const { username } = response.data; // Ensure the backend sends it
      localStorage.setItem("username", username);

      console.log("Login successful:", response.data);
      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      console.error("Error: ", err.response?.status, err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          style={{ marginBottom: "20px" }}
          width="100"
        />
        <h1 style={{ fontSize: "24px", color: "#232f3e" }}>Log in</h1>
        {error && <div style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or mobile phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <a href="#" style={linkStyle}>
            Forgot password?
          </a>
          <button type="submit" style={buttonStyle}>
            Log in
          </button>
        </form>
        <div style={dividerStyle}>or</div>
        <button style={secondaryButtonStyle}>Get an OTP on your phone</button>
        <div style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
          <a href="#" style={linkStyle}>
            Conditions of Use
          </a>{" "}
          |{" "}
          <a href="#" style={linkStyle}>
            Privacy Notice
          </a>{" "}
          |{" "}
          <a href="#" style={linkStyle}>
            Help
          </a>
        </div>
        <div style={{ marginTop: "10px", fontSize: "12px", color: "#888" }}>
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
