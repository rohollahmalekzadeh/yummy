import React, {useState} from 'react'

const WriteComments = () => {
  const [comment, setComment] = useState('')

  return (
    <div>
      <form>
        <textarea
          className="w-full h-40 overflow-auto resize-none p-3 focus:none rounded-lg focus:outline-orange-400 focus:outline-double "
          placeholder="You'r thought "
          aria-label="You'r thought "
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  )
}

export default WriteComments
