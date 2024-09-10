import React from 'react'
import './styling/manage.css'
import { mockDataTeam } from '../../mockdata'

export default function Manage() {
  const teamMembers = mockDataTeam.map((member , index) => {
    return (
      <div className="member" key={index}>
        <div>{member.id}</div>
        <div>{member.name}</div>
        <div>{member.age}</div>
        <div>{member.phone}</div>
        <div>{member.email}</div>
        <div className='access'>
          <img src={`./${member.access}.png`}></img>
          <p>{member.access}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="manage">
      <h1>TEAM</h1>
      <h4>Managing Team Members</h4>
      <div className="members-table">
        <div className="table-top">
          <div>ID</div>
          <div>Name</div>
          <div>Age</div>
          <div>Phone Number</div>
          <div>Email</div>
          <div>Access Level</div>
        </div>
        {teamMembers}
      </div>
    </div>
  )
}
