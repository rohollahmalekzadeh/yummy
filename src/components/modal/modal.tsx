import Image from 'next/image'
import React, {FC, useRef} from 'react'

import SingleStar from 'src/components/star/singleStar'
import AddToCartButton from '../addToCartButton/addToCartButton'
import Price from 'src/components/price/price'

import useOnClickOutside from 'src/utils/hooks/useOnClickOutside'
import Comments from '../comments/comments'
import WriteComments from '../comments/writeComments'

type ModalProps = {
  label: string
  image: string
  price: number
  off?: number
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal: FC<ModalProps> = ({setModalIsOpen, ...item}) => {
  const {label, image, price, off = 0} = item
  const modalRef = useRef<HTMLDivElement>(null)

  const handleModalClose = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation()
    setModalIsOpen(false)
  }

  useOnClickOutside(modalRef, () => {
    handleModalClose()
  })

  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div
        className=" h-5/6 w-2/3 md:w-[700px] border-4 rounded-lg border-white bg-orange-100 overflow-y-auto overflow-x-hidden"
        ref={modalRef}
      >
        <div className="flex flex-col mb-10">
          <div className=""></div>
          <button
            className="p-2 cursor-pointer w-8 self-end"
            onClick={handleModalClose}
          >
            &#10005;
          </button>
          <div className="flex flex-col md:flex-row gap-10 p-1 md:px-3 mt-2">
            <Image
              src={image}
              alt="product"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="flex flex-col md:justify-between md:w-6/12 md:h-[300px] md:py-3">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-lg ">{label}</div>
                  <SingleStar />
                </div>
                <div className="text-sm font-thin">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, alias sit ducimus suscipit natus maiores adipisci
                  quam deserunt dignissimos labore! Cupiditate quia consectetur.
                </div>
              </div>
              <div className="mt-4  w-11/12 p-1 text-md  flex items-center justify-between">
                <AddToCartButton item={item} />
                <Price price={price} off={off}></Price>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-5">
          <WriteComments label={label} />
        </div>

        <div className="">
          <h3 className="mb-4 text-xl px-4 pt-4  ">Users thought:</h3>
          <Comments
            date="date"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptate atque corporis officia eaque quis, voluptatem eveniet
            est libero debitis accusamus sunt mollitia dolor doloremque fuga
            facere tempora odit non."
            name="rohol"
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
