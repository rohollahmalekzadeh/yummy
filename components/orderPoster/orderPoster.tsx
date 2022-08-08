import React, {FC, ReactNode} from 'react'
import Image from 'next/image'
import {Button, SingleStar, Bookmark, Price} from 'components'
import {MdOutlineFoodBank} from 'react-icons/md'

type OrderPosterProps = {
  label: string
  image: string
  price?: number
  off?: number
}

const OrderPoster: FC<OrderPosterProps> = ({
  image,
  label,
  price = 200,
  off = 20,
}) => {
  return (
    <div
      className="w-max h-[370px] flex flex-col bg-white rounded-lg cursor-pointer"
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
        <div className="w-[240px] p-1 pt-0 text-base">
          {label.length < 23 ? label : `${label.slice(0, 24)}...`}
        </div>
        <Bookmark />
      </div>
      <div className="flex justify-around p-1">
        <div className="w-full ">
          <Button className="w-11/12 my-auto  mb-2 ">
            <MdOutlineFoodBank className="my-auto mr-1 text-2xl" /> Add to cart
          </Button>
          <SingleStar label={label} />
        </div>
        {/*
        //*2 levels props drilling should be ok  
        //! Do not change it like compound component or same patterns . let it be clean!
         */}
        <Price price={price} off={off} />
      </div>
    </div>
  )
}

export default OrderPoster
