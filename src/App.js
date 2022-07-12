import './App.css';
import React from "react";
import Schools from "./schools.json";

export default function App() {
  const School = (name, satLower, satUpper, actLower, actUpper) =>
    { return {
        name: name,
        satLower: satLower,
        satUpper: satUpper,
        actLower: actLower,
        actUpper: actUpper }
  }

  
  var schools = Schools.map(([name, satLower, satUpper, actLower, actUpper]) =>
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