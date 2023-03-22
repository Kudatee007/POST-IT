import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import edit from "../../img/edit.svg";
import Navbar2 from "../Navbar2/Navbar2";

const Create = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);

  const url = "http://localhost:9000/api/v1/post";
  const token = JSON.parse(localStorage.getItem("token"));

  const redirect = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("story", story);
    formData.append("tags", tags);
    formData.append("image", image);

    try {
      console.log("in the function");
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();

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
              accept="image/*"
              type="file"
              name="image"
              id="taskTitle"
              placeholder="select image"
              onChange={(e) => setImage(e.target.files[0])}
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
            <textarea
              name=""
              id="describe"
              cols="30"
              rows="10"
              value={story}
              onChange={(e) => setStory(e.target.value)}
            ></textarea>
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
