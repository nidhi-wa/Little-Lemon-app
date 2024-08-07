import React from 'react'
import './Specials.css';
import greekSalad from '../assets/greek salad.jpg'
import Bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon dessert.jpg'

const card=[
    {
        id: 1,
        name:'Greek Salad',
        price: 20,
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        imageUrl:greekSalad,
    },
    {
        id: 2,
        name:'Bruchetta',
        price: 50,
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        imageUrl:Bruchetta,
    },
    {
        id: 3,
        name:'Lemon Dessert',
        price: 30,
        description:"This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageUrl:lemonDessert,
    }
]

export default function Specials() {

    const arrayDataItems = card.map(dish =>
        <article class="card" key={dish.id}>
        <img src={dish.imageUrl} alt="Our Special"></img>
        <h1>{dish.name}</h1>
        <h1>{dish.price}$</h1>
        <p>{dish.description}</p>
        <h4>Order For Delvery</h4>
     </article>
      )
  return (
    <section>
        <article className="special-head">
          <h1>This Weeks Specials!</h1>
          <button>Online Menu</button>
        </article>
        <div className="special">
           {arrayDataItems}
        </div>
  </section>
  );
}
