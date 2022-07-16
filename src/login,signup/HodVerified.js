import React, { useEffect, useState } from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { useNavigate } from 'react-router-dom';



const HodVerify = () => {
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
          if (payload.user.email[0] === "h"&& payload.user.email[0] === "o" ) {
              localStorage.setItem("hod-verified", true)
              localStorage.setItem("hod-email", payload.user.email)
              navigate('/hod-signup')
          }
          else {
           alert("enter hod college email")
          navigate('/hod-login')   
          }
      }
      else {
          alert("enter college email")
          navigate('/hod-login')
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

export default HodVerify
