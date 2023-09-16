import React from 'react'
import "./Item.css"
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from "react-router-dom"


const Item = ({ id, name, img, price, category }) => {
  return (
    <article className="Item">
      <div className='Container'>

        <picture>
          <img src={img} alt={name} />
        </picture>

        <div className='contenido-container'>
          <header>
            <h2>{name}</h2>
          </header>

          <section>
            <p>Categoria: {category}</p>
          </section>

          <section>
            <p>Precio: {price} ETH</p>
          </section>

        </div>

      </div>

        <footer className='Item-footer'>
        <Link to={`/ecommerce-react/detail/${id}`} >VER</Link>
        </footer>
        
      </article>
  )
}


export default Item