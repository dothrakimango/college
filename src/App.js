import './App.css';
import React from "react";
import Schools from "./schools.json";

export default function App() {
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
  

  

  return(
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
  )
}




// (name, satLower, satUpper, actLower, actUpper)

//name: name,
//satLower: satLower,
//satUpper: satUpper,
//actLower: actLower,
//actUpper: actUpper 

//<div>
  //Schools && Schools.map( school => {
    //return(
      //<div key={school.name}>
      
      //</div>
//</div>