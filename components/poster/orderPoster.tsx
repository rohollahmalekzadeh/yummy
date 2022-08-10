import React, {FC, ReactNode} from 'react'
import Image from 'next/image'
import {Button, SingleStar, Bookmark, Price} from 'components'
import {MdOutlineFoodBank} from 'react-icons/md'
import {motion} from 'framer-motion'

type OrderPosterProps = {
  label: string
  image: string
  price: number
  off?: number
}

const OrderPoster: FC<OrderPosterProps> = ({...item}) => {
  const {image, label, price, off} = item

  return (
    <motion.div
      whileHover={{
        translateY: -5,
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      className="w-max h-[310px] flex flex-col bg-white rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-amber-800"
      onClick={() => {
        console.log('first')
      }}
    >
      <Image
        src={image}
        width={180}
        height={200}
        alt={label}
        className="rounded-xl"
      />
      <div className="flex justify-between p-2 pb-0 ny-auto">
        <div className="w-[240px] p-1 pt-0 text-base">
          {label && label.length < 23 ? label : `${label.slice(0, 24)}...`}
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
    </motion.div>
  )
}

export default OrderPoster