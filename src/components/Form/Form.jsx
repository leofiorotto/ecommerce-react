import './Form.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

const Form = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, lastname, phone, email };
    onConfirm(userData);
  }

  return (
    <>
      <div className='wrapper-checkout'>
        <h1 className='tittle-form'>Complete with your details</h1>
        <p className='description-form'>Make sure you place the fields correctly</p>

        <form className='form' onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Name' value={name} onChange={({ target }) => setName(target.value)} required />
          <input type="text" placeholder='Last name' name="lastname" value={lastname} onChange={({ target }) => setLastname(target.value)} required />
          <input type="tel" placeholder='Phone' name="phone" value={phone} onChange={({ target }) => setPhone(target.value)} required />
          <input type="email" placeholder='Email' name="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
          <div>
            <button className='btn-submit' type="submit">Submit and checkout</button>
          </div>
        </form>

        <Link to='/ecommerce-react/cart'>Back to cart</Link>
      </div>
      <Footer />
    </>
  )
}

export default Form;
