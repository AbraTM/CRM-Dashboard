import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js"
import { Line } from 'react-chartjs-2'
import '../styling/line.css'
import { mockData } from '../../../mockdata'

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    Tooltip,
)

export default function LineGraph({ lineGraphData }) {
    const specifiedData = mockData.filter(item => item.year >= lineGraphData.from && item.year <= lineGraphData.to)
    const entries = Object.entries(specifiedData)
    const sortedByYear = entries.sort((a, b) => a[1].year - b[1].year)
    const yearsData = sortedByYear.map(item => item[1].year)
    const salesData = sortedByYear.map(item => item[1].profit_per_item*item[1].sales)
    let totalRevenue = 0
    specifiedData.forEach(element => {
      totalRevenue += element.sales * element.profit_per_item
    });

    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false
          }
        }
    };

    const data = {
        labels : yearsData,
        datasets: [
          {
            data: salesData,
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
    };
    
    return (
      <div className='linegraph'>
        <h1>Total Revenue Generated</h1>
        <h3>$ {totalRevenue.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h3>
        <Line data={data} options={options}/>
      </div>
    )
}
