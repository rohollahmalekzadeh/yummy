import React, {FormEvent, useState} from 'react'
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import FiveStart from '../star/fiveStart'

import {Button} from 'src/components'
import {addComments} from 'src/lib/firebase'
import {useUser} from 'src/contexts/userProvider'

const WriteComments = ({label}: {label: any}) => {
  const [comment, setComment] = useState('')
  const {currentUser} = useUser()

  const [rating, setRatingValue] = useState(0)

  async function sendComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await addComments(
      {
        comment: comment,
        name: 'rohol',
        date: serverTimestamp(),
      },
      'foods',
      label,
      'comments',
    )
  }

  return (
    <div>
      <form onSubmit={sendComment}>
        <textarea
          className="w-full h-40 overflow-auto resize-none p-3 focus:none rounded-lg focus:outline-orange-400 focus:outline-double "
          placeholder="You'r thought "
          aria-label="You'r thought "
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex flex-col items-end p-3 gap-3">
          <FiveStart rating={rating} setRatingValue={setRatingValue} />
          <Button type="submit">Send comment</Button>
        </div>
      </form>
    </div>
  )
}

export default WriteComments
