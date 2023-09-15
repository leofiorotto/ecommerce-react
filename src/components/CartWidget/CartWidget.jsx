import cart from '../../assets/cart.png'

const CartWidget = () => {
  return (
    <div style={{ display:'flex', gap:'1rem' }}>
        <h2>0</h2>
        <img src={cart} className='cartIcon' alt='logo-widget' style={{ width: '70px', marginRight: '1rem', height:'70px' }}/>
    </div>
  )
}

export default CartWidget