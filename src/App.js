import './App.css';
import React, {useState} from "react";
import Schools from "./schools.json";
import TabHolder from './TabHolder.js';
import PrintScoresTwo from './ReturnComponents/PrintScoresTwo';

//Define Score Values
var ECScore = 0
var SummerScore = 0
var ServiceScore = 0

export default function App() {

  //Define States i.e. the values of the numbers
  const scoreDesc = ["N/A",
                      "To get in, you'll need to work on this area.",
                      "Your chances aren't great in this area, but there's always room to improve!",
                      "You might be in the conversation, but you could work to improve in this area.",
                      "This area is strong, but could be improved.",
                      "Excellent! Your chances are high in this area.",
                      ]
  const finalScore = [
    <p key="0">We calculate that you're <b>not in the conversation.</b> Sign up with AKALA today to improve your chances!</p>,
    <p key="1">We calculate that you're <b>probably not in the conversation.</b> Sign up with AKALA today to improve your chances!</p>,
    <p key="2">We calculate that you're <b>probably not in the conversation.</b> Sign up with AKALA today to improve your chances!</p>,
    <p key="3">We calculate that you <b>might be in the conversation.</b> Sign up with AKALA today to improve your chances!</p>,
    <p key="4">We calculate that you're <b>probably in the conversation.</b> Sign up with AKALA today to improve your chances!</p>,
    <p key="5">We calculate that you're <b>definitely in the conversation.</b> Sign up with AKALA today to improve your chances!</p>
  ]
  // SATmath, SATeng, ECs, SumEx, CS, GPA, Rigor
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0])
  const [ecAvg, setEcAvg] = useState("0")
  const [csAvg, setCsAvg] = useState("0")
  const [seAvg, setSeAvg] = useState("0")
  const [gpaAverage, setGpaAverage] = useState("0")
  const [schoolSelection, setSchoolSelection] = useState("Arizona State University")
  const [extraCurricular, setExtraCurricular] = useState("0")
  const [summerHours, setSummerHours] = useState("0")
  const [communityServiceHours, setCommunityServiceHours] = useState("0")
  const [satMath, setSatMath] = useState("0")
  const [satERBW, setSatERBW] = useState("0")
  const [availableAPs, setAvailableAPs] = useState("0")
  const [takenAPs, setTakenAPs] = useState("0")
  const [courseRigor, setCourseRigor] = useState("0")
  // Whether report is shown (only if school and scores are valid)
  const [isShown, setIsShown] = useState(false)

  //Score Calculating Functions

  function calculateSATMath(satM, schoolName) {
    if (satM && schoolName){
      if (satM >= schoolName.math) {
        return 5
      }
      if (satM >= schoolName.math - 20 && satM < schoolName.math) {
        return 4
      }
      if (satM >= schoolName.math - 50 && satM < schoolName.math - 20) {
        return 1
      }
    }
    return 1
  }

  function calculateSATEnglish(satE, schoolName) {
    if (satE && schoolName){
      if (satE >= schoolName.erbw) {
        return 5
      }
      if (satE >= schoolName.erbw - 20 && satE < schoolName.erbw) {
        return 4
      }
      if (satE >= schoolName.erbw - 50 && satE < schoolName.erbw - 20) {
        return 1
      }
    }
    return 1
  }

  function calculateECValue(e, schoolName) {
    const pd = parseFloat(e)
    const ecCutoffs = schoolName.ecCutoffs
    setEcAvg(schoolName.ecCutoffs[1])
    if (pd) {
      if (pd > ecCutoffs[1]) {
        return 5
      }
      if (pd <= ecCutoffs[1] && pd > ecCutoffs[0]) {
        return 4
      }
      if (pd > 0 && pd <= ecCutoffs[0]) {
        return 2
      }
    }
    return 1
  }

  function calculateSummerScore(e, schoolName) {
    const pd = parseFloat(e)
    const seCutoffs = schoolName.seCutoffs
    setSeAvg(schoolName.seCutoffs[1])
    console.log(schoolName)
    console.log(schoolName.seCutoffs[1])
    console.log(seCutoffs[1])
    if (pd) {
      if (pd > seCutoffs[1]) {
        return 5
      }
      if (pd <= seCutoffs[1] && pd > seCutoffs[0]) {
        return 4
      }
      if (pd > 0 && pd <= seCutoffs[0]) {
        return 2
      }
    }
    return 1
  }

  function calculateServiceScore(e, schoolName) {
    const pd = parseFloat(e)
    const csCutoffs = (schoolName.csCutoffs)
    setCsAvg(schoolName.csCutoffs[1])
    if (pd) {
      if (pd > csCutoffs[1]) {
        return 5
      }
      if (pd <= csCutoffs[1] && pd > csCutoffs[0]) {
        return 4
      }
      if (pd > 0 && pd <= csCutoffs[0]) {
        return 2
      }
    }
    return 1
  }

  function calculateGPAScore(gpa, schoolName){
    const schoolGPA = schoolName.gpa >= 4.33 ? 4.33 : schoolName.gpa
    if (gpa >= 4.33){
      return 5
    }
    if (gpa >= schoolGPA + 0.1) {
      return 5
    }
    if (gpa >= schoolGPA - 0.1 && gpa < schoolGPA + 0.1) {
      return 4
    }
    if (gpa >= schoolGPA - 0.3 && gpa < schoolGPA - 0.1) {
      return 3
    }
    if (gpa >= schoolGPA - 0.5 && gpa < schoolGPA - 0.3) {
      return 2
    }
    return 1
  }

  function calculateRigor(eligible, taken) {
    const eAPs = parseInt(eligible)
    const tAPs = parseInt(taken)
    console.log(tAPs/eAPs)
    if (eAPs == 0 && tAPs == 0){
      return 5
    }
    if (eAPs) {
      var rigor = tAPs/eAPs
      setCourseRigor(rigor)
      if (rigor == 1){
        return 5
      }
      if (rigor <= 1 && rigor > .75){
        return 4
      }
      if (rigor <= .75 && rigor > .5){
        return 3
      }
      if (rigor <= .5 && rigor > .25){
        return 2
      }
      if (rigor <= .25 && rigor > 0){
        return 1
      }
    }
    return 1
  }


