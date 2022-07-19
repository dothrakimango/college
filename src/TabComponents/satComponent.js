import React from "react";

export default function SatComponent(satScore, setSatScore) {
    return (
        <div className="SatClass">
            <h3>Please enter your SAT (both math and reading)</h3>
            <input type = "text" name = "satBox" onChange = {(e) => setSatScore(e.target.value)} value = {satScore}/>
        </div>
    )
}