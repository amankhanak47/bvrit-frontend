import React, { useEffect, useState } from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { useNavigate } from 'react-router-dom';

const StudentForgotPassword = () => {
     let navigate = useNavigate();
    const [payload, setPayload] = useState(null)
    useEffect(() => {
  const mojoauth = new MojoAuth("test-e1bccc17-bb44-4d67-a0ee-51177915884a", {
})
  mojoauth.signInWithMagicLink().then(payload => {
      setPayload(payload)
      console.log(payload)
      if (payload.authenticated === true && payload.user.email.split("@")[1] === "bvrit.ac.in") {
          if (payload.user.email[0] === "1" || payload.user.email[0] === "2") {
              localStorage.setItem("student-forgot-email-verified", true)
              localStorage.setItem("student-forgot-email", payload.user.email)
              navigate('/student-forgot-change-password')
          }
         
      }
      else {
          alert("enter student college email")
          navigate('/student-login')
      }
    }, [])
})
  return (
    <div>
      <>
        <div className="verified">
            <div id="mojoauth-passwordless-form">
                <h1>please enter college_email</h1>
                </div>
                </div>
            </>
    </div>
  )
}

export default StudentForgotPassword
