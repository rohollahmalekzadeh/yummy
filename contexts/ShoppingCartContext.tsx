import {createContext, useContext, useState, ReactNode} from 'react'
import {useLocalStorage} from 'hooks/useLocalStorage'
import {CartItem} from 'types/data'

type ShoppingCartProviderProps = {
  children: ReactNode
}

//*I'm using label except for id because food api haven't id
type ShoppingCartContextType = {
  getItemQuantity: (labe: string) => number
  increaseCartQuantity: (cartItem: CartItem) => void
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
  //! there is a bug
  //! Hydration failed because the initial UI does not match what was rendered on the server.
  //!There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
  // const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
  //   'shopping-cart',
  //   [],
  // )

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity =
    typeof window !== 'undefined'
      ? cartItems.reduce(
          (quantity, item) => (item?.quantity ? item?.quantity + quantity : 0),
          0,
        )
      : 0

  const getItemQuantity = (label: string) =>
    cartItems.find((item) => item.label === label)?.quantity || 0

  const increaseCartQuantity = (cartItem: CartItem) => {
    const existingItem = cartItems.find((item) => item.label === cartItem.label)

    if (!existingItem) {
      return setCartItems([...cartItems, {...cartItem, quantity: 1}])
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.label === cartItem.label
          ? {...item, quantity: item?.quantity && item?.quantity + 1}
          : item,
      ),
    )
  }

  const decreaseCartQuantity = (label: string) => {
    const existingItem = cartItems.find((item) => item.label === label)

    if (existingItem?.quantity === 1) return removeFromCart(label)

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.label === label
          ? {...item, quantity: item?.quantity && item?.quantity - 1}
          : item,
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
