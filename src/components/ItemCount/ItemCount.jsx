import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './ItemCount.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [counter, setCounter] = useState(0);

  const MySwal = withReactContent(Swal);

  const increase = () => {
    setCounter(count => count + 1);
    toast("Unidad agregada", {
      className:'toastAdd'
    })
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
      toast("Unidad eliminada", {
        className: 'toastRemove'
      })
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

  return (
    <div>
      <div className='controls'>
        <button onClick={increase} className='btnAdd'>
          +
        </button>
        <span>{counter}</span>
        <button onClick={decrease} className='btnRemove'>
          -
        </button>
        <ToastContainer autoClose={1000}/>
        <button className='tittleAdd' onClick={AlertAddtoCart}>
          Agregar
        </button>
      </div>
    </div>
  );
}
