import '../styles/globals.css'
import React, {useEffect, useState} from 'react'
import { cloneDeep, isEqual } from 'lodash'


function CustomApp({ Component, pageProps }) {
 const [cart, setCart]= useState([])

 const handleAddItemToCart = (item) =>{
  setCart([...cart, item])
 }

 const handRemoveItemFromCart = (item) =>{
  let cartCopy = cloneDeep(cart);
  const removedItemIdx = cartCopy.indexOf(x => isEqual(x, item))
  cartCopy.splice(removedItemIdx, 1)

  setCart(cartCopy)
 }

  return (
    <Component 
      {...pageProps} 
      handRemoveItemFromCart={handRemoveItemFromCart}
      handleAddItemToCart={handleAddItemToCart}
      cart={cart}
    />
  )
}

export default CustomApp
