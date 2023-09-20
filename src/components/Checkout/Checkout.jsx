import './Checkout.css'
import React, { useState } from 'react'
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname:'',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  }

  return (
    <>

        <div className='wrapper-checkout'>
             <h1 className='tittle-form'>Complete with your details</h1>
             <p className='description-form'>Make sure you place the fields correctly</p>        
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
            <input type="text" placeholder='Last name' name="lastname" value={formData.lastname} onChange={handleChange} required />
            <input type="tel" placeholder='Phone' name="phone" value={formData.phone} onChange={handleChange} required />
            <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} required />

            <button className='btn-submit' type="submit">Submit and checkout</button>
            <Link to='/ecommerce-react/cart'>Back to cart</Link>
        </form>
        </div>
        <Footer />
    </>
  )
}

export default Checkout
