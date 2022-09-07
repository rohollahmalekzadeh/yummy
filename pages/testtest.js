import React, {useState, useEffect, useRef} from 'react'

function Example() {
  const [count, setCount] = useState(0)
  const latestCount = useRef(count)

  useEffect(() => {
    // Set the mutable latest value
    latestCount.current = count
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`You clicked ${count} times`)
    }, 3000)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
