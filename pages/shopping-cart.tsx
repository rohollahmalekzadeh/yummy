import React from 'react'

const ShoppingCart = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <table className="w-fit border-collapse  text-lg gap-1  ">
        <thead className="border-b-2 border-b-black ">
          <tr>
            <th className="w-2 p-2 text-base font-medium tracking-wide text-center">
              #
            </th>
            <th className="p-2 w-40 text-base font-medium tracking-wide text-center">
              Name
            </th>
            <th className="p-2 w-24 text-base font-medium tracking-wide text-center">
              total Price
            </th>
            <th className="p-2 w-20 text-base font-medium tracking-wide text-center">
              Number
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
          <tr className="border-b-2 border-b-black">
            <td className="p-2 text-sm text-center w-2">1</td>
            <td className="p-2 text-sm text-center ">salad dsfs sdfsdff sd</td>
            <td className="p-2 text-sm text-center ">199$</td>
            <td className="p-2 text-sm text-center ">3</td>
            <td className="p-2 text-sm text-center ">
              <span className="p-3">&#10094;</span>
              <span>3</span>
              <span className="p-3">&#10095;</span>
            </td>
            <td className="p-2 text-sm text-center ">&#10005;</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default ShoppingCart
