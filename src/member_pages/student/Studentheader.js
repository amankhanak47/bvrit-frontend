import React from 'react'
import "./allstudent.css"
import { Link, useNavigate } from "react-router-dom";

const Studentheader = ({ student_name }) => {
    let navigate = useNavigate();
return (
<div className='student-header'>
  <p>{student_name}</p>
    <button onClick={() => {
      navigate("/student-change-password")
  }}>Change password</button>
</div>
)
}

export default Studentheader
