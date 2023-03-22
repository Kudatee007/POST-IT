import React, { useState } from "react";
import "./Getstarted.css";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Getstarted = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:9000/api/v1/register";

  const redirect = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (data.token) {
        redirect("/login");
      }
      if (data.errors) {
        console.log(data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join">
              Join Post<span className="span">it</span>.
            </h1>
            <p className="enter">
              Enter your email address to create an account on Postit.
            </p>
            <form onSubmit={createUser}>
              <div className="inputInfo">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="inputInfo">
                <label htmlFor="email">Your Email Address</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputInfo">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btnContinue" type="submit">
                Continue
              </button>
            </form>
            <Link to="/login" className="link1">
              <h6 className="alreadyStart">
                Already have an account? <span className="span">Sign In</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
