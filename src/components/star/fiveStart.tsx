import React, {useState, FC} from 'react'
import {BsStarFill} from 'react-icons/bs'

type FiveStartProps = {
  rating: number
  setRatingValue: React.Dispatch<React.SetStateAction<number>>
}
const FiveStart: FC<FiveStartProps> = ({rating, setRatingValue}) => {
  const [hover, setHover] = useState(0)

  return (
    <div className="flex justify-center items-center ">
      {[...Array(5)].map((star, idx) => {
        const ratingValue = idx + 1
        return (
          <label key={idx}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setRatingValue(ratingValue)}
            />
            <BsStarFill
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e5'}
              size={(ratingValue + 5) * 4}
              className="p-[1px]"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
    </div>
  )
}

export default FiveStart
