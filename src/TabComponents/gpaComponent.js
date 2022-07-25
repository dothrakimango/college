import React from "react";

export default function GpaComponent(props) {
    return (
        <div className="GpaClass">
            <p>Enter your GPA</p>
            <input type = "text" 
                name = "gpaBox" 
                onChange = {(e) => props.setGpaAverage(e.target.value)} 
                value = {props.gpaAverage} 
                autoFocus
            />
            <p>Is your GPA weighted?</p>
            <input type = "radio"
                id="yes"
                checked={props.isWeighted==1}
                onChange = {(e) => props.setIsWeighted(true)}
            />
            <label htmlFor="yes">Yes</label>
            <input type = "radio"
                id="no"
                checked={props.isWeighted==0}
                onChange = {(e) => props.setIsWeighted(false)}
            />
            <label htmlFor="no">No</label>
        </div>
    )
}