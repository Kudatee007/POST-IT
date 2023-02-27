import React from "react";
import "./Allstory.css";
import scrabble from "../../img/srabblepics.svg";
import rectangle from "../../img/Rectangle 42.svg";
import kudat from "../../img/kudat.svg";

const Allstory = () => {
  return (
    <div>
      <hr className="line12" />
      <div className="WelcomeStory">
        <div className="welcomeStory1">
          <h1>
            You’ve got a story, Post<span className="span">it</span>.
          </h1>
          <p>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
        </div>
        <div>
          <img src={scrabble} alt="" className="scrabbleStory" />
        </div>
      </div>

      <div className="rectangle">
        <div className="imgTag">
          <img src={rectangle} alt="" className="tags" />
          <h2 className="tag_s">Technology</h2>
        </div>
        <h1 className="biggest">The 20 Biggest Fintech Companies In Nigeria 2022</h1>
        <div className="kudaT">
          <img src={kudat} alt="" />
          <h4>By <span className="kudaspan">KudaT</span> - May 21, 2022</h4>
        </div>
        <p className="storyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          asperiores velit architecto id commodi repellat, porro cum cumque
          sequi nam, quibusdam odio, quod soluta totam! Enim deleniti laboriosam
          dignissimos dolore.
        </p>

        <h6>Read More...</h6>
      </div>
    </div>
  );
};

export default Allstory;
