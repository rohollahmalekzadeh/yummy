import React, {createContext, useContext} from 'react'

import {CartItem} from 'types/data'

//*I'm using label except id because food api haven't id
type State = {bookmarkItems: CartItem[]}
type API = {
  addToBookmark: (cartItem: CartItem) => void
  removeFromBookmark: (label: string) => void
  bookmarkQuantity: number
}

export const BookmarkDataContext = createContext({} as State)
export const BookmarkAPIContext = createContext({} as API)

export const useSBookmarkApiCart = () => {
  if (!useContext(BookmarkAPIContext))
    throw 'wrap component with BookmarkProvider'
  return useContext(BookmarkAPIContext)
}

export const useBookmarkDataCart = () => {
  if (!useContext(BookmarkDataContext))
    throw 'wrap component with BookmarkProvider'
  return useContext(BookmarkDataContext)
}
