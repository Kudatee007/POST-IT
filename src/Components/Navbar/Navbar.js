import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../img/Postit 1.svg"
import cancel from "../../img/cancel.svg"
import hamburger from "../../img/hamburger.svg"

const Navbar = () => {
    const [expand, setExpand] = useState(true)

    const navHandler = () => {
      setExpand(!expand)
    }

  return (
    <div className='navBar'>
        <img src={logo} alt="" />
        <div className={expand ? 'nav-bar' : 'nav-bar nav-bar-NX'}>
            <h3 onClick={navHandler}>Stories</h3>
            <h3 onClick={navHandler}>Contact</h3>
            <h3 onClick={navHandler}>Sign In</h3>
            <button className='navBtn' onClick={navHandler}>Get Started</button>
            <img src={cancel} alt="" className='cancel' onClick={navHandler}/>
        </div>
        <img src={hamburger} alt="" className='hamburger' onClick={navHandler}/>
    </div>
  )
}

export default Navbar