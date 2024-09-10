import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import '../styling/doughnut.css'
import { mockData } from '../../../mockdata'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function DoughnutGraph() {
    const entries = Object.entries(mockData)
    const sorted = entries.sort((a, b) => a[1].year - b[1].year)
    const currentYear = sorted[sorted.length - 1]
    const previousYear = sorted[sorted.length - 2]
    
    console.log(currentYear.sales, )
    const data = {
        labels : [currentYear[1].year, previousYear[1].year],
        datasets : [{
            data: [currentYear[1].sales, previousYear[1].sales],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
          }]
    }
  return (
    <div className="doughnutgraph">
        <h1>Sales Increase From Previous Year</h1>
        <Doughnut data={data}/>
    </div>
  )
}
