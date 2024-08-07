import React from 'react'
import './Specials.css';

export default function Testimonial() {
  return (
    <section>
        <article className='special-head'><h1>Testimonial</h1></article>
        <article className='special'>
            <article className='card'>
              <h1>name</h1>
              <p>review</p>
            </article>
            <article className='card'>
              <h1>name</h1>
              <p>review</p></article>
            <article  className='card'>
              <h1>name</h1>
              <p>review</p></article>
        </article>
    </section>
  )
}
