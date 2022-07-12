import './App.css';
import React from "react";
import { parse } from "papaparse";
//import Schools from "./schools.json";

export default function App() {
  const School = (name, satLower, satUpper, actLower, actUpper) =>
    { return {
        name: name,
        satLower: satLower,
        satUpper: satUpper,
        actLower: actLower,
        actUpper: actUpper }
  }
  
  
  fetch("./satscores copy.csv")
    .then(schoolinfo => schoolinfo.text())
    .then(schoolinfo => {
      var data = parse(schoolinfo);
      console.log("data:", data);
    });
  
  var schools = data.map(([name, satLower, satUpper, actLower, actUpper]) =>
    ({name, satLower, satUpper, actLower, actUpper}));
  return(
    <h1>{schools[0]}</h1>
  )
}






//<div>
  //Schools && Schools.map( school => {
    //return(
      //<div key={school.name}>
      
      //</div>
//</div>