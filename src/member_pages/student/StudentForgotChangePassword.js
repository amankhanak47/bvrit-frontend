import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForgotChangePassword = () => {
  let college_email = localStorage.getItem("student-forgot-email");
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
      const { password, cpassword } = credentials;
       const response = await fetch(
            `https://bvrit-backends.herokuapp.com/api/auth/student/forgotpassword/`,
            {
              method: "PUT",

              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                college_email,
                password
              }),
            }
          );
          const json = await response.json();
      console.log(json);
      if (json.sucess) {
          alert("password sucessfully changed")
          navigate("/student-login")
      }
      else {
          alert("password doesnt matched")
      }
  };

  return (
    <div className="change-forgot-change-password">
      <form className="change-password-box" onSubmit={handlesubmit}>
        <h1>Change Password</h1>
        <input
          type="text"
          className="change-password-input"
          value={college_email}
          disabled
        />
        <input
          onChange={onchange}
          placeholder="password"
          minLength={4}
          className="change-password-input"
          type="password"
          name="password"
        />
        <input
          onChange={onchange}
          placeholder="confirm password"
          minLength={4}
          type="password"
          className="change-password-input"
          name="cpassword"
        />
        <button type="submit">Change password</button>
      </form>
    </div>
  );
};

export default StudentForgotChangePassword;
