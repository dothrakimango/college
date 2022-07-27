import './App.css';
import React, {useState} from "react";
import Schools from "./schools.json";
import TabHolder from './TabHolder.js';

//Define Score Values
var ECScore = 0
var SummerScore = 0
var ServiceScore = 0

export default function App() {

  //Define States i.e. the values of the numbers
  const [satScore, setSatScore] = useState("0")
  const [gpaAverage, setGpaAverage] = useState("0")
  const [schoolSelection, setSchoolSelection] = useState("None")
  const [extraCurricular, setExtraCurricular] = useState("0")
  const [summerHours, setSummerHours] = useState("0")
  const [communityServiceHours, setCommunityServiceHours] = useState("0")
  const [satMath, setSatMath] = useState("0")
  const [satERBW, setSatERBW] = useState("0")
  const [availableAPs, setAvailableAPs] = useState("0")
  const [takenAPs, setTakenAPs] = useState("0")

  //Score Calculating Functions

  function calculateECValue(e) {
    const pd = parseInt(e)
    if (pd) {
      if (pd > 3) {
        return 5
      }
      if (pd <= 3 && pd > 2) {
        return 4
      }
      if (pd > 0 && pd < 2) {
        return 2
      }
    }
    return 0
  }

  function calculateSummerScore(e) {
    const pd = parseInt(e)
    if (pd) {
      if (pd > 3) {
        return 5
      }
      if (pd <= 3 && pd > 2) {
        return 4
      }
      if (pd > 0 && pd <= 2) {
        return 2
      }
    }
    return 0
  }

  function calculateServiceScore(e) {
    const pd = parseInt(e)
    
    if (pd) {
      if (pd > 3) {
        return 5
      }
      if (pd <= 3 && pd > 2) {
        return 4
      }
      if (pd > 0 && pd <= 2) {
        return 2
      }
    }
    return 0
  }

  function calculateRigor(eligible, taken) {
    const eAPs = parseInt(eligible)
    const tAPs = parseInt(taken)
    
    if (eAPs) {
      var rigor = tAPs/eAPs
      if (rigor == 1){
        return 5
      }
      if (rigor <= .75 && rigor > .5){
        return 4
      }
      if (rigor <= .5 && rigor > .25){
        return 2
      }
      if (rigor <= .25 && rigor > 0){
        return 1
      }
    }
    if (eAPs == 0 && tAPs == 0){
      return 5
    }
    return 0
  }

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


  const [finalText, setFinalText] = useState("Not Applicable Account")

  const SchoolNameArr = Schools.map((schools) => {return (schools.name)})

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
      setFinalText("Not Availibe School. Please Enter All Valid Information")
    }
    setSchoolSelection(e)
  }

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
      setFinalText("Not Availibe School. Please Enter All Valid Information")
    }
  }

  function printScoresVolumeTwo () {
    const iSatM = parseInt(satMath)
    const iSatE = parseInt(satERBW)
    const iGPA = parseInt(gpaAverage)
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
      fin = fin + calculateECValue(iECs)
      fin = fin + calculateSummerScore(iSh)
      fin = fin + calculateServiceScore(iCS)
      fin += calculateRigor(iEAP, iTAP)
      setFinalText("We Estimate your score to be " + (fin).toString())
    }
    else {
      setFinalText("Not Availibe School. Please Enter All Valid Information")
    }
    
  }

  return(
    <>
    <div className = 'head'>
      <h1>Akala: Chance-Me Feature</h1>
    </div>
    <div className="App">
      <TabHolder satMath = {satMath} setSatMath = {setSatMath} 
        satERBW = {satERBW} setSatERBW = {setSatERBW} 
        gpaAverage = {gpaAverage} setGpaAverage = {setGpaAverage}
        extraCurricular = {extraCurricular} setExtraCurricular = {setExtraCurricular}
        serviceHours = {communityServiceHours} setServiceHours = {setCommunityServiceHours}
        summerHours = {summerHours} setSummerHours = {setSummerHours}
        availableAPs = {availableAPs} setAvailableAPs = {setAvailableAPs}
        takenAPs = {takenAPs} setTakenAPs = {setTakenAPs}
        />
        <div className = 'collegeSelect'>
          <p>Please Enter The College you want</p>
          <input type = "text" name = "name" onChange = {(e) => setSchoolSelection(e.target.value)} value = {schoolSelection}/>
        </div>
      <button onClick={printScoresVolumeTwo}>log scores in console</button>
      
    </div>
    <p>{finalText}</p>
    <p>{SchoolNameArr.includes("")}</p>

    </>
    
  )
}


/*
    <div className = 'inputs'>
    <p>Please Enter Your SAT Score</p>
    <input type = "text" name = "name" onChange = {(e) => setSatScore(e.target.value)} value = {satScore}/>
    <p>Please Enter Your GPA</p>
    <input type = "text" name = "name" onChange = {(e) => setGpaAverage(e.target.value)} value = {gpaAverage}/>
    <p>Please Enter Your EC Hours</p>
    <input type = "text" name = "name" onChange = {(e) => calculateECValue(e.target.value)} value = {extraCurricular}/>
    <p>Please Enter Your communityServiceHours Hours</p>
    <input type = "text" name = "name" onChange = {(e) => calculateServiceScore(e.target.value)} value = {communityServiceHours}/>
    <p>Please Enter Your Summer Experience Hours</p>
    <input type = "text" name = "name" onChange = {(e) => calculateSummerScore(e.target.value)} value = {summerHours}/>
    </div>
*/

/*
    <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>School</th>
                    <th>SAT Lower</th>
                    <th>SAT Upper</th>
                    <th>ACT Lower</th>
                    <th>ACT Upper</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {School}
                    
                </tbody>
            </table>
             
        </div>
*/

//<div>
  //Schools && Schools.map( school => {
    //return(
      //<div key={school.name}>
      
      //</div>
//</div>