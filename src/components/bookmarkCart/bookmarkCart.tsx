import React from 'react'
import {FaRegBookmark} from 'react-icons/fa'
import Link from 'next/link'

import {useSBookmarkApiCart} from 'src/contexts/BookmarkCartContext'

const BookmarkCart = () => {
  const {bookmarkQuantity} = useSBookmarkApiCart()

  return (
    <div className="relative">
      <Link href="/shopping-cart">
        <a className="relative">
          <FaRegBookmark className="h-8 w-8" />
          <span className="absolute top-3 right-1/2 translate-x-1/2 -translate-y-2/4 text-sm">
            {bookmarkQuantity}
          </span>
        </a>
      </Link>
    </div>
  )
}

export default BookmarkCart
