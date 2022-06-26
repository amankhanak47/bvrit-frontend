import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "./login.css";

const Facultysignup = () => {
  let college_email = localStorage.getItem("faculty-email");
  const [credentials, setCredentials] = useState({
    name: "",
    personal_email: "",
    mobile_no: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

   useEffect(() => {
    if (localStorage.getItem("faculty-verified") ===true) {
      console.log(localStorage.getItem("faculty-verified"));
      navigate("/");
    }
    else {
      // alert("enter credentials to create account")
    }
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, personal_email, mobile_no, password,cpassword } = credentials;
    console.log(mobile_no.length);
    if (password === cpassword) { 
    if (
      college_email.split("@")[1] === "bvrit.ac.in" &&
      college_email[0] != "1" &&
      college_email[0] != "2"
    ) {
      if (mobile_no.length > 8) {
        const response = await fetch(
          `https://bvrit-backends.herokuapp.com/api/auth/faculty/signup`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              personal_email,
              college_email,
              mobile_no,
              password,
            }),
          }
        );
        const json = await response.json();
        console.log(json);
        if (json.sucess) {
          localStorage.setItem("token", json.authtoken);
          navigate("/");
          alert("sucessfully signup");
          localStorage.setItem("faculty-verified", false);
          localStorage.setItem("faculty-email", "")
        } else {
          alert("enter all details");
        }
      } else {
        alert("invalid mobile no");
      }
    } else {
      alert("enter correct email");
    }
  }
  else {
   alert("password desn't matched")
  }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // const onchange_img = (e) => {
  //   setFaculty_img(e)
  //   console.log(e)
  // }

  return (
    <>
      <Navbar />
      <div>
        <form className="signupbox" onSubmit={handlesubmit}>
          <h1 className="signup-title">Faculty Signup</h1>
          <div className="signup-inputcontainer">
            <div>
              <label htmlFor="name" className="inp-component">
                <input
                  placeholder="Name"
                  className="signup-input"
                  onChange={onchange}
                  name="name"
                  type="text"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="college_email" className="inp-component">
                <input
                  placeholder="college Email"
                  className="signup-input"
                  name="college_email"
                  // onChange={onchange}
                  value={college_email}
                  type="Email"
                  disabled
                />
              </label>
            </div>
            <div>
              <label htmlFor="personal_email" className="inp-component">
                <input
                  placeholder="personal Email"
                  className="signup-input"
                  name="personal_email"
                  onChange={onchange}
                  type="Email"
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="mobile_no" className="inp-component">
                <input
                  placeholder="mobile no"
                  className="signup-input"
                  name="mobile_no"
                  onChange={onchange}
                  type="number"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="password" className="inp-component">
                <input
                  placeholder="Password"
                  className="signup-input"
                  name="password"
                  minLength={3}
                  required
                  onChange={onchange}
                  type="password"
                />
              </label>
            </div>
            <div>
              <label htmlFor="cpassword" className="inp-component">
                <input
                  placeholder="Confirm Password"
                  className="signup-input"
                  name="cpassword"
                  onChange={onchange}
                  type="password"
                  required
                />
              </label>
            </div>
            {/* <div>
            <label htmlFor="image" className="inp-component">
              <FileBase64
                type="file" inputProps={{ accept: 'image/*, .ppt' }}
        multiple={ true }
        onDone={onchange_img} />
              </label>
          </div> */}
          </div>
          <p className="signup-desc">
            Already have an account <Link to="/faculty-login">Login</Link>{" "}
          </p>
          <button className="signup-btn" type="submit">
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Facultysignup;
