import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Schools from "../schools.json";


export default function PrintScoresTwo (props) {
    const scoreDesc = ["N/A", "Needs improvement", "Needs improvement", "Okay", "Good", "Excellent!"]

    const SchoolNameArr = Schools.map((schools) => {return (schools.name)})

    return (
        <div>
            <Bar 
                data = {{
                    labels: ['SAT Math', 'SAT Reading', 'GPA', 'Course Rigor', 'Summer Experience', 'Community Service', 'Extracurriculars'],
                    datasets: [{
                        label: '# of votes',
                        data: [props.satM, props.satR, props.gpa, props.cr, props.se, props.cs, props.ec],
                    }],
                }}
                height = {400}
                width = {60}
                options = {{
                    maintainAspectRatio: false,
                    indexAxis: 'y'
                }}
            />
        </div>
    )
}