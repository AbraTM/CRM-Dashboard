import React from 'react'
import './styling/profileform.css'

export default function ProfileForm() {
  return (
    <div className='profileform'>
        <h1>Profile Form</h1>
        <h4>Create A New User Profile</h4>
        <form className='pform'>
            <div className="name">
                <input type='text' name='firstName' className='firstName' placeholder='First Name' required/>
                <input type='text' name='lastName' className='lastName' placeholder='Last Name' required/>
            </div>
            <input type='email' name='email' className='full' placeholder='Email' required/>
            <input type='tel' name='phoneNum' className='full' placeholder='Phone No.' required/>
            <input type='text' name='address' className='full' placeholder='Address' required/>
            <button type='submit' className='submit-btn'>Create New User</button>
        </form>
    </div>
  )
}
