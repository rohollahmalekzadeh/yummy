import React from 'react'
import {MdOutlineShoppingBag} from 'react-icons/md'
import Link from 'next/link'

import {useShoppingCart} from 'contexts/ShoppingCartContext'

const ShoppingCart = () => {
  const {cartQuantity} = useShoppingCart()

  return (
    <div className="relative flex justify-center items-center">
      <Link href="/shopping-cart">
        <a className="relative">
          <MdOutlineShoppingBag className="h-12 w-12" />
          <span className="absolute top-2/3 right-1/2 translate-x-1/2 -translate-y-2/4 text-sm z-10">
            {cartQuantity}
          </span>
        </a>
      </Link>
    </div>
  )
}

export default ShoppingCart
