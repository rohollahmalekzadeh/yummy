import React, {ReactNode, useMemo, useState} from 'react'
import {useLocalStorage} from 'src/utils/hooks/useLocalStorage'
import {
  BookmarkAPIContext,
  BookmarkDataContext,
} from 'src/contexts/BookmarkCartContext'
import {CartItem} from 'types/data'

type BookmarkContext = {
  children: ReactNode
}

export const BookmarkProvider = ({children}: BookmarkContext) => {
  //! there is a bug
  //! Hydration failed because the initial UI does not match what was rendered on the server.
  //!There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
  // const [bookmarkItems, setBookmarkItems] = useLocalStorage<CartItem[]>(
  //   'bookmark',
  //   [],
  // )
  const [bookmarkItems, setBookmarkItems] = useState<CartItem[]>([])

  const api = useMemo(() => {
    const addToBookmark = (bookmarkItem: CartItem) => {
      const existingItem = bookmarkItems.find(
        (item) => item.label === bookmarkItem.label,
      )

      if (!existingItem)
        return setBookmarkItems((bookmarkItems) => [
          ...bookmarkItems,
          bookmarkItem,
        ])

      setBookmarkItems(
        bookmarkItems.filter((item) => item.label !== bookmarkItem.label),
      )
    }
    const removeFromBookmark = () => {}
    const bookmarkQuantity = bookmarkItems.length

    return {addToBookmark, removeFromBookmark, bookmarkQuantity}
  }, [bookmarkItems])

  return (
    <BookmarkAPIContext.Provider value={api}>
      <BookmarkDataContext.Provider value={{bookmarkItems}}>
        {children}
      </BookmarkDataContext.Provider>
    </BookmarkAPIContext.Provider>
  )
}
