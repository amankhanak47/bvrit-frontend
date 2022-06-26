import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Facultylogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://bvrit-backends.herokuapp.com/api/auth/faculty/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          college_email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();

    if (json.sucess) {
      localStorage.setItem("faculty-token", json.authtoken);
    //   navigate("/");
    navigate('/faculty')
    // alert("sucessfull logged in")
      
    } else {
      alert("not logged in")
    }
  };
  return (
    <>
    <Navbar/>
   <div className="signup">
     

          <form className="signupbox" onSubmit={handlesubmit}>
      <h1 className="signup-title">Faculty Login</h1>
      <div className="signup-inputcontainer">
        <div>

        <label htmlFor="email" className="inp-component">
          <input
            placeholder="Email"
            name="email"
            onChange={onchange}
            value={credentials.email}
                type="Email"
                className="signup-input"
          />
        </label>
        </div>
        <div>
        <label htmlFor="password" className="inp-component">
          <input
            placeholder="Password"
            name="password"
            onChange={onchange}
            value={credentials.password}
                type="password"
                className="signup-input"
          />
        </label>

        </div>
      </div>
      <p className="signup-desc">
        Doesn't have an account <Link to="/faculty-verify">Sign up</Link>{" "}
      </p>
      <button className="signup-btn" type='submit' >Login</button>
    </form>
      </div>
      </>
  )
}

export default Facultylogin
