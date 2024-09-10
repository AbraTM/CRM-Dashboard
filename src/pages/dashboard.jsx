import React from 'react'
import './styling/dashboard.css'
import LineGraph from '../components/charts/line'
import BarGraph from '../components/charts/bar'
import DoughnutGraph from '../components/charts/doughnut'
import Transactions from '../components/transactions'
import Footer from '../components/footer'
import { mockData } from '../../mockdata'

export default function Dashboard() {
  const [ showSettings, setShowSettings ] = React.useState(false)
  const [ lineGraphData, setLineGraphData ] = React.useState({
    from : 2010,
    to : 2024,
  })

  const [ barGraphData, setBarGraphData ] = React.useState({
    from : 2010,
    to : 2024
  })
  //Sort data from total sales
  const specifiedData = mockData.filter(item => item.year >= barGraphData.from && item.year <= barGraphData.to)
  const entries = Object.entries(specifiedData)
  const sortedByYear = entries.sort((a, b) => a[1].year - b[1].year)
  let totalSales = 0;
  sortedByYear.forEach(item => {
    totalSales += item[1].sales
  })
  const years = mockData.map(item => item.year)
  years.sort((a, b) => a - b)
  const yearOptions = years.map((item, index) => {
    return (
      <option value={item} key={index} className='option'>{item}</option>
    )
  })
  const handleChangeLine = (event) => {
    const {name : key, value} = event.target
    setLineGraphData(prev => {
      return {
        ...prev,
        [key] : Number(value)
      }
    })
  }

  const handleChangeBar = (event) => {
    const {name : key, value} = event.target
    setBarGraphData(prev => {
      return {
        ...prev,
        [key] : Number(value)
      }
    })
  }
  
  return (
    <div className="dashboard">
       <div className='settings' style={{height : showSettings ? '80px' : '35px'}}>
        <button className='settings-btn' onClick={() => setShowSettings(prev => !prev)}>
            <img src='./settings.png' className='settings-icon'/>
        </button>
        {showSettings &&
          <div className='settings-optns'>
          <div className='line-settings'>
              <h2>Line Graph</h2>
              <select className="select" defaultValue={lineGraphData.from} onChange={handleChangeLine} name='from'>
                  {yearOptions}
              </select>
              <select className="select" defaultValue={lineGraphData.to} onChange={handleChangeLine} name='to'>
                  {yearOptions}
              </select>
          </div>
          <div className='bar-settings'>
              <h2>Bar Graph</h2>
              <select className="select" value={barGraphData.from} onChange={handleChangeBar} name='from'>
                  {yearOptions}
              </select>
              <select className="select" value={barGraphData.to} onChange={handleChangeBar} name='to'>
                  {yearOptions}
              </select>
          </div>
        </div>
      }
      </div>
      <div className="level-1">
        <LineGraph lineGraphData={lineGraphData}/>
        <div className='level-1-right'>
          <BarGraph barGraphData={barGraphData}/>
          <div className="sales">
            <img src="./sales.png"/>
            <div className="sales-text">
              <h1>Sales Obtained</h1>
              <h3>{totalSales.toLocaleString(navigator.language, { minimumFractionDigits : 0})}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="level-2">
        <DoughnutGraph />
        <Transactions />
        <div className='level-2-right'>
          <div className="new-clients">
            <img src='./newusers.png'/>
            <div>
              <h3>32,441</h3>
              <h1>New Clients</h1>
            </div>
          </div>
          <div className="traffic">
            <img src='./traffic.png'/>
            <div>
              <h3>1,325,134</h3>
              <h1>Traffic</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
