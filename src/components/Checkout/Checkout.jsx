import React, { useState } from 'react';
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Form from '../Form/Form';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const createOrder = async ({ name, lastname, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name, lastname, phone, email
        },
        items: cart,
        total: total
      }

      console.log(cart);

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map(prod => prod.id);

      const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids));
      const { docs } = await getDocs(productsRef);

      docs.forEach(doc => {
        const fields = doc.data();
        const stockDb = fields.stock;

        const productAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fields });
        }
      });

      if (outOfStock.length === 0) {
        const orderRef = collection(db, 'orders');
        const { id } = await addDoc(orderRef, objOrder);
        batch.commit();
        clearCart();
        setOrderId(id);
        console.log('el numero de orden es: ' + id);
      } else {
        console.error('Hay productos fuera de stock...');
      }
    } catch (error) {
      console.log('Ocurrio un error al obtener datos: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Se esta generando su orden...</h1>
  }

  if (orderId) {
    return (
        <>
            <h1>El id de su orden es: {orderId}</h1>
            <h3>name: {name}</h3>
        </>
    ); 
}

  return (
    <>
      <Form onConfirm={createOrder} />
    </>
  )
}

export default Checkout;
