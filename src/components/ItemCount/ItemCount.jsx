import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './ItemCount.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function App() {
  const [counter, setCounter] = useState(0);
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
  };

  // const IrAlCarrito = () => {
  //   // Agrega aquí la lógica para ir al carrito
  // };

  return (
    <div>
      {mostrarCarrito ? (
        <Link to='/ecommerce-react/cart' style={{background:'white', color:'black', padding:'1rem', borderRadius:'1rem'}} >Ir al carrito</Link>
      ) : (
        <div className='controls'>
          <button onClick={increase} className='btnAdd'>+</button>
          <span className='counter'>{counter}</span>
          <button onClick={decrease} className='btnRemove'>-</button>
          <ToastContainer autoClose={1000}/>
          <button className='tittleAdd' onClick={ClickBuy}>Buy now</button>
        </div>
      )}
    </div>
  );
}
