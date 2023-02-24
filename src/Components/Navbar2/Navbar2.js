import React, { useState } from 'react';
import logo from "../../img/Postit 1.svg"
import cancel from "../../img/cancel.svg"
import hamburger from "../../img/hamburger.svg"
import profilePics from "../../img/profilepics.svg"
import "../Navbar/Navbar.css"
import{ Link } from "react-router-dom"

const Navbar2 = () => {
    const [expand, setExpand] = useState(true)

    const navHandler = () => {
      setExpand(!expand)
    }

  return (
    <div className='navBar'>
        <Link to="/"><img src={logo} alt="" /></Link>
        <div className={expand ? 'nav-bar' : 'nav-bar nav-bar-NX'}>
            <h3 onClick={navHandler}>Stories</h3>
            <h3 onClick={navHandler}>Contact</h3>
            <img src={profilePics} alt="" />
            <img src={cancel} alt="" className='cancel' onClick={navHandler}/>
        </div>
        <img src={hamburger} alt="" className='hamburger' onClick={navHandler}/>
    </div>
  )
}

export default Navbar2