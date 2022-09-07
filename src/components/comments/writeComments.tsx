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

import Button from 'src/components/ui/button'
import TextArea from 'src/components/ui/textArea'
import Form from '../ui/form'

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
        rate: rating,
      },
      'foods',
      label,
      'comments',
    )
  }

  return (
    <Form onSubmit={sendComment}>
      <TextArea
        placeholder="You'r thought"
        aria-label="You'r thought"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex flex-col items-end p-3 gap-3">
        <FiveStart rating={rating} setRatingValue={setRatingValue} />
        <Button type="submit" className="w-52">
          Send comment
        </Button>
      </div>
    </Form>
  )
}

export default WriteComments
