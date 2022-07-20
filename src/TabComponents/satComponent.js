import React from "react";

export default function SatComponent(props) {
    return (
        <div className="SatClass">
            <h3>Please enter your SAT (both math and reading)</h3>
            <input type = "text" 
                name = "satBox" 
                onChange = {(e) => props.setSatScore(e.target.value)} 
                value = {props.satScore} 
                autoFocus
            />
        </div>
    )
}