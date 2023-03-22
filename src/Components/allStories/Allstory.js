import React, { useState, useEffect } from "react";
import "./Allstory.css";
import scrabble from "../../img/srabblepics.svg";
import rectangle from "../../img/Rectangle 42.svg";
import kudat from "../../img/kudat.svg";
import Navbar2 from "../Navbar2/Navbar2";
import { Link } from "react-router-dom";

const Allstory = () => {
  const url = "http://localhost:9000/api/v1/post";
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const token = JSON.parse(localStorage.getItem("token"));

  const fetchPost = async () => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setLoading(false);
    setPosts(data.post);
    console.log(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <Navbar2 />
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
      {isLoading && <div>Loading......</div>}
      <div className="rectangle">
        {posts.map((post) => {
          const { _id, title, story, image, createdAt, createdBy } = post;
          // let maxLength = 150;
          // const shortText = story.length > maxLength ? story.substring(0, maxLength) + "..." : story;
          const username = createdBy && createdBy.username;
          const shortText = story.substring(0, 170);

          return (
            <div key={_id} className="tangle">
              <div className="imgTag">
                <h2 className="tag_s">Technology</h2>
                <img src={image} alt="" />
              </div>
              <h1 className="biggest">{title}</h1>
              <div className="kudaT">
                <h4>
                  By <span className="kudaspan">{username}</span> - {createdAt}
                </h4>
              </div>
              <p className="storyPara">{shortText}</p>

              <Link to={`/read/${_id}`}>
                {" "}
                <h6 className="readMore">Read More...</h6>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allstory;
