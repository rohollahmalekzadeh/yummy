import React from 'react'
import {useShoppingCart} from 'contexts/ShoppingCartContext'
import Head from 'next/head'
import Image from 'next/image'

const ShoppingCart = () => {
  const {
    cartItems,
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShoppingCart()
  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <link rel="icon" href="/assets/logo2.jpg" />
      </Head>
      <main className="flex justify-center items-center flex-col">
        <table className="w-fit border-collapse  text-lg gap-1  ">
          <thead className="border-b-2 border-b-black ">
            <tr>
              <th className="w-2 p-2 text-base font-medium tracking-wide text-center">
                #
              </th>
              <th className="w-2 p-2 text-base font-medium tracking-wide text-center">
                Image
              </th>
              <th className="p-2 w-68 text-base font-medium tracking-wide text-center">
                Name
              </th>
              <th className="p-2 w-24 text-base font-medium tracking-wide text-center">
                total Price
              </th>
              <th className="p-2 w-32 text-base font-medium tracking-wide text-center">
                add or remove
              </th>
              <th className="p-2 text-base font-medium tracking-wide text-center">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={item.label} className="border-b-2 border-b-black">
                <td className="p-2 text-sm text-center w-2">{idx + 1}</td>
                <td className="p-2 text-sm text-center w-2">
                  <Image
                    alt="product image"
                    width={80}
                    height={80}
                    src={item.image}
                  />
                </td>
                <td className="p-2 text-sm text-center ">{item.label}</td>
                <td className="p-2 text-sm text-center ">
                  {getItemQuantity(item.label) * item.price}$
                </td>
                <td className="p-2 text-sm text-center  ">
                  <span
                    onClick={() => decreaseCartQuantity(item.label)}
                    className="p-3 cursor-pointer text-lg"
                  >
                    &#10094;
                  </span>
                  <span>{getItemQuantity(item.label)}</span>
                  <span
                    onClick={() => increaseCartQuantity(item)}
                    className="p-3 cursor-pointer text-lg"
                  >
                    &#10095;
                  </span>
                </td>
                <td className="p-2 text-sm text-center ">
                  <span
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item.label)}
                  >
                    &#10005;
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default ShoppingCart
