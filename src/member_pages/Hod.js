import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';

const Hod = () => {
   const [hodinfo,setHodinfo]=useState([])

  useEffect(() => {
    fetchhod();
  }, []);
  const fetchhod = async () => {
    
    const response = await fetch(`https://bvrit-backends.herokuapp.com/api/auth/hod/getinfo`, {
       method: "POST",
   
        headers: {
         "Content-Type": "application/json",
         "auth-token":localStorage.getItem('token'),
       },
       
     });
      setHodinfo(await response.json())
     console.log(hodinfo)
  }
  return (
    <>
    <Navbar/>
     <Navbar/>
    <div className='hod'>
        {/* <img src={studentinfo.student_img} alt="" /> */}
        {/* <Studentheader/> */}
        {/* <Facultyheader hod_name={hod.name}/> */}
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

export default Hod
