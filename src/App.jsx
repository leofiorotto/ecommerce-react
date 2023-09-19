import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {



  return (
    <>
    <CartProvider>
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/ecommerce-react/' element={<ItemListContainer greeting={"WELCOME"}/> }/>
              <Route path='/ecommerce-react/category/:categoryId' element={<ItemListContainer greeting={'PRODUCTS BY CATEGORY'}/>} />
              <Route path='/ecommerce-react/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/ecommerce-react/cart' element={<Cart />} />
              <Route path='*' element={<h1>Error 404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App