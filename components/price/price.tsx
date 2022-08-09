import React, {FC} from 'react'

type PriceProps = {
  price: number
  off?: number
}

const Price: FC<PriceProps> = ({price, off = 0}) => {
  const realPrice = off > 0 ? price - (price * off) / 100 : price

  if (!price) return <span>not available</span>

  return (
    <span className="flex flex-col justify-start items-center w-[90px]">
      <span className="text-2xl">{realPrice}$</span>
      {off > 0 && (
        <>
          <span
            className="ml-4 text-slate-400 

            "
          >
            {price}$
          </span>
          <div className="">{off}% OFF</div>
        </>
      )}
    </span>
  )
}

export default Price

// before:my-3
// before:absolute before:content-[''] before:w-10 before:z-10  before:h-[2px] before:bg-red-700
