import React, { useState } from "react";
import "./Signin.css";
import "../Getstarted/Getstarted.css";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Signin = ({ dataName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const url = "https://post-it-blogapp.onrender.com/api/v1/login";
  const redirect = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("dataName", JSON.stringify(dataName));
      redirect("/welcome");
    }
    if (data.errors) {
      setEmailError(data.errors.email);
      setPasswordError(data.errors.password);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join2">Welcome Back</h1>

            <form>
              <div className="inputInfo">
                <label htmlFor="username">Your Email Address</label>
                <input
                  type="text"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small> {emailError} </small>
              </div>
              <div className="inputInfo">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small> {passwordError} </small>
              </div>
              <button
                className="btnContinue2"
                type="submit"
                onClick={loginUser}
              >
                Continue
              </button>
            </form>
            <Link to="/signup" className="link1">
              <h6 className="alreadyStart2">
                No account? <span className="span">Sign Up</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
