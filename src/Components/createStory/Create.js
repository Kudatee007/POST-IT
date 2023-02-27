import React from 'react'
import "./Create.css"
import edit from "../../img/edit.svg"

const Create = () => {
  return (
    <div>
          <div className="task3">
        <div className="newTask">
          <h1>Create Story</h1>
        </div>
        <form>
          <div className="titleTask">
            <img src={edit} alt="" />
            <input
              type="text"
              id="taskTitle"
              placeholder='Title'
            //   value={title}
            //   onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="tagS">
          <img src={edit} alt="" />
            <select
              name=""
              id="tags"
            //   value={tags}
            //   onChange={(e) => setTags(e.target.value)}
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
              placeholder='Write your story.......'
            //   value={description}
            //   onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className='Btndone'>
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
  )
}

export default Create