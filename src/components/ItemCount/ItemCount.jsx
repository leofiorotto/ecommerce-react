import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './ItemCount.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const MySwal = withReactContent(Swal);

  const increase = () => {
    setCounter(count => count + 1);
    toast("Unidad agregada", { className:'toastAdd' });
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
      toast("Unidad eliminada", { className: 'toastRemove' });
    }
  };

  const AlertAddtoCart = () => {
    MySwal.fire({
      title: <strong>Agregado al carrito</strong>,
      html: <i>Agregaste {counter} productos</i>,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/7518/7518748.png',
      imageHeight: 100,
    });
  };

  const ClickBuy = () => {
    AlertAddtoCart();
    setMostrarCarrito(true);
    onAdd(counter)
  };

  return (
    <div>
      {mostrarCarrito ? (
        <Link to='/ecommerce-react/cart' style={{background:'white', color:'black', padding:'1rem', borderRadius:'1rem', position:'relative', left:'43%'}} >Go to cart</Link>
      ) : (
        <div className='controls'>
          <button onClick={increase} className='btnAdd'>+</button>
          <span className='counter'>{counter}</span>
          <button onClick={decrease} className='btnRemove'>-</button>
          <ToastContainer autoClose={1000}/>
          <button className='tittleAdd' onClick={ClickBuy}>Add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ItemCount