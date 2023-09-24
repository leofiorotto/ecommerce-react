import React from 'react'
import "./Item.css"
import { Link, useNavigate } from "react-router-dom"
import ethlogo from '../../assets/eth-logo.png'




const Item = ({ id, name, img, price, category }) => {

 

  return (
    <article className="Item">
      <div className='Container'>

        <picture>
          <img src={img} alt={name} />
        </picture>

        <div className='contenido-container'>
          <header>
            <h2>{name}</h2><br />
          </header>
          <section style={{display:'flex'}}>
            <p style={{fontSize:'1.1rem'}}>Price: <b>{price}</b></p>
            <img src={ethlogo} alt="eth-logo" style={{ width: '30px', height: '30px', marginTop:'0.52rem' }} /><br />
          </section>

        </div>

      </div>

        <footer className='Item-footer'>
        <Link to={`/detail/${id}`}><b>View</b></Link>
        </footer>
        
      </article>
  )
}


export default Item