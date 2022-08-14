import {createContext, useContext, useState, ReactNode} from 'react'
import {useLocalStorage} from 'hooks/useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

//*I'm using label except for id because food api haven't id
type CartItem = {
  label: string
  quantity: number
}

type ShoppingCartContextType = {
  getItemQuantity: (labe: string) => number
  increaseCartQuantity: (label: string) => void
  decreaseCartQuantity: (label: string) => void
  removeFromCart: (label: string) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCart = () => {
  if (!useContext(ShoppingCartContext))
    throw 'wrap component with ShoppingCartContextProvider '
  return useContext(ShoppingCartContext)
}

//TODO refactor
export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    [],
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  const getItemQuantity = (label: string) =>
    cartItems.find((item) => item.label === label)?.quantity || 0

  const increaseCartQuantity = (label: string) => {
    const existingItem = cartItems.find((item) => item.label === label)

    if (!existingItem) {
      return setCartItems([...cartItems, {label, quantity: 1}])
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.label === label ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }
  const decreaseCartQuantity = (label: string) => {
    const existingItem = cartItems.find((item) => item.label === label)

    if (existingItem?.quantity === 1) return removeFromCart(label)

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.label === label ? {...item, quantity: item.quantity - 1} : item,
      ),
    )
  }

  const removeFromCart = (label: string) =>
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.label !== label),
    )

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
