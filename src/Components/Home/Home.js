import React from "react";
import "./Home.css";
import homeImg from "../../img/homeimg.svg";
import lifestyle from "../../img/lifestyle.svg";
import nature from "../../img/nature.svg";
import tech from "../../img/technology.svg";

const Home = () => {
  return (
    <div>
      <div className="stayCurious">
        <h1>Stay Curious.</h1>
        <p>
          Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa
          velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut.{" "}
        </p>
        <button className="btnHome">Get Started</button>
      </div>
      <div className="containBox">
        <div className="gridBox">
          <div className="grid">
            <img src={lifestyle} alt="" />
            <div className="box">
              <h2>Lifestyle</h2>
              <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="grid">
            <img src={nature} alt="" />
            <div className="box">
              <h2>Nature</h2>
              <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="grid">
            <img src={tech} alt="" />
            <div className="box">
              <h2>Lifestyle</h2>
              <p>The 20 Biggest Fintech Companies In Nigeria 2022</p>
            </div>
          </div>
        </div>

        <div className="tryPost">
          <h1>Try Postit.</h1>
          <p>Do you want to write or discover stories from writers on any topic?</p>
          <div className="post">
            <input type="text" placeholder="Enter Email address"/>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
