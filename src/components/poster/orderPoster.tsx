import React, {FC, ReactElement, useState} from 'react'
import Image from 'next/image'
import SingleStar from 'src/components/star/singleStar'
import Bookmark from 'src/components/bookmark/bookmark'
import {motion} from 'framer-motion'

type OrderPosterProps = {
  label: string
  image: string
  price: number
  off?: number
  priceComponent: ReactElement
  addToCartComponent: ReactElement
}

const Modal = React.lazy(() => import('../modal/modal'))
const Portal = React.lazy(() => import('../portal/portal'))

const OrderPoster: FC<OrderPosterProps> = ({
  priceComponent,
  addToCartComponent,
  ...item
}) => {
  const {image, label, price, off} = item
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <motion.div
      whileHover={{
        translateY: -5,
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      className=" relative w-max h-[310px] flex flex-col bg-white rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-amber-800"
      onClick={() => setModalIsOpen(true)}
    >
      <div className="absolute z-10 p-2 flex justify-between w-full">
        <SingleStar label={label} />
        <Bookmark bookmarkItem={item} />
      </div>
      <Image
        src={image}
        width={180}
        height={200}
        alt={label}
        priority={false}
        className="rounded-xl"
      />
      <div className="flex justify-between p-2 pb-0 ny-auto">
        <div className="w-[240px] p-1 pt-0 text-base">
          {label && label.length < 23 ? label : `${label.slice(0, 24)}...`}
        </div>
      </div>
      <div className="flex justify-around items-start p-1 w-72 h-fit">
        {/* <AddToCartButton item={item} label={label} /> */}
        {/* <Price price={price} off={off} /> */}
        {addToCartComponent}
        {priceComponent}
      </div>
      {/* 
        //TODO: find loading fallback
      */}
      {modalIsOpen && (
        <React.Suspense fallback="loading...">
          <Portal id="modal-root">
            <Modal setModalIsOpen={setModalIsOpen} {...item} />
          </Portal>
        </React.Suspense>
      )}
    </motion.div>
  )
}

export default OrderPoster
