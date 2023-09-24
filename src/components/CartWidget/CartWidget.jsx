import cart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './CartWidget.css'


const CartWidget = () => {

const { total } = useCart()
  
  const navigate = useNavigate()

  return (
    <button className='btn-cart' onClick={() => navigate('/cart')}>
         <span className='quantity-cart'>{total}</span>
        <img src={cart} className='icon-cart' alt='logo-widget'/>
    </button>
  )
}

export default CartWidget