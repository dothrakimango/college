import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Schools from "../schools.json";


export default function PrintScoresTwo (props) {
    const scoreDesc = ["N/A", "Needs improvement", "Needs improvement", "Okay", "Good", "Excellent!"]

    const SchoolNameArr = Schools.map((schools) => {return (schools.name)})

    return (
        <div>
            <div>
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
                    height = {200}
                    width = {60}
                    options = {{
                        maintainAspectRatio: false
                    }}
                />
            </div>
            <div>
                <Bar 
                        data = {{
                            labels: ['Extracurriculars', 'Summer Experience', 'Community Service'],
                            datasets: [{
                                label: 'Your score',
                                data: [props.ec[0], props.se[0], props.cs[0]],
                                backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                borderColor: 'rgb(30, 60, 255)',
                                borderWidth: 1
                            },
                            {
                                label: 'School average',
                                data: [props.ec[1], props.se[1], props.cs[1]],
                                backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                borderColor: 'rgb(255, 30, 60)',
                                borderWidth: 1
                            }],
                        }}
                        height = {300}
                        width = {60}
                        options = {{
                            maintainAspectRatio: false,
                            indexAxis: 'y'
                        }}
                    />                
            </div>
            <div>
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
                        height = {100}
                        width = {60}
                        options = {{
                            maintainAspectRatio: false,
                            indexAxis: 'y'
                        }}
                    />                
            </div>
            <div>
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
                        height = {100}
                        width = {60}
                        options = {{
                            maintainAspectRatio: false,
                            indexAxis: 'y'
                        }}
                    />                
            </div>
        </div>
    )
}