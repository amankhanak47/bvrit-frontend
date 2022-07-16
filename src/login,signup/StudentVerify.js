import React, { useEffect, useState } from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { useNavigate } from 'react-router-dom';



const StudentVerify = () => {
    // document.getElementById("mojoauth-passwordless-email").placeholder = "hello"
    // document.getElementById("mojoauth-passwordless-email").placeholder = "Type name here..";
    // console.log(document.getElementById("mojoauth-passwordless-email"))
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
              localStorage.setItem("student-verified", true)
              localStorage.setItem("student-email", payload.user.email)
              navigate('/student-signup')
          }
         
      }
      else {
          alert("enter student college email")
          navigate('/student-login')
      }
    }, [])
})
    return (
        <>
        <div className="verified">
            <div id="mojoauth-passwordless-form">
                    <h1>please enter college_email</h1>
                     <p>after verifying email signup page will come</p>
                </div>
                </div>
            </>
  )
}

export default StudentVerify
