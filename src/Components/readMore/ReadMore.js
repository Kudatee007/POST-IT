import React, { useState, useEffect } from "react";
import Navbar2 from "../Navbar2/Navbar2";
import { useParams, Link } from "react-router-dom";
import "./ReadMore.css";
import back from "../../img/🦆 icon _chevron right arrow_.svg"

const ReadMore = () => {
  const [posts, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();


  const token = JSON.parse(localStorage.getItem("token"));

//   const url = "http://localhost:9000/api/v1/post";
  const url = `http://localhost:9000/api/v1/post/one/${userId}`

  const fetchPosts = async () => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setPost(data.post);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar2 />
      <div key={posts._id} className="postContainer">
        <Link to="/stories"><img src={back} alt="" className="back"/></Link>
        <h3 className="pTags">{posts.tags}</h3>
        <h1 className="pTitle">{posts.title}</h1>
        <h2 className="pCreated">By: <span className="crea">{posts.createdAt}</span></h2>
        <hr className="line1"/>
        <img src={posts.image} alt="" className="pImage"/>
        <p className="pStory">{posts.story}</p>
      </div>
    </div>
  );
};

export default ReadMore;
