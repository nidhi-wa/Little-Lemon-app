import React from 'react';
import image1 from '../assets/restaurant.jpg';
import image2 from '../assets/restaurant chef B.jpg';
import './About.css';

export default function About() {
  return (
   <section id="about" className='section-about'>
   <article className='content-about'>
     <h1>Little Lemon</h1>
     <h2>Chicago</h2>
     <p>Little Lemon is a charming restaurant based in Chicago, known for its vibrant ambiance and exquisite culinary offerings.The menu at Little Lemon is a testament to culinary creativity, featuring a wide array of dishes that blend traditional flavors with contemporary twists.  </p>
   </article>
   <article className='about-image'>
      <img src={image1} className='image1' alt="about-pic"></img>
      <img src={image2} className='image2' alt="about-pic"></img>
   </article>
   </section>
  )
}
