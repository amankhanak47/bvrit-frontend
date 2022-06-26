import React from 'react'
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handle_logout = () => {
    localStorage.setItem('token', "empty")
    navigate('/')
  }
  return (
    <div className='navbar'>
      <Link to={"/"}>Home</Link>
      {localStorage.getItem('token')!='empty'&& <button onClick={handle_logout}>Logout</button>}
     
    </div>
  )
}

export default Navbar
