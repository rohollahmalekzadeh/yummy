import React, {FC, ReactNode, useState} from 'react'
import Image from 'next/image'
import {Button, SingleStar, Bookmark, Price} from 'components'
import {MdOutlineFoodBank} from 'react-icons/md'
import {motion} from 'framer-motion'
import {useShoppingCart} from 'contexts/ShoppingCartContext'

type OrderPosterProps = {
  label: string
  image: string
  price: number
  off?: number
}

const Modal = React.lazy(() => import('../modal/modal'))
const Portal = React.lazy(() => import('../portal/portal'))

const OrderPoster: FC<OrderPosterProps> = ({...item}) => {
  const [portalIsOpen, setPortalIsOpen] = useState(false)
  const {decreaseCartQuantity, increaseCartQuantity, cartItems} =
    useShoppingCart()
  const {image, label, price, off} = item

  const existingItem = cartItems.find((item) => item.label === label)

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
      onClick={() => setPortalIsOpen(true)}
    >
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
        <Bookmark />
      </div>
      <div className="flex justify-around p-1">
        <div className="w-full ">
          {existingItem ? (
            <span className="flex justify-center gap-6">
              <Button
                onClick={() => increaseCartQuantity(existingItem)}
                className="w-7 h-7"
              >
                +
              </Button>
              <span className="text-2xl">{existingItem.quantity}</span>
              <Button
                onClick={() => decreaseCartQuantity(label)}
                className="w-7 h-7"
              >
                -
              </Button>
            </span>
          ) : (
            <Button
              className="w-11/12 my-auto mb-2"
              onClick={() => increaseCartQuantity(item)}
            >
              <MdOutlineFoodBank className="my-auto mr-1 text-2xl" /> Add to
              cart
            </Button>
          )}

          <SingleStar label={label} />
        </div>
        {/*
        //*2 levels props drilling should be ok  
        //! Do not change it like compound component or same patterns . let it be clean!
         */}
        <Price price={price} off={off} />
      </div>
      {/* 
        //TODO: find loading fallback
      */}
      {portalIsOpen && (
        <React.Suspense fallback="loading...">
          <Portal id="modal-root">
            <Modal {...item} />
          </Portal>
        </React.Suspense>
      )}
    </motion.div>
  )
}

export default OrderPoster
