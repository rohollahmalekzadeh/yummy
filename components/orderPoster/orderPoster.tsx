import React, {FC} from 'react'
import Image from 'next/image'
import {Button, SingleStar, Bookmark, Price} from 'components'
import {MdOutlineFoodBank} from 'react-icons/md'

type OrderPosterProps = {
  label?: string
  image: string
  price?: number
  score?: number
  off?: number
}

const OrderPoster: FC<OrderPosterProps> = ({
  image,
  label,
  price = 200,
  score = 0,
  off = 20,
}) => {
  return (
    <div
      className="w-max h-[400px] flex flex-col bg-white rounded-lg cursor-pointer"
      onClick={() => {
        console.log('first')
      }}
    >
      <Image
        src={image}
        width={220}
        height={240}
        alt={label}
        className="rounded-xl"
      />
      <div className="flex justify-between p-2 pb-0 ny-auto">
        <div className="w-[240px] p-1 pt-0 text-base">{label}</div>
        <Bookmark />
      </div>
      <div className="flex justify-around p-1">
        <div className="w-full ">
          <Button className="w-11/12 my-auto  mb-2 ">
            <MdOutlineFoodBank className="my-auto mr-1 text-2xl" /> Add to cart
          </Button>
          <SingleStar score={score} />
        </div>
        <Price price={price} off={off} />
      </div>
    </div>
  )
}

export default OrderPoster
