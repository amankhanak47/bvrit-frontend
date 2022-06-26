import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./allstudent.css"

const StudentChangePassword = () => {
   const [credentials, setCredentials] = useState({
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handlesubmit =  async (e) => {
    e.preventDefault();
     const {
      password,
      cpassword
    } = credentials;
      if (password === cpassword) {
           const response = await fetch(
            `https://bvrit-backends.herokuapp.com/api/auth/student/changepassword`,
            {
              method: "PUT",
              
              headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
                
              },
              body: JSON.stringify({
                password,
              }),
            }
          );
          const json = await response.json();
        console.log(json.sucess);
        if (json.sucess) {
          alert("password sucessfully changed");
          navigate("/student")
        }
        else {
          alert("internal server error")
        }
        }
  }
   const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
      <div className='change-password'>
          
        <form className='change-password-box' onSubmit={handlesubmit}>
          <h1>Change Password</h1>
              <input  onChange={onchange} placeholder='password' minLength={4} className='change-password-input' type="password" name='password' />
              <input  onChange={onchange} placeholder='confirm password' minLength={4} type="password" className='change-password-input' name='cpassword' />
              <button type='submit'>Change password</button>
      </form>
    </div>
  )
}

export default StudentChangePassword
