import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
     
       <img className="head-img" src="https://bvrit.edu.in/CollegeImages/title_head.jpg" alt="" />
      <div className="all-components">

        <div className='home-component'>
          <Link to={"/student-login"}>Student login</Link>
        </div>
        {/* <h1>
          <Link to={"/faculty-signup"}>faculty signup</Link>
        </h1> */}
        <div className='home-component'>
          <Link to={"/faculty-login"}>Faculty login</Link>
        </div>
        {/* <h1>
          <Link to={"/hod-signup"}>hod signup</Link>
        </h1> */}
        <div className='home-component'>
          <Link to={"/hod-login"}>Hod login</Link>
              </div>
      </div>
      
    </div>
  )
}

export default Home
