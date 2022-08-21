import React, {FormEvent, useState} from 'react'
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import {Button} from 'src/components'
import {db, addComments} from 'src/lib/firebase'
import {useUser} from 'src/contexts/userProvider'

const WriteComments = ({label}: {label: any}) => {
  const [comment, setComment] = useState('')
  const {currentUser} = useUser()

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
        <Button type="submit">Send comment</Button>
      </form>
    </div>
  )
}

export default WriteComments
