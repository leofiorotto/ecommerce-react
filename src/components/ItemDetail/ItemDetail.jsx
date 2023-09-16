import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import ethlogo from '../../assets/eth-logo.png'
import pricehistory from '../../assets/price-history.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, name, category, img, price, stock, scanCollection, NFTcollection}) => {
    const [addCounter, setAddCounter] = useState (0);
    
    const handleOnAdd = (count) => {
        setAddCounter(count)
    }

    return (
        <>
            <h2 className='tittle-detail'>{name}</h2>
            <article className='ItemDetailContainer'>
                <header>
                    <img className='img-detail' src={img} alt={name}/>
                </header>
                <div className='DescriptionDetail'>
                    <section>
                        <div className='price-detail'>
                            <b className='price'>Price: {price} ETH</b><br />
                            <img src={ethlogo} alt="eth-logo" style={{ width: '60px', height: '50px' }} /><br />
                        </div>
                        <div className='info-detail'>
                            <a href={scanCollection}>Contract {name}</a><br />
                            <a href={NFTcollection}>View history of {name}</a><br />
                        </div>
                        <div className='price-history'>
                            <h3>Price history</h3>
                            <img className='img-price-history' src={pricehistory} alt="" />
                        </div>
                        <p style={{ color:'white', margin:'4rem'}}>{name} is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.</p>
                    </section> 

                             <footer>
                                {
                                    addCounter === 0 ? (
                                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                                    ) : (
                                        <Link to='/cart'>Finalizar compra</Link>
                                    )
                                }
                            </footer>

                </div>

            </article>
        </>
    )
}

export default ItemDetail