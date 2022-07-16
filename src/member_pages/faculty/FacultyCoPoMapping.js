import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Co_po_marks_form from "../../Component/Co_po_marks_form";
import Facultycopotable from "./Facultycopotable";
let marksarray ;

const FacultyCoPoMapping = () => {
  // const [copos, setCopos] = useState({
  //   co1: false,
  //   co2: false,
  //   co3: false,
  //   co4: false,
  //   co5: false,
  //   co6: false,
  //   co7: false
  //   co8
  // });
    let navigate = useNavigate();
  const [codata, setCodata] = useState([])
  const [marksdata, setMarksdata] = useState([])
  // let k=1
  // console.log(codata.question1.marks1)
  const newarray=[]
  const cos = ["co1", "co2", "co3", "co4", "co5", "co6", "co7", "co8"]
  const question=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
  var no_of_question
  const [section, setSection] = useState("none");
  const [year, setYear] = useState("none");
  const [subject, setSubject] = useState("none");
  const [exam, setExam] = useState("none");
  // const [cos,setCos]=useState('none')
  const [noofquestion, setNoofquestion] = useState();
  const [maxmarks, setMaxmarks] = useState();
// console.log(newarray)
const cosarray=Object.values(codata)

  const handlesubmit = (e) => {
   setCodata([ ...codata,{[e.target.name]:e.target.value}])
  marksarray = {section: section, year:year, subject:subject, exam:exam,noofquestion:noofquestion, maxmarks:maxmarks };
  navigate("/faculty-co-po-table")
  console.log(codata)
  e.preventDefault();

    
   
  };

  const changemarks = (e) => {
    setNoofquestion(0);
    setNoofquestion(e.target.value);
    no_of_question=parseInt(noofquestion)
  };
  
  const changecoslist = (e) => {
    if (e.target.checked) {
      
      console.log(e.target.name)
      newarray.push(e.target.name)
    }
    // if (e.target.checked === true) {  
    //   newarray.push(e.target.value)
    // }
    // else {
    //   //  newarray.splice(e.targget)
    // }
  }
  // const copo_marks = (e) => {
  //   setcodata({ ...codata, [e.target.name]: e.target.value });
  //   // console.log(codata)
  // }
  const arrange_marks = (e) => {
    setMarksdata({ ...marksdata,[e.target.name]:e.target.value})
  }
  const arrange_co = (e) => {
     setCodata([ ...codata,{[e.target.name]:e.target.value}])
  }

  return (
    <div>
      <h1>Co Po Mapping</h1>
      <form onSubmit={handlesubmit} className="co-po-form">
        <label htmlFor="year" className="inp-component-co-po">
          <p>year</p>

          <select
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="inp-conponent-co-po-select"
          >
            <option value="none">none</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        
          </select>
        </label>
        <label htmlFor="section" className="inp-component-co-po">
          <p>Class</p>

          <select
            name="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
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
        <label htmlFor="subject" className="inp-component-co-po">
          <p>Subject</p>

          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="inp-conponent-co-po-select"
          >
            <option value="none">none</option>
            <option value="nmlt">NMLT</option>
            <option value="ps">PS</option>
            <option value="bi">BI</option>
            <option value="dbms">DBMS</option>
            <option value="java">JAVA</option>
          </select>
        </label>
        <label htmlFor="co's" className="inp-component-co-po">
          <p>Co's</p>

          <div className="inputs-checkbox">
            {cos.map(e => <>
              
            <div>
                <input type="checkbox" onChange={changecoslist} name={e} value={e} />
                <label for={e}> {e}</label>
            </div>
            {/* <div>
              <input type="checkbox" name="co2" value="co2" />
              <label for="co2"> Co 2</label>
            </div>
            <div>
              <input type="checkbox" name="co3" value="co3" />
              <label for="co3"> Co 3</label>
            </div> */}
            </>)}
          </div>
        </label>

        <label htmlFor="exam" className="inp-component-co-po">
          <p>Exam</p>

          <select
            name="exam"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="inp-conponent-co-po-select"
          >
            <option value="none">none</option>
            <option value="mid1">Mid 1</option>
            <option value="mid2">Mid 2</option>
            <option value="mid3">Mid 3</option>
            <option value="mid4">Mid 4</option>
          </select>
        </label>
        <label htmlFor="marks" className="inp-component-co-po">
          <p>Max-Marks</p>
          <input
            type="number"
            value={maxmarks}
            onChange={(e) => setMaxmarks(e.target.value)}
            name="marks"
          />
        </label>
        <label htmlFor="no-of-question" className="inp-component-co-po">
          <p>No Of Questions</p>
          <input
            value={noofquestion}
            onChange={changemarks}
            name="no_of_question"
            type="number"
          />
        </label>

        <div>{/* {noofquestion*<>amam</>} */}</div>
        <label htmlFor="no-question-in-order" className="no-question-in-order">
          {question.filter((item, index) => index < noofquestion).map(e => <>
            
          <div className="marks-co-po">
              <p>Question {e}</p>
            <label htmlFor="marks">
              Marks
                <input  name={`question${e}marks${e}`} onChange={arrange_marks} type="number" />
            </label>
            <label htmlFor="co">
                Co's
               <input  name={`question${e}cos${e}`} onInputCapture={arrange_co} type="text" />
              {/* <select name={`question${e}.copo${e}`} className="inp-conponent-co-po-select">
                  <option value="none">none</option>
                  {newarray.map(e => <>
                    <option value={`${e}`}>{e}</option>
                  </>)}   */}
                
                {/* <option value="co2">Co 2</option>
                <option value="co3">Co 3</option>
                <option value="co4">Co 4</option>  */}
              {/* </select> */}
            </label>
          </div>
          </>)}
       
        </label>
        <div className="btn-end-co-po">
          <button className="submit-co-po-form" type="submit">
            Submit
          </button>
        </div>
      </form>
{/* <Facultycopotable/> */}
    </div>
  );
};

export default FacultyCoPoMapping;
export { marksarray };
