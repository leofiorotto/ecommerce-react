import { useState, createContext, useContext } from 'react'


const CartContext = createContext('')

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  
  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    } else {
      console.log('hay que actualizar la cantidad')
    }
  } 
  
  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const getTotalQuantity = () => {
    let total = 0

    cart.forEach (prod => {
      total += prod.quantity
    })

    return total
  }

const total = getTotalQuantity()

return (
  <CartContext.Provider value={{cart, addItem, total}}>
    {children}
  </CartContext.Provider>
)

}


export const useCart = () => {
  return (
    useContext(CartContext)
  )
}