import React from "react";

export default function EcComponent(props) {
    return (
        <div className="EcClass">
            <p>Enter your extracurricular hours per week on average</p>
            <input type = "text" 
                name = "ecBox" 
                onChange = {(e) => props.setExtraCurricular(e.target.value)} 
                value = {props.extraCurricular} 

            />
            <p>Please enter how many hours you spent on activities this past sumnmer</p>
            <input type = "text" 
                name = "ecBox" 
                onChange = {(e) => props.setSummerHours(e.target.value)} 
                value = {props.summerHours} 

            />
            <p>Enter your community service hours per week on average</p>
            <input type = "text" 
                name = "ecBox" 
                onChange = {(e) => props.setServiceHours(e.target.value)} 
                value = {props.serviceHours} 
            />
        </div>
    )
}