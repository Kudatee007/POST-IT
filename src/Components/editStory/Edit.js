import React from 'react'
import "./Edit.css"

const Edit = () => {
  return (
    <div>
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
            //   value={title}
            //   onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="tagS">
          <label htmlFor="tags">Tags</label>
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
          <label htmlFor="describe">Update your story.......</label>
            <input
              type="text"
              id="describe"
            //   value={description}
            //   onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className='Btndone'>
          <button type="submit" className="btnDone">
          Update Story
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

export default Edit