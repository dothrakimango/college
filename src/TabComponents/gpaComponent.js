import React from "react";

export default function GpaComponent(props) {
    return (
        <div className="GpaClass">
            <p>Enter your GPA</p>
            <input type = "text" 
                name = "gpaBox" 
                onChange = {(e) => props.setGpaAverage(e.target.value)} 
                value = {props.gpaAverage} 
            />
            <p>How many AP (or equivalent) classes will you be eligible to take by the end of your senior year?</p>
            <input type = "text" 
                name = "APBox1" 
                onChange = {(e) => props.setAvailableAPs(e.target.value)} 
                value = {props.availableAPs} 
            />
            <p>How many will you have taken by the end of your senior year?</p>
            <input type = "text" 
                name = "APBox2" 
                onChange = {(e) => props.setTakenAPs(e.target.value)} 
                value = {props.takenAPs}
            />
        </div>
    )
}