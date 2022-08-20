import React from 'react'
import {
  useBookmarkDataCart,
  useSBookmarkApiCart,
} from 'src/contexts/BookmarkCartContext'
import {BsBookmarkHeart, BsBookmarkHeartFill} from 'react-icons/bs'
import {CartItem} from 'types/data'

type BookmarkProps = {
  bookmarkItem: CartItem
}
const Bookmark: React.FC<BookmarkProps> = ({bookmarkItem}) => {
  const {bookmarkItems} = useBookmarkDataCart()
  const {addToBookmark} = useSBookmarkApiCart()

  const existingBookItem = bookmarkItems.find(
    (item) => item.label === bookmarkItem.label && bookmarkItem,
  )

  return (
    <div
      className="cursor-pointer my-auto mr-1 text-2xl bg-white py-1 rounded-lg "
      onClick={(e) => {
        e.stopPropagation()
        addToBookmark(bookmarkItem)
      }}
    >
      {existingBookItem ? (
        <BsBookmarkHeartFill color="red" />
      ) : (
        <BsBookmarkHeart color="black" />
      )}
    </div>
  )
}

export default Bookmark
