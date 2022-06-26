import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar';
import Facultyheader from './Facultyheader';
import "./allfaculty.css"
import { BrowserRouter as Router, Routes, Route, Link, useLocation, } from "react-router-dom";
// import FacultyCoPoMapping from './FacultyCoPoMapping';
import FacultyAllOptions from './FacultyAllOptions';

const Faculty = () => {
    const [facultyinfo,setFacultyinfo]=useState([])

  useEffect(() => {
    fetchfaculty();
  }, []);
  const fetchfaculty = async () => {
    
    const response = await fetch(`https://bvrit-backends.herokuapp.com/api/auth/faculty/getinfo`, {
       method: "POST",
   
        headers: {
         "Content-Type": "application/json",
         "auth-token":localStorage.getItem('faculty-token'),
       },
       
     });
      setFacultyinfo(await response.json())
     console.log(facultyinfo)
  }
  return (
    <>
    <div className='faculty'>
      
       
     <Navbar/>
        <Facultyheader faculty_name={facultyinfo.name}/>
      <FacultyAllOptions/>
       
        <Routes>
         
       
           
          </Routes>
      
    
      </div>
      </>
  )
}

export default Faculty
