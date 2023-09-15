import cart from '../../assets/cart.png'

const CartWidget = () => {
  return (
    <div style={{ display:'flex', gap:'1rem' }}>
        <h2 style={{ fontSize:'1.6rem', color:'white'}}>0</h2>
        <img src={cart} className='cartIcon' alt='logo-widget' style={{ width: '50px', marginRight: '1rem', height:'50px', padding:'1rem', paddingLeft:'0', cursor:'pointer' }}/>
    </div>
  )
}

export default CartWidget