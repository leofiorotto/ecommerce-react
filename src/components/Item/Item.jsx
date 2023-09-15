import React from 'react'
import "./Item.css"
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from "react-router-dom"


const Item = ({ id, name, img, price, category }) => {
  return (
    <article className="Item">
      <div className='Container'>
        <header>
          <h2>{name}</h2>
        </header>

        <picture>
          <img src={img} alt={name} />
        </picture>

        <section>
          <p>Categoria: {category}</p>
        </section>

        <section>
          <p>Precio: {price} ETH</p>
        </section>
      </div>

        <footer className='Item-footer'>
        <Link to={`/Entrega1-React-Fiorotto/detail/${id}`} >VER</Link>
        </footer>
        
      </article>
  )
}


export default Item