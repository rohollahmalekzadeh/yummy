import React from 'react'
import {BsBookmarkHeart, BsBookmarkHeartFill} from 'react-icons/bs'

type BookmarkProps = {
  bookmarkFavorite?: boolean
}
const Bookmark: React.FC<BookmarkProps> = ({bookmarkFavorite = false}) => {
  const [favorite, setFavorite] = React.useState(bookmarkFavorite)

  return (
    <div
      className="cursor-pointer my-auto mr-1 text-2xl "
      onClick={(e) => {
        e.stopPropagation()
        setFavorite((prev) => !prev)
      }}
    >
      {favorite ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />}
    </div>
  )
}

export default Bookmark
