import React, { useState } from "react";
import logo from "../../img/Postit 1.svg";
import cancel from "../../img/cancel.svg";
import hamburger from "../../img/hamburger.svg";
import profilePics from "../../img/profilepics.svg";
import "../Navbar/Navbar.css";
import "./Navbar2.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const redirect = useNavigate();
  const [expand, setExpand] = useState(true);

  const navHandler = () => {
    setExpand(!expand);
  };

  const btnLogout = () => {
    localStorage.removeItem("token", "dataName");
    redirect("/login")
  };

  return (
    <div className="navBar">
      <Link to="/welcome">
        <img src={logo} alt="" />
      </Link>
      <div className={expand ? "nav-bar" : "nav-bar nav-bar-NX"}>
       <Link to="/stories" className="link"><h3 onClick={navHandler}>Stories</h3></Link>
        <h3 onClick={navHandler}>Contact</h3>
        <img src={profilePics} alt="" />
        <img src={cancel} alt="" className="cancel" onClick={navHandler} />
        <button onClick={btnLogout} className="logOut">
          Log-Out
        </button>
      </div>
      <img src={hamburger} alt="" className="hamburger" onClick={navHandler} />
    </div>
  );
};

export default Navbar2;
