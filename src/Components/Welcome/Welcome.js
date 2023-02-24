import React from "react";
import "./Welcome.css"
import scrabble from "../../img/srabblepics.svg";
import Navbar from '../Navbar2/Navbar2';

const Welcome = () => {
  return (
  <div>
    <Navbar />
    <hr className="line"/>
      <div className="Welcome">
      <div className="welcome1">
        <h1>Welcome Maria,</h1>
        <p>
          Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa
          velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut.
        </p>
        <div className="btn_S">
          <button className="btnStory">My Stories</button>
          <button className="btnFeed">Go to Feed</button>
        </div>
      </div>
      <div>
        <img src={scrabble} alt="" className="scrabble"/>
      </div>
    </div>
  </div>
  );
};

export default Welcome;
