import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'

export default function Nav() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="reservation">Reservation</Link></li>
         <li><a href="/Order Online">Order Online</a></li>
         <li><a href="/Login">Login</a></li>
     </ul>
    </nav>
   </>
  )
}
