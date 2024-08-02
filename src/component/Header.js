import React from 'react'
import logoImg from '../assets/Logo.svg'
import Nav from './Nav';

export default function Header() {
  return (
    <header>
        <img src={logoImg} alt="little-lemon-logo"></img>
        <Nav></Nav>
    </header>
  )
}



