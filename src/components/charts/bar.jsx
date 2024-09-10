import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import '../styling/bar.css'
import { mockData } from '../../../mockdata'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarGraph({ barGraphData }) { 
    const specifiedData = mockData.filter(item => item.year >= barGraphData.from && item.year <= barGraphData.to)
    const entries = Object.entries(specifiedData)
    const sortedByYear = entries.sort((a, b) => a[1].year - b[1].year)
    const yearsData = sortedByYear.map(item => item[1].year)
    const salesData = sortedByYear.map(item => item[1].sales)
        
    const data = {
        labels : yearsData,
        datasets : [
            {
                data : salesData,
                backgroundColor : 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }
    const options = {
        plugins: {
            legend: {
              display: false
            }
        },
    }
    return (
        <div className="bargraph">
            <h1>Sales Quantity</h1>
            <Bar data={data} options={options}/>
        </div>
    )
}
