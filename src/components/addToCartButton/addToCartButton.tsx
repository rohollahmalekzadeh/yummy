import React, {FC} from 'react'
import Button from '../button/button'
import {
  useShoppingApiCart,
  useShoppingDataCart,
} from 'src/contexts/ShoppingCartContext'
import {MdOutlineFoodBank} from 'react-icons/md'

const AddToCartButton: FC<any> = ({item}) => {
  const {decreaseCartQuantity, increaseCartQuantity} = useShoppingApiCart()
  const {cartItems} = useShoppingDataCart()

  const currentItem = cartItems?.find((iteem) => iteem.label === item.label)

  return (
    <div className="w-64">
      {currentItem ? (
        <div className="flex items-center gap-6">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              decreaseCartQuantity(item.label)
            }}
            className="w-12 h-7"
          >
            -
          </Button>
          <span className="text-2xl">{currentItem.quantity}</span>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              increaseCartQuantity(currentItem)
            }}
            className="w-12 h-7  "
          >
            +
          </Button>
        </div>
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
  )
}

export default AddToCartButton
