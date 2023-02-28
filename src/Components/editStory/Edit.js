import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "../Navbar2/Navbar2";
import "./Edit.css";

const Edit = () => {
  const [title, setTitle] = useState();
  const [tags, setTags] = useState();
  const [story, setStory] = useState();
  const { userId } = useParams();

  const url = `http://localhost:9000/api/v1/post/${userId}`;
  const token = JSON.parse(localStorage.getItem("token"));

  const redirect = useNavigate();

  const editPost = async () => {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const {data: {title, tags, story} }= await res.json();
  
    setTitle(title)
    setTags(tags)
    setStory(story)
  };

  useEffect(() => {
    console.log('in the useeffcet');
    editPost();
  });

  const handleUpdate = async (id) => {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, tags, story }),
    });

    const data = await res.json();
    console.log(data);

    redirect("/mystories");
  };
  return (
    <div>
      <Navbar2 />
      <div className="task3">
        <div className="newTask">
          <h1>Update Story</h1>
        </div>
        <form>
          <div className="titleTask">
            <label htmlFor="taskTitle">Title</label>
            <input
              type="text"
              id="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="tagS">
            <label htmlFor="tags">Tags</label>
            <select
              name=""
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            >
              <option value="">Tags</option>
              <option value="Technology">Technology</option>
              <option value="Nature">Nature</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div className="descripTion">
            <label htmlFor="describe">Update your story.......</label>
            <input
              type="text"
              id="describe"
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
          </div>
          <div className="Btndone">
            <button type="submit" className="btnDone" onClick={handleUpdate}>
              Update Story
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

export default Edit;
