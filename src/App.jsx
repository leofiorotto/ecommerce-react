import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/ecommerce-react/' element={<ItemListContainer greeting={"WELCOME"}/> }/>
          <Route path='/ecommerce-react/category/:categoryId' element={<ItemListContainer greeting={'PRODUCTS BY CATEGORY'}/>} />
          <Route path='/ecommerce-react/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App