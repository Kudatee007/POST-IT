import React from "react";
import "./Signin.css";
import "../Getstarted/Getstarted.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join2">Welcome Back</h1>

            <div className="inputInfo">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="inputInfo">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <Link to="/welcome"><button className="btnContinue2">Continue</button></Link>
            <Link to="/create" className="link1"><h6 className="alreadyStart2">
              No account? <span className="span">Sign Up</span>
            </h6></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
