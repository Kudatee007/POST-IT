import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="Stories">
      <div className="myStories">
        <h1>My Stories</h1>
        <button>Write Story</button>
      </div>
      <div className="storyNav">
        <h2>All</h2>
        <h3>Drafts</h3>
        <h3>Published</h3>
      </div>
      <hr className="hrLine"/>
      <div className="mainStory">
        <div className="main">
          <h1>The 20 Biggest Fintech Companies In Nigeria 2022</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            beatae vitae cumque quidem, nemo mollitia pariatur eligendi non
            reiciendis repellendus consequatur reprehenderit dolorum, nihil
            accusamus temporibus omnis quae, officiis tempore.
          </h6>
          <p className="p2">Published</p>
        </div>
        <div className="storyBtn">
            <button className="storyEdit">Edit Post</button>
            <button className="storyDelete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Story;
