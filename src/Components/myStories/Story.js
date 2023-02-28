import React, { useEffect, useState } from "react";
import "./Story.css";
import Navbar2 from "../Navbar2/Navbar2";
import { Link, useNavigate } from "react-router-dom";

const Story = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:9000/api/v1/post";

  const fetchPost = async () => {
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
    setIsLoading(false);
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const redirect = useNavigate();

  const handleDelete = (id) => {
    const url = `http://localhost:9000/api/v1/post/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      redirect("/");
    });
  };
  return (
    <div className="Sto">
      <Navbar2 />
      <div className="Stories">
        <div className="myStories">
          <h1>My Stories</h1>
          <Link to="create">
            <button className="btnWrite">Write Story</button>
          </Link>
        </div>
        <div className="storyNav">
          <h2>All</h2>
          <h3>Drafts</h3>
          <h3>Published</h3>
        </div>
        <hr className="hrLine" />
        {isLoading && <div>Loading......</div>}
        {posts.map((post) => {
          const { _id, title, story } = post;
          return (
            <div className="mainStory" key={_id}>
              <div className="main">
                <h1>{title}</h1>
                <h6>{story}</h6>
                <p className="p2">Published</p>
              </div>
              <div className="storyBtn">
                <button className="storyEdit">Edit Post</button>
                <button
                  className="storyDelete"
                  onClick={() => handleDelete(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Story;
