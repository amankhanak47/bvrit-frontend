import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "./login.css";

const StudentSignup = () => {
  let college_email = localStorage.getItem("student-email");
  const [credentials, setCredentials] = useState({
    name: "",
    // college_email: "",
    personal_email: "",
    roll_no: "",
    mobile_no: "",
    section:"",
    year: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("student-verified") ===true) {
      console.log(localStorage.getItem("student-verified"));
      navigate("/");
    }
    else {
      // alert("enter credentials to create account")
    }
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      personal_email,
      year,
      roll_no,
      mobile_no,
      section,
      password,
      cpassword,
    } = credentials;
    console.log(credentials);
    if (password === cpassword) {
      if (
        college_email.split("@")[1] === "bvrit.ac.in" &&
        college_email.length === 22
      ) {
        if (college_email[0] === "1" || college_email[0] === "2") {
          if (college_email.split("@")[0] === roll_no) {
            const response = await fetch(
              `https://bvrit-backends.herokuapp.com/api/auth/student/signup`,
              {
                method: "POST",

                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  college_email,
                  personal_email,
                  roll_no,
                  year,
                  mobile_no,
                  section,
                  password,
                }),
              }
            );
            const json = await response.json();
            console.log(json);

            if (json.sucess) {
              localStorage.setItem("token", json.authtoken);
              alert("sucessfully signup");
              localStorage.setItem("student-verified", false);
              localStorage.setItem("student-email", "");
              navigate("/");
            } else {
              alert("college email id already registered");
            }
          } else {
            alert("enter correct details");
          }
        } else {
          alert("college email id does'nt exist");
        }
      } else {
        alert("college email does'nt exist");
      }
    } else {
      alert("password desn't matched");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // const onchange_img = (e) => {
  //   setStudent_img(e)
  //   console.log(e)
  // }

  return (
    <>
      <Navbar />

      <div className="signup">
        <form className="signupbox" onSubmit={handlesubmit}>
          <h1 className="signup-title">Student Signup</h1>
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
              <label htmlFor="roll_no" className="inp-component">
                <input
                  placeholder="roll-no"
                  className="signup-input"
                  name="roll_no"
                  onChange={onchange}
                  type="text"
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="college_email" className="inp-component">
                <input
                  placeholder="college Email"
                  value={college_email}
                  className="signup-input"
                  name="college_email"
                  onChange={onchange}
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
              <label htmlFor="year" className="inp-component">
                Year:
                <select
                  name="year"
                  // value="none"
                  onChange={onchange}
                  className="inp-conponent-co-po-select"
                >
                  <option value="none">none</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="section" className="inp-component">
                Section::
                <select
                  name="section"
                  // value="none"
                  onChange={onchange}
                  className="inp-conponent-co-po-select"
                >
                   <option value="none">none</option>
            <option value="cse-a">Cse-A</option>
            <option value="cse-b">Cse-B</option>
            <option value="cse-c">Cse-C</option>
            <option value="cse-d">Cse-D</option>
            <option value="cse-e">Cse-E</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="password" className="inp-component">
                <input
                  placeholder="Password"
                  className="signup-input"
                  name="password"
                  minLength={4}
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
        multiple={ true }
        onDone={onchange_img} />
              </label>
                
          </div> */}
          </div>
          <p className="signup-desc">
            Already have an account <Link to="/student-login">Login</Link>{" "}
          </p>
          <button className="signup-btn" type="submit">
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentSignup;
