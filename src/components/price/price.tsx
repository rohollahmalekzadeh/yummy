import React, {FC} from 'react'

type PriceProps = {
  price: number
  off?: number
}

const Price: FC<PriceProps> = ({price, off = 0}) => {
  const realPrice = off > 0 ? price - (price * off) / 100 : price

  if (!price) return <span>not available</span>

  return (
    <span className="relative flex flex-col justify-start items-center w-24">
      <span className="text-2xl">{realPrice}$</span>
      {off > 0 && (
        <span className="relative text-xs">
          <span
            className=" ml-4 text-slate-400 
            before:content('') before:absolute before:h-[1px] before:left-4 before:w-6 before:z-10 before:bg-red-400 before:bottom-[23px]
            "
          >
            {price}$
          </span>
          <div className="">{off}% OFF</div>
        </span>
      )}
    </span>
  )
}

export default Price

// before:my-3
// before:absolute before:content-[''] before:w-10 before:z-10  before:h-[2px] before:bg-red-700
