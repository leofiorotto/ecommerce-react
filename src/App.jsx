import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {



  return (
    <>
    <CartProvider>
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"WELCOME"}/> }/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'PRODUCTS BY CATEGORY'}/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>Error 404 Not Found</h1>} />
            </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App