import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import ethlogo from '../../assets/eth-logo.png'
import pricehistory from '../../assets/price-history.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useCart } from '../../context/CartContext'


const ItemDetail = ({ id, name, category, img, price, stock, scanCollection, NFTcollection}) => {
    const [addCounter, setAddCounter] = useState (0);

    const {addItem} = useCart() 

    const [mostrarImagen, setMostrarImagen] = useState(false);

    const toggleImagen = () => {
      setMostrarImagen(!mostrarImagen);
    };
    
    const handleOnAdd = (quantity) => {
        const objProductToAdd = {id, name, price, img, quantity}
        
        addItem(objProductToAdd)
        console.log('agregue al carrito', quantity);
        
        setAddCounter(quantity)
    }
    return (
 
        <div className='wrapper-item-detail'>
            <h2 className='tittle-detail'>{name}</h2>
            <article className='ItemDetailContainer'>
                <header>
                    <img className='img-detail' src={img} alt={name}/>
                </header>
                <div className='DescriptionDetail'>
                    <Link to={`/ecommerce-react/category/${category}`}>Back to collection</Link>
                    <Link to={`/ecommerce-react/`}>Back to home</Link>
                    <section> 
                        <div className='price-detail'>
                            <b className='price'>{price} ETH</b><br />
                            <img src={ethlogo} alt="eth-logo" style={{ width: '60px', height: '50px' }} /><br />
                        </div>
                        <div className='info-detail'>
                            <a href={scanCollection}>Contract {category}</a><br />
                            <a href={NFTcollection}>View history of {name}</a><br />
                        </div>
                        <div style={{ display:'flex',gap:'1rem',color:'white',fontSize:'1.1rem', marginBottom: '1%'}}> 
                            <p>👁️ 42 view</p>
                            <p>♡ 1 favorite</p>
                        </div>
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                        <div className='price-history'>
                            <button className='btn-price-history' onClick={toggleImagen} >Price history 🡳</button>
                            {mostrarImagen && (
                                <img className='img-price-history' src={pricehistory} alt="" />
                            )}
                        </div>
                        <p style={{ color:'grey',marginTop:'2rem' , marginBottom:'4rem'}}>{category} is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.</p>
                    </section> 
                </div>
            </article>
            </div>
       
    )
}

export default ItemDetail