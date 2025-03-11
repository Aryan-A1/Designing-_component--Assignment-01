// write the component code here
// write the component code here
import React from 'react'
import './usercard.css'


export default function Usercard() {

  const pfp = "https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg" 
  const name = "Aryan"
  const email = "aryankumarsingh9370@gmail.com"
  const phone = "8785xxxxx"
  const add = "Sector 124, House No. 64, Mohali"
  return (
    <div className='container'>

      <div className='card'>

      <img src={pfp} alt="Profile photo" className='pfp'/>
      <h2> Name : {name} </h2>
      <p > <b>Email :</b> <a href="mailto:{email}">{email}</a> </p>
      <p> <b>Phone number :</b> {phone} </p>
      <p> <b>Address :</b> {add} </p>

      </div>

    </div>
  )
}