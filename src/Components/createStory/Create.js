import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import edit from "../../img/edit.svg";
import Navbar2 from "../Navbar2/Navbar2";

const Create = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const url = "http://localhost:9000/api/v1/post";
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  const redirect = useNavigate();

  const createPost = async (e) => {
    try {
      e.preventDefault();
      console.log('in the function');
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({ title, story, tags, image }),
      });
      const data = await res.json();
      console.log(data);

      redirect("/mystories");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="task3Top">
      <Navbar2 />
      <div className="task3">
        <div className="newTask">
          <h1>Create Story</h1>
        </div>
        <form encType="multipart/form-data" onSubmit={createPost}>
          <div className="titleTask">
            <img src={edit} alt="" />
            <input
              type="file"
              id="taskTitle"
              placeholder="select image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <div className="titleTask">
            <img src={edit} alt="" />
            <input
              type="text"
              id="taskTitle"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="tagS">
            <img src={edit} alt="" />
            <select
              name=""
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            >
              <option value="">Tags</option>
              <option value="Technology">Technology</option>
              <option value="Nature">Nature</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div className="descripTion">
            <img src={edit} alt="" />
            <input
              type="text"
              id="describe"
              placeholder="Write your story......."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              required
            />
          </div>

          <div className="Btndone">
            <button type="submit" className="btnDone">
              Publish Story
            </button>
          </div>
        </form>
        <a href="#task3Top">
          <h5 className="toTop">Back To Top</h5>
        </a>
      </div>
    </div>
  );
};

export default Create;
