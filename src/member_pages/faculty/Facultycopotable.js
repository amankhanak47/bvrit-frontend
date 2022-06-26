import React, { useEffect, useState } from "react";

import { marksarray } from "./FacultyCoPoMapping";
import "./allfaculty.css";
const Facultycopotable = () => {
  const [student,setStudent]=useState([])
  console.log(marksarray);
  // let students;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://bvrit-backends.herokuapp.com/api/auth/student/getallstudents`,
        {
          method: "POST",
              
          headers: {
            "Content-Type": "application/json",
                
                
          },
          body: JSON.stringify({
            section: marksarray.section,
            year: marksarray.year
          }),
        }
      );
      setStudent(await response.json());
      console.log(student[0].name);
    }
    fetchData();
  },[])
   
   
  return (
      <div className="facultycopotable">
          <div className="copotable_info">
        <p>Year: <span>{marksarray.year}</span></p>
              <p>Section: <span>{marksarray.section}</span></p>
              <p>Subject: <span>{marksarray.subject}</span></p>
            </div>
      <table border={"1"} >
        <tr className="table_header_row">
          <th className="width-less">Sno</th>
          <th>registration no</th>
          <th>Student Name</th>
          <th>
            <p>Question1</p> <p>Co2</p> <p>5 Marks</p>
          </th>
          <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
          </th>

          <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
          </th>

          <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
          </th>
          <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
          </th>
          <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
                  </th>
                  <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
                  </th>
                  <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
                  </th>
                  <th>
            <p>Question 1</p> <p>Co2</p> <p>5 Marks</p>
          </th>
              </tr>
              
        {student&&student.map((e) => (
          <>
             <tr className="table_data_row">
          <td></td>
              <td>{e.roll_no}</td>
          <td>{e.name}</td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
          <td><input type="number" className="copo_marksinput" /></td>
        </tr>
          </>
        ))
        }      
      </table>
    </div>
  );
};

export default Facultycopotable;
