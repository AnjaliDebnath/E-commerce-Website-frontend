import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LINK= "http://localhost:3997";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const BACKEND_URL =  "http://localhost:3997/register"; // Define your backend URL

  function handleRegister(e) {
    e.preventDefault();
    axios.post(`${LINK}/auth/register`, {username,email,password}).then((res)=>{
        console.log("Registered successful", res.data);
        navigate('/login');
    }).catch((err)=>{
        console.error("Error: ", err.response?.status, err.response?.data || err.message)
    })
}

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

  const errorStyle = {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
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
        <h1 style={{ fontSize: "24px", color: "#232f3e" }}>Register</h1>
        {error && <div style={errorStyle}>{error}</div>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email or mobile phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        <div style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
          <a href="/terms" style={{ color: "#0066c0", textDecoration: "none" }}>
            Conditions of Use
          </a>{" "}
          |{" "}
          <a href="/privacy" style={{ color: "#0066c0", textDecoration: "none" }}>
            Privacy Notice
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
