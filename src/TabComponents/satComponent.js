import React from "react";

export default function SatComponent(props) {
    return (
        <div className="SatClass">
            <h3>Please enter your SAT (both math and reading)</h3>
            <p>Please input your SAT ERBW here</p>
            <input type = "text" 
                name = "erbwBox" 
                onChange = {(e) => props.setSatERBW(e.target.value)} 
                value = {props.satERBW} 
                autoFocus
            />
            <p>Please input your SAT Math here</p>
            <input type = "text" 
                name = "mathBox" 
                onChange = {(e) => props.setSatMath(e.target.value)} 
                value = {props.satMath} 
                autoFocus
            />
        </div>
    )
}