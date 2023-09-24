import { useCart } from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';
import ethLogo from '../../assets/eth-logo.png';
import Footer from '../Footer/Footer';

const Cart = () => {
    const { cart, removeItem, clearCart, total } = useCart();

    if (cart.length === 0) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color:'white', fontFamily: 'Arvo'}}> Your cart is empty</h1>
            </div>
        );
    }

    let totalPrice = 0;
    for (const prod of cart) {
        totalPrice += prod.price * prod.quantity;
    }

    return (
        <>
            <div style={{display:'flex', justifyContent:'space-around',alignItems:'center', marginLeft:'28%'}}>
                <h1 style={{color:'white', fontFamily: 'Arvo'}}> Your cart</h1>
                <button className='btn-clear' onClick={() => clearCart()}>Clear all</button><br /><br />
            </div>
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
                    <div style={{marginRight:'2rem'}}> 
                        <h2 className='total'>Total units: {total}</h2>
                    </div>
                    <h2 className='total'>Total: {totalPrice}</h2>
                    <img className='img-eth-cart' src={ethLogo} alt="" />
                </div>
                <Link className='btn-checkout' to='/ecommerce-react/checkout'>Go to buy</Link>   

            </div>

            <Footer />
        </>
    );
}

export default Cart;
