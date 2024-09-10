import React from 'react'
import './styling/invoices.css'
import { mockDataInvoices } from '../../mockdata'

export default function Invoices() {
  const invoicesMembers = mockDataInvoices.map((invoice , index) => {
    return (
      <div className="invoice" key={index}>
        <div>{invoice.id}</div>
        <div>{invoice.name}</div>
        <div>{invoice.phone}</div>
        <div>{invoice.email}</div>
        <div>{invoice.cost}</div>
        <div>{invoice.date}</div>
      </div>
    )
  })
  return (
    <div className="invoices">
      <h1>Invoices</h1>
      <h4>List Of Invoices Balance</h4>
      <div className="invoices-table">
        <div className="invoices-table-top">
          <div>ID</div>
          <div>Name</div>
          <div>Phone Number</div>
          <div>Email</div>
          <div>Cost</div>
          <div>Date</div>
        </div>
        {invoicesMembers}
      </div>
    </div>
  )
}
