import React from "react";
import './PrintScoresTwo.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Schools from "../schools.json";


export default function PrintScoresTwo (props) {
    const scoreDesc = ["N/A", "Needs improvement", "Needs improvement", "Okay", "Good", "Excellent!"]

    const SchoolNameArr = Schools.map((schools) => {return (schools.name)})

    return (
        <div className="graph-container">
            <div className="graph-row">
                <div className="left">
                    <Bar 
                        data = {{
                            labels: ['SAT Math', 'SAT English'],
                            datasets: [{
                                label: 'Your score',
                                data: [props.satM[0], props.satR[0]],
                                backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                borderColor: 'rgb(30, 60, 255)',
                                borderWidth: 1
                            },
                            {
                                label: 'School average',
                                data: [props.satM[1], props.satR[1]],
                                backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                borderColor: 'rgb(255, 30, 60)',
                                borderWidth: 1
                            }],
                        }}
                        height = {300}
                        width = {30}
                        options = {{
                            maintainAspectRatio: false,
                            indexAxis: 'x'
                        }}
                    />
                </div>
                <div className="center">
                    <Bar 
                            data = {{
                                labels: ['GPA'],
                                datasets: [{
                                    label: 'Your score',
                                    data: [props.gpa[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'School average',
                                    data: [props.gpa[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {300}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'x'
                            }}
                        />                
                </div>
                <div className="right">
                    <Bar 
                            data = {{
                                labels: ['Course Rigor'],
                                datasets: [{
                                    label: 'Your score',
                                    data: [props.cr[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'School average',
                                    data: [props.cr[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {300}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'x'
                            }}
                        />                
                </div>
            </div>
            <div className="graph-row">
                <div className="left">
                    <Bar 
                            data = {{
                                labels: ['Extracurriculars', 'Community Service'],
                                datasets: [{
                                    label: 'Your hours',
                                    data: [props.ec[0], props.cs[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'Average',
                                    data: [props.ec[1], props.cs[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {300}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'x'
                            }}
                    />
                </div>
                <div className="right">
                    <Bar 
                            data = {{
                                labels: ['Summer Experience'],
                                datasets: [{
                                    label: 'Your hours',
                                    data: [props.se[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'Average',
                                    data: [props.se[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {300}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'x'
                            }}
                    />  
                </div>
            </div>
        </div>
    )
}