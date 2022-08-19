import {async} from '@firebase/util'
import React, {useEffect, useState} from 'react'

const Test = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  useEffect(() => {
    async function fetcher() {
      try {
        const data = await fetch(
          'https://fakestoreapi.com/carts/6',

          {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              userId: 5,
              date: '2020 - 12 - 03',
              products: [
                {productId: 5, quantity: 1},
                {productId: 1, quantity: 5},
              ],
            }),
          },
        )
        console.log(data)
        const json = await data.json()
        console.log(json)
        // setData(data)
        // setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetcher()
  }, [])

  if (loading) return <div>Loading</div>

  return <div>Test</div>
}

export default Test
