import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, } from "react-router-dom";
import StudentSignup from "./login,signup/StudentSignup";
import StudentLogin from "./login,signup/StudentLogin";
import Student from "./member_pages/student/Student";
import Faculty from "./member_pages/faculty/Faculty";
import Hod from "./member_pages/Hod";
import Facultylogin from "./login,signup/Facultylogin";
import Facultysignup from "./login,signup/Facultysignup";
import Hodlogin from "./login,signup/Hodlogin";
import Hodsignup from "./login,signup/Hodsignup";
import Home from "./Home";
import Navbar from "./Component/Navbar";
import { useEffect } from "react";
import StudentVerify from "./login,signup/StudentVerify";
import FacultyVerified from "./login,signup/FacultyVerified"
import HodVerify from "./login,signup/HodVerified";
import StudentChangePassword from "./member_pages/student/StudentChangePassword";
import StudentForgotPassword from "./member_pages/student/StudentForgotPassword";
import StudentForgotChangePassword from "./member_pages/student/StudentForgotChangePassword";
import FacultyChangePassword from "./member_pages/faculty/FacultyChangePassword";
import FacultyCoPoMapping from "./member_pages/faculty/FacultyCoPoMapping";
import Facultycopotable from "./member_pages/faculty/Facultycopotable";

function App() {
    // let location = useLocation();
  // useEffect(() => {
    // console.log(location.pathname)
  // }, [location]);
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route exact path="/" element={<Home/>} />       
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/student-signup" element={<StudentSignup />} />
          <Route exact path="/student-login" element={<StudentLogin />} />
          <Route exact path="/student-verify" element={<StudentVerify />} />
          <Route exact path="/student-change-password" element={<StudentChangePassword />} />
          <Route exact path="/student-forgot-password" element={<StudentForgotPassword />} />
           <Route exact path="/student-forgot-change-password" element={<StudentForgotChangePassword/>} />
          <Route exact path="/faculty" element={<Faculty />} />
          <Route exact path="/faculty-login" element={<Facultylogin />} />
          <Route exact path="/faculty-signup" element={<Facultysignup />} />
          <Route exact path="/faculty-verify" element={<FacultyVerified />} />
          <Route exact path="/faculty-change-password" element={<FacultyChangePassword />} />
          <Route path="/faculty-co-po-mapping" element={<FacultyCoPoMapping />} />  
            <Route path="/faculty-co-po-table" element={<Facultycopotable/>} />  
          <Route exact path="/hod-login" element={<Hodlogin />} />
          <Route exact path="/hod-signup" element={<Hodsignup />} />
          <Route exact path="/hod-verify" element={<HodVerify />} />
          <Route exact path="/hod" element={<Hod />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
