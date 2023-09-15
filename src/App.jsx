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
          <Route path='/Entrega1-React-Fiorotto/' element={<ItemListContainer greeting={'Listado de todos los NFT`s'}/> }/>
          <Route path='/Entrega1-React-Fiorotto/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>} />
          <Route path='/Entrega1-React-Fiorotto/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App