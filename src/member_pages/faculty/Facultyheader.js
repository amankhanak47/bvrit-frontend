import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./allfaculty.css"

const Facultyheader = ({faculty_name}) => {
   let navigate = useNavigate();
return (
<div className='faculty-header'>
  <p>{faculty_name}</p>
    <button onClick={() => {
      navigate("/faculty-change-password")
  }}>Change password</button>
</div>
)
}

export default Facultyheader
