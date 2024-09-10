import React from 'react'
import './styling/transactions.css'
import { mockTransactions } from '../../mockdata'

export default function Transactions() {
    const transactionsElements = mockTransactions.map((item, index) => {
        return (
            <div className='transaction' key={index}>
                <div>
                    <span className='txid'>{item.txId}</span>
                    {item.user}
                </div>
                <div>{item.date}</div>
                <div className='txcost'>$ {item.cost}</div>
            </div>
        )
    })

    return (
        <div className='transactions'>
            <h1>Recent Transactions</h1>
            {transactionsElements}
        </div>
    )
}
