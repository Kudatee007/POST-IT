import React, { useEffect, useState } from "react";
import "./Welcome.css";
import scrabble from "../../img/srabblepics.svg";
import Navbar from "../Navbar2/Navbar2";
import { Link } from "react-router-dom";

const Welcome = () => {
 

  return (
    <div>
      <Navbar />
      <hr className="line" />
      <div className="Welcome">
        <div className="welcome1">
          <h1>Welcome ,</h1>
          <p>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <div className="btn_S">
            <Link to="/mystories">
              <button className="btnStory">My Stories</button>
            </Link>
            <button className="btnFeed">Go to Feed</button>
          </div>
        </div>
        <div>
          <img src={scrabble} alt="" className="scrabble" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
