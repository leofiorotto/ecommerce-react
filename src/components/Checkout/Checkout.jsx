import React, { useState, useEffect } from 'react';
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Form from '../Form/Form';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'
import Footer from '../Footer/Footer';


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [orderedItems, setOrderedItems] = useState([]);


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

      setName(name)
      setLastname(lastname)
      setPhone(phone)
      setEmail(email)

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
        setOrderedItems(cart);
        clearCart();
        setOrderId(id);      
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
    return  (
      <>    
        <h1>Generating your order</h1>
        <span className="loader"></span>
      </>

    )

  }  
  if (orderId) {
    return (
      <>
      <h1>Details of your purchase</h1>
      <h2 className='orderid'>Your order id is: <br /> <b>{orderId}</b></h2>
      <div className='container-checkpoint'>
        <div className='final-form'>
          <h2 className='your-data'>Your data:</h2>
          <p>Name: {name}</p>
          <p>Lastname: {lastname}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
        </div>
        <div className='final-cart'>
          <h2>Purchased products:</h2>
          {orderedItems.map(item => (
            <div className='final-detail-product' key={item.id}>
              <img src={item.img} alt="img-prod" />
              <div>
                <p>Product: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>  
            </div>
          ))}
        </div>
      </div>
        <h1>Thanks for your purchase</h1>
        <Footer />
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