/*
  const School = Schools.map(
    (schools)=>{
      return (
        <tr>
          <td>{schools.name}</td>
          <td>{schools.satLower}</td>
          <td>{schools.satUpper}</td>
          <td>{schools.actLower}</td>
          <td>{schools.actUpper}</td>
        </tr>
      )
    }
  )
*/

  const [finalText, setFinalText] = useState("Press the button below to print a report")

  const SchoolNameArr = Schools.map((schools) => {return (schools.name)})
/*
  function schoolChange (e, sat, gpa) {
    console.log(ECScore)
    const iSat = parseInt(sat)
    const iGPA = parseInt(gpa)
    const iECs = parseInt(extraCurricular)
    const iSh = parseInt(summerHours)
    const iCS = parseInt(communityServiceHours)
    if (iSat && iGPA && iECs && iSh && iCS && SchoolNameArr.includes(e)) {
      const fin = Schools[SchoolNameArr.indexOf(e)]
      //var dr = (iSat - fin.satUpper) * fin.weights[0] + ECScore * fin[2] + SummerScore * fin[3] + ServiceScore * fin[4]
      var dr = (iSat - fin.satUpper) * fin.weights[0] + ECScore * fin.weights[2] + SummerScore * fin.weights[3] + ServiceScore * fin.weights[4]
      console.log(dr)
      setFinalText("We Estimate your score to be " + dr.toString())
    }
    else {
      setFinalText("Not Available School. Please Enter All Valid Information")
    }
    setSchoolSelection(e)
  }
/*
  function printScores(){
    console.log(satScore);
    console.log(extraCurricular);
    console.log(gpaAverage);
    const iSatM = parseInt(satMath)
    const iSatE = parseInt(satERBW)
    const iGPA = parseInt(gpaAverage)
    const iECs = parseInt(extraCurricular)
    const iSh = parseInt(summerHours)
    const iCS = parseInt(communityServiceHours)
    if (iSatM && iSatE && iGPA && iECs && iSh && iCS && SchoolNameArr.includes(schoolSelection)) {
      const fin = Schools[SchoolNameArr.indexOf(schoolSelection)]
      //var dr = (iSat - fin.satUpper) * fin.weights[0] + ECScore * fin[2] + SummerScore * fin[3] + ServiceScore * fin[4]
      var dr = ((iSatM + iSatE) - fin.satUpper) * fin.weights[0] + ECScore * fin.weights[2] + SummerScore * fin.weights[3] + ServiceScore * fin.weights[4]
      setFinalText("We Estimate your score to be " + dr.toString())
    }
    else {
      setFinalText("Not Available School. Please Enter All Valid Information")
    }
  }

             <input type = "text" name = "name" onChange = {(e) => setSchoolSelection(e.target.value)} value = {schoolSelection}/>
*/

  // Describes each score
  function PrintReport(satM, satE, ecH, sumH, serH, rig, sch) {
    return(
      <div className="report">
        <div className="satReport">
          <h3>SAT Math</h3>
            <p>{scoreDesc[scores[0]]}</p>
          <h3>SAT English</h3>
            <p>{scoreDesc[scores[1]]}</p>
        </div>
        <div className="ecReport">
          <h3>Extracurriculars</h3>
            <p>{scoreDesc[scores[2]]}</p>
          <h3>Summer Experience</h3>
            <p>{scoreDesc[scores[3]]}</p>
          <h3>Community Service</h3>
            <p>{scoreDesc[scores[4]]}</p>
        </div>
        <div className="academicReport">
          <h3>GPA</h3>
            <p>{scoreDesc[scores[5]]}</p>          
          <h3>Course Rigor</h3>
            <p>{scoreDesc[scores[6]]}</p>
        </div>
      </div>
    )
    }

  function printScoresVolumeTwo () {
    const iSatM = parseInt(satMath)
    const iSatE = parseInt(satERBW)
    const iGPA = parseFloat(gpaAverage)
    const iECs = parseInt(extraCurricular)
    const iSh = parseInt(summerHours)
    const iCS = parseInt(communityServiceHours)
    const iEAP = parseInt(availableAPs)
    const iTAP = parseInt(takenAPs)
    var fin = 0
    if (iSatM && iSatE && iGPA && iECs && iSh && iCS && SchoolNameArr.includes(schoolSelection)) {
      const sch = Schools[SchoolNameArr.indexOf(schoolSelection)]
      if (iSatM >= sch.math) {
        fin += 3
      }
      if (iSatM >= sch.math - 20 && iSatM < sch.math) {
        fin += 2
      }
      if (iSatM >= sch.math - 50 && iSatM < sch.math - 20) {
        fin += 1
      }
      if (iSatE >= sch.erbw) {
        fin += 3
      }
      if (iSatE >= sch.erbw - 20 && iSatE < sch.erbw) {
        fin += 2
      }
      if (iSatE >= sch.erbw - 50 && iSatM < sch.erbw - 20) {
        fin += 1
      }
      setScores([calculateSATMath(iSatM, sch),
                  calculateSATEnglish(iSatE, sch),
                  calculateECValue(iECs, sch),
                  calculateSummerScore(iSh, sch),
                  calculateServiceScore(iCS, sch),
                  calculateGPAScore(iGPA, sch),
                  calculateRigor(iEAP, iTAP)])
      console.log(scoreDesc[5])
      setIsShown(true)
      var scoreAvg = scores.reduce((a, b) => a + b) / scores.length;
      setFinalText(finalScore[parseInt(scoreAvg)])
    }
    else {
      setFinalText("Please enter valid values")
    }
    
  }

  return(
    <div className = "chance-me">
      <div className = 'head'>
        <h1>AKALA: Chance-Me Feature</h1>
      </div>
      <div className="App">
        <div className = 'collegeSelect'>
          <p>Please Select The College you want</p>
          <select
            name="choose school"
            options={SchoolNameArr}
            value={schoolSelection}
            onChange = {(e) => setSchoolSelection(e.target.value)}>
              {Schools.map((option) => (
                <option key={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          <p>{finalText}</p>
          <button onClick={printScoresVolumeTwo}>Show report</button>
        </div>
        <div className="SatClass">
          <h3>Standardized Test Scores</h3>
          <p>Please input your SAT ERBW here</p>
          <input type = "text" 
            name = "erbwBox" 
            onChange = {(e) => setSatERBW(e.target.value)} 
            value = {satERBW} 
            autoFocus
            />
          <p>Please input your SAT Math here</p>
          <input type = "text" 
            name = "mathBox" 
            onChange = {(e) => setSatMath(e.target.value)} 
            value = {satMath} 
            autoFocus
          />
        </div>
        <div className="GpaClass">
          <h3>Academics</h3>
          <p>Enter your GPA (out of 4.33)</p>
          <input type = "text" 
              name = "gpaBox" 
              onChange = {(e) => setGpaAverage(e.target.value)} 
              value = {gpaAverage} 
          />
          <p>How many AP (or equivalent) classes will you be eligible to take by the end of your senior year?</p>
          <input type = "text" 
              name = "APBox1" 
              onChange = {(e) => setAvailableAPs(e.target.value)} 
              value = {availableAPs} 
          />
          <p>How many will you have taken by the end of your senior year?</p>
          <input type = "text" 
              name = "APBox2" 
              onChange = {(e) => setTakenAPs(e.target.value)} 
              value = {takenAPs}
          />
        </div>
        <div className="EcClass">
          <h3>Extracurriculars</h3>
          <p>Enter your extracurricular hours per week on average</p>
          <input type = "text" 
              name = "ecBox" 
              onChange = {(e) => setExtraCurricular(e.target.value)} 
              value = {extraCurricular} 

          />
          <p>Please enter how many hours you spent on activities this past sumnmer</p>
          <input type = "text" 
              name = "ecBox" 
              onChange = {(e) => setSummerHours(e.target.value)} 
              value = {summerHours} 

          />
          <p>Enter your community service hours per week on average</p>
          <input type = "text" 
              name = "ecBox" 
              onChange = {(e) => setCommunityServiceHours(e.target.value)} 
              value = {communityServiceHours} 
          />
        </div>
      </div>
    {isShown && <PrintScoresTwo 
    // SATmath, SATeng, ECs, SumEx, CS, GPA, Rigor
      //satM = {parseInt(scores[0])} 
      //satR = {parseInt(scores[1])} 
      //gpa = {parseFloat(scores[5])} 
      //ec = {parseInt(scores[2])} 
      //cs = {parseInt(scores[4])} 
      //se = {parseInt(scores[3])}
      //cr = {parseInt(scores[6])}

      sch = {Schools[SchoolNameArr.indexOf(schoolSelection)]}
      satM = {[satMath, Schools[SchoolNameArr.indexOf(schoolSelection)].math]} 
      satR = {[satERBW, Schools[SchoolNameArr.indexOf(schoolSelection)].erbw]} 
      gpa = {[gpaAverage, Schools[SchoolNameArr.indexOf(schoolSelection)].gpa]} 
      ec = {[extraCurricular, ecAvg]}  
      cs = {[communityServiceHours, csAvg]} 
      se = {[summerHours, seAvg]} 
      cr = {[courseRigor, .75]}
      />
    }
    {isShown && <PrintReport />}

    </div>
    
  )
}
