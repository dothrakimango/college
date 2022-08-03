import React from "react";
import { Bar } from 'react-chartjs-2';

export default function PrintScoresTwo () {


    return (
        <div>
            <Bar 
                data = {{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of votes',
                        data: [65, 59, 80, 81, 56, 55, 40],
                    }]
                }}
                height = {400}
                width = {60}
                options = {{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}