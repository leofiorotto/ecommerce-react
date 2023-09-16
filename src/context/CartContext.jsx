import { useState, createContext, useContext } from 'react'

const CartContext = createContext('Este valor lo ven aquellos que esten fuera del provider')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        console.log('hay que actualizar la cantidad')
        // const updatedCart = cart.map()
        // setCart(updatedCart)
      }
    } 
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let total = 0

      cart.forEach(prod => {
          total += prod.quantity * prod.price
      })

      return total
    }

    const total = getTotal()

    const removeItem = (id) => {
        setCart(prev => prev.filter(prod => prod.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, clearCart, total }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}