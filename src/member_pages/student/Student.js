import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar';
import Studentheader from './Studentheader';
import "./allstudent.css"

const Student = () => {

  const [studentinfo,setStudentinfo]=useState([])

  useEffect(() => {
    fetchstuden();
  }, []);
  const fetchstuden = async () => {
    
    const response = await fetch(`https://bvrit-backends.herokuapp.com/api/auth/student/getinfo`, {
       method: "POST",
   
        headers: {
         "Content-Type": "application/json",
         "auth-token":localStorage.getItem('token'),
       },
       
     });
      setStudentinfo(await response.json())
     console.log(studentinfo)
  }

  return (
    <>
      <Navbar/>
    <div className='student'>
        {/* <img src={studentinfo.student_img} alt="" /> */}
        {/* <Studentheader/> */}
        <Studentheader student_name={studentinfo.name}/>
      {/* <h1>{studentinfo.name}</h1>
      <h1>{studentinfo.roll_no}</h1>
      <h1>{studentinfo.college_email}</h1>
      <h1>{studentinfo.personal_email}</h1>
        <h1>{studentinfo.section}</h1>
        <h1>{ studentinfo.mobile_no}</h1> */}
      
      </div>
      </>
  )
}

export default Student
