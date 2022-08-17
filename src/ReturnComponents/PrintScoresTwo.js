import React from "react";
import './PrintScoresTwo.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Schools from "../schools.json";


export default function PrintScoresTwo (props) {

    const SchoolNameArr = Schools.map((schools) => {return (schools.name)})
    
    function PrintReport() {
        return(
          <div className="report">
            
            
            
          </div>
        )
    }



    return (
        <div className="reports">
            <div className="academicReport">
                <div className="academicDesc">
                    <h3>GPA</h3>
                    {props.scoreDesc[props.globalScores[5]]}
                    {props.globalScores[5] <= 3 &&
                        <p>
                            AKALA can help connect you with resources to increase your GPA and boost your chances.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                    <h3>Course Rigor</h3>
                    {props.scoreDesc[props.globalScores[6]]}
                    {props.globalScores[6] <= 3 &&
                        <p>
                            AKALA can help you find the best courses available at your school to prepare you for college.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                </div>
                    <div className="graph">
                        <Bar 
                                data = {{
                                    labels: ['GPA', 'Course Rigor'],
                                    datasets: [{
                                        label: 'Your score',
                                        data: [props.gpa[0], props.cr[0]],
                                        backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                        borderColor: 'rgb(30, 60, 255)',
                                        borderWidth: 1
                                    },
                                    {
                                        label: 'School average',
                                        data: [props.gpa[1], props.cr[1]],
                                        backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                        borderColor: 'rgb(255, 30, 60)',
                                        borderWidth: 1
                                    }],
                                }}
                                height = {200}
                                width = {60}
                                options = {{
                                    maintainAspectRatio: false,
                                    indexAxis: 'y'
                                }}
                            />                
                    </div>
            </div>

            <div className="ecReport">
                <div className="ecDesc">
                    <h3>Extracurriculars</h3>
                    {props.scoreDesc[props.globalScores[2]]}
                    {props.globalScores[2] <= 3 &&
                        <p>
                            With AKALA, you can connect with a variety of extracurriculars in your area to make your college application stand out.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                    {props.globalScores[2] >= 4 &&
                        <p>
                            Having a lot of hours is great, but AKALA can connect you with unique extracurriculars that'll make your college application stand out.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                </div>
                <div className="graph">
                    <Bar 
                            data = {{
                                labels: ['Extracurriculars'],
                                datasets: [{
                                    label: 'Your hours',
                                    data: [props.ec[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'School Average',
                                    data: [props.ec[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {200}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'y'
                            }}
                    />
                </div>
            </div>

            <div className="csReport">
                <div className="csDesc">
                    <h3>Community Service</h3>
                    {props.scoreDesc[props.globalScores[4]]}
                    {props.globalScores[4] <= 3 &&
                        <p>
                            AKALA can connect you with a variety of community organizations that let you utilize your talents to give back.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                </div>
                <div className="graph">
                    <Bar 
                            data = {{
                                labels: ['Community Service'],
                                datasets: [{
                                    label: 'Your score',
                                    data: [props.cs[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'School average',
                                    data: [props.cs[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {200}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'y'
                            }}
                        />                
                </div>
            </div>

            <div className="seReport">
                <div className="seDesc">
                    <h3>Summer Experience</h3>
                    {props.scoreDesc[props.globalScores[3]]}
                    {props.globalScores[3] <= 3 &&
                        <p>
                            No more boring summer breaks! AKALA helps you find a variety of unique summer experiences in your area that interest you.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                </div>
                <div className="graph">
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
                                    label: 'School Average',
                                    data: [props.se[1]],
                                    backgroundColor: 'rgba(255, 30, 60, 0.2)',
                                    borderColor: 'rgb(255, 30, 60)',
                                    borderWidth: 1
                                }],
                            }}
                            height = {200}
                            width = {60}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'y'
                            }}
                    />  
                </div>
            </div>

            <div className="satReport">
                <div className="satDesc">
                    <h3>SAT Math</h3>
                    {props.scoreDesc[props.globalScores[0]]}
                    <h3>SAT English</h3>
                    {props.scoreDesc[props.globalScores[1]]}
                    {(props.globalScores[0] <= 3 || props.globalScores[1] <= 3) &&
                        <p>
                            AKALA helps you keep track of resources to boost your SAT and AP scores and make your application stand out.<br/>
                            <a href="https://app.goakala.com/about/signup/">Sign up today!</a>
                        </p>
                    }
                </div>
                <div className="graph">
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
                            width = {30}
                            options = {{
                                maintainAspectRatio: false,
                                indexAxis: 'y'
                            }}
                        />
                </div>
            </div>
        </div>
    )
}

/*
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
                                    label: 'School Average',
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
                <div className="left">
                    <Bar 
                            data = {{
                                labels: ['Extracurriculars'],
                                datasets: [{
                                    label: 'Your hours',
                                    data: [props.ec[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'School Average',
                                    data: [props.ec[1]],
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
                <div className="center">
                    <Bar 
                            data = {{
                                labels: ['Community Service'],
                                datasets: [{
                                    label: 'Your score',
                                    data: [props.cs[0]],
                                    backgroundColor: 'rgba(30, 60, 255, 0.2)',
                                    borderColor: 'rgb(30, 60, 255)',
                                    borderWidth: 1
                                },
                                {
                                    label: 'School average',
                                    data: [props.cs[1]],
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

*/