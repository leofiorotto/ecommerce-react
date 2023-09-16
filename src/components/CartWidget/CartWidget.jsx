import cart from '../../assets/cart.png'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {

  
  const { totalQuantity } = useCart()
  const navigate = useNavigate()

  return (
    <button style={{ display:'flex', gap:'1rem' }} onClick={() => navigate('/cart')}>
        <img src={cart} className='cartIcon' alt='logo-widget' style={{ width: '50px', marginRight: '1rem', height:'50px', padding:'1rem', paddingLeft:'0', cursor:'pointer' }}/>
        {totalQuantity}
        {console.log(totalQuantity)}
    </button>
  )
}

export default CartWidget