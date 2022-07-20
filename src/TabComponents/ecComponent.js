import React from "react";

export default function ecComponent(props) {
    console.log(props.extraCurricular)
    return (
        <div className="exClass">
            <h3>Enter your extracurricular hours per week on average</h3>
            <input type = "text" 
                name = "ecBox" 
                onChange = {(e) => props.setExtraCurricular(e.target.value)} 
                value = {props.extraCurricular} 
                autoFocus
            />
        </div>
    )
}