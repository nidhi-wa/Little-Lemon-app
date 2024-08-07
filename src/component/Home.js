import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../assets/restauranfood.jpg';
import Specials from './Specials';
import About from './About';
import './Main.css';
import './Home.css';

export default function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reservation");
  };
  return (


<main className="main">
    <section id="home" className="home">
    <article className="content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <button onClick={handleClick}> Reserve Table</button>
    </article>
    <article className="heroImg">
        <img src={HeroImg} alt="hero cusine"></img>
    </article>
    </section>
    <Specials/>
    <About/>
  </main> 
 
  )
}
