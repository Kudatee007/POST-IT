import React from "react";
import "./Getstarted.css";
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"

const Getstarted = () => {
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
          <div className="inputInfo">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="inputInfo">
            <label htmlFor="email">Your Email Address</label>
            <input type="text" id="email" />
          </div>
          <div className="inputInfo">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className="btnContinue">Continue</button>
          <Link to="/login" className="link1"><h6 className="alreadyStart">Already have an account? <span className="span">Sign In</span></h6></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Getstarted;
