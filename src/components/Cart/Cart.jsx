import { useCart } from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';
import ethLogo from '../../assets/eth-logo.png';
import Footer from '../footer/footer';

const Cart = () => {
    const { cart, removeItem, total } = useCart();

    if (cart.length === 0) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color:'white', fontFamily: 'Arvo'}}> Your cart is empty</h1>
            </div>
        );
    }

    return (
        <>
            <h1 style={{color:'white', fontFamily: 'Arvo'}}> Your cart</h1>
            <section>
                { cart.map(prod => {
                    return (
                        <div className='container-cart' key={prod.id} >
                            <div className='product-cart'>
                                <img className='img-cart' src={prod.img} alt={prod.name} />
                                <div>
                                    <h3 className='tittle-cart'>{prod.name}</h3>
                                    <div className='container-price'>
                                        <p className='price-cart'>{prod.price}</p>
                                        <img className='img-eth-cart' src={ethLogo} alt="Price" />
                                        
                                    </div>
                                </div>
                                <p className='units'>{prod.quantity} Units</p>
                            </div>
                            <button className='btn-remove' onClick={() => removeItem(prod.id)}>Remove🗑️</button>
                        </div>
                    );
                })}
            </section>
            <div className='section-bottom'>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'1rem'}}>
                    <h2 className='total'>Total: {total}</h2>
                    <img className='img-eth-cart' src={ethLogo} alt="" />
                </div>
                <Link className='btn-checkout' to='/checkout'>Checkout</Link>   

            </div>

            <Footer />
        </>
    );
}

export default Cart;
