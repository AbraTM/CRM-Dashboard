import React from 'react'
import { Chart as ChartJS, RadialLinearScale, ArcElement } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'
import '../styling/polararea.css'

ChartJS.register(
    RadialLinearScale,
    ArcElement,
)

export default function PolarareaGraph({chartData, countries}) {
    const specifiedData = [ chartData.INR, chartData.JPY, chartData.CNY, chartData.BDT ];

    const options = {
      responsive : true
    }

    const data = {
        labels : ["INR", 'JPY', "CNY", "BDT"],
        datasets : [{
            data: specifiedData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
              borderWidth: 1,
    }]
    }
  return (
    <div className="polarareagraph">
        <PolarArea data={data} options={options}/>
    </div>
  )
}
