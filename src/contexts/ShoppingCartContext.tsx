import {createContext, useContext} from 'react'

import {CartItem} from 'types/data'

//*I'm using label except id because food api haven't id
type State = {cartItems: CartItem[]}
type API = {
  getItemQuantity: (labe: string) => number
  increaseCartQuantity: (cartItem: CartItem) => void
  decreaseCartQuantity: (label: string) => void
  removeFromCart: (label: string) => void
  cartQuantity: number
}

export const ShoppingCartDataContext = createContext({} as State)
export const ShoppingCartAPIContext = createContext({} as API)

export const useShoppingApiCart = () => {
  if (!useContext(ShoppingCartAPIContext))
    throw 'wrap component with ShoppingCartProvider.Provider '
  return useContext(ShoppingCartAPIContext)
}

export const useShoppingDataCart = () => {
  if (!useContext(ShoppingCartDataContext))
    throw 'wrap component with ShoppingCartProvider.Provider '
  return useContext(ShoppingCartDataContext)
}
