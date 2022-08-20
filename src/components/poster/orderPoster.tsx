import React, {FC, useState} from 'react'
import Image from 'next/image'
import {Button, SingleStar, Bookmark, Price} from 'src/components'
import {MdOutlineFoodBank} from 'react-icons/md'
import {motion} from 'framer-motion'
import {
  useShoppingApiCart,
  useShoppingDataCart,
} from 'src/contexts/ShoppingCartContext'

type OrderPosterProps = {
  label: string
  image: string
  price: number
  off?: number
}

const Modal = React.lazy(() => import('../modal/modal'))
const Portal = React.lazy(() => import('../portal/portal'))

const OrderPoster: FC<OrderPosterProps> = ({...item}) => {
  const {image, label, price, off} = item
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const {decreaseCartQuantity, increaseCartQuantity} = useShoppingApiCart()
  const {cartItems} = useShoppingDataCart()

  const currentItem = cartItems?.find((item) => item.label === label)

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
      <div className="absolute z-10 p-2  flex justify-between w-full">
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
        {/* <Bookmark /> */}
        {/* <Price price={price} off={off} /> */}
      </div>
      <div className="flex justify-around items-center p-1 w-72 h-fit ">
        <div className="w-full">
          {currentItem ? (
            <span className="flex justify-center gap-6">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  increaseCartQuantity(currentItem)
                }}
                className="w-7 h-7"
              >
                +
              </Button>
              <span className="text-2xl">{currentItem.quantity}</span>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  decreaseCartQuantity(label)
                }}
                className="w-7 h-7"
              >
                -
              </Button>
            </span>
          ) : (
            <Button
              className="w-10/12"
              onClick={(e) => {
                e.stopPropagation()
                increaseCartQuantity(item)
              }}
            >
              <MdOutlineFoodBank className="mr-1 text-xl" /> Add to cart
            </Button>
          )}
        </div>
        {/*
        //*2 levels props drilling should be ok  
        //! Do not change it something like compound component or other patterns . let it be clean!
         */}
        <Price price={price} off={off} />
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
