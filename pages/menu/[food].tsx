import React, {useState, ChangeEvent} from 'react'
import {GetStaticProps, GetStaticPaths} from 'next'

import Row from 'src/components/ui/row'
import OrderPoster from 'src/components/poster/orderPoster'
import RowsContainer from 'src/components/ui/rowsContainer'
import AddToCartButton from 'src/components/addToCartButton/addToCartButton'
import Price from 'src/components/price/price'
import StickyLayout from 'src/components/ui/stickyLayout'
import DropdownOnClick from 'src/components/ui/dropDownOnClick'

import {getFoodData} from 'src/config-api/food-api/order-list'
import {ORDER} from 'src/link'
import {
  DIET_LIST,
  FOOD_LIST,
  MEAL_LIST,
  DIET_QUERY,
  FOOD_QUERY,
  MEAL_QUERY,
  cuisineType,
} from 'src/config-api/food-api/config'
import CheckboxInput from 'src/components/ui/checkboxInput'

import {CartItems} from 'types/data'
import {useRouter} from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ORDER.map((item) => {
    return {params: {food: Object.values(item).join('')}}
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let data = {} as CartItems

  const {params} = context
  const foodType = params?.food

  if (foodType === DIET_QUERY) {
    data = await getFoodData(foodType, DIET_LIST, {sliceFrom: 0, sliceTo: 8})
  } else if (foodType === MEAL_QUERY) {
    data = await getFoodData(foodType, MEAL_LIST, {sliceFrom: 0, sliceTo: 8})
  } else if (foodType === FOOD_QUERY) {
    data = await getFoodData(foodType, FOOD_LIST, {sliceFrom: 0, sliceTo: 8})
  }

  const list =
    foodType === 'diet'
      ? DIET_LIST
      : foodType === 'mealType'
      ? MEAL_LIST
      : foodType === 'q'
      ? FOOD_LIST
      : ''

  const defaultObject = {} as any
  Object.values(list).forEach((item) => (defaultObject[item] = false))

  //*Don't change revalidate time, because all prices are fake
  //*Or
  //*Don't change rendering type to CSR, because  there is a limit when calling api:10 times per min
  return {
    props: {
      data,
      defaultObject,
    },
    revalidate: 2000000,
  }
}

const Food = ({data, defaultObject}: any) => {
  const [filter, setFilter] = useState({...defaultObject, ...cuisineType})
  console.log(filter)
  const {query} = useRouter()

  const title =
    query.food === 'diet'
      ? 'Diet'
      : query.food === 'mealType'
      ? 'Meal'
      : query.food === 'q'
      ? 'Food'
      : ''

  const filterItems = [
    {[title]: Object.keys(defaultObject)},
    {'Cuisine type': Object.keys(cuisineType)},
  ]

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const {checked, value} = e.target
    setFilter({...filter, [value]: checked})
  }

  //*This is a beginning idea
  //*I'm going to change it, add some variables from react query and make it clean.
  //TODO:Change DropdownOnClick to Dropdown

  return (
    <div className="flex justify-center items-start gap-14 relative">
      <div>
        {data.map((item: any) => (
          <RowsContainer key={item.title}>
            <Row title={item.title}>
              {item.data.map((item: any) => (
                <OrderPoster
                  key={item.label}
                  {...item}
                  addToCartComponent={<AddToCartButton item={item} />}
                  priceComponent={<Price price={item.price} off={item.off} />}
                />
              ))}
            </Row>
          </RowsContainer>
        ))}
      </div>

      <StickyLayout>
        <h6 className="text-4xl border-b-2 pb-1 border-yellow-300 mb-2">
          Filter
        </h6>

        {filterItems.map((item) => {
          return (
            <DropdownOnClick
              title={Object.keys(item).join('')}
              className="flex flex-col p-1 border-b-2 border-yellow-300 text-2xl"
              key={Object.keys(item).join('')}
            >
              <div className="bg-white px-4 text-lg">
                {Object.values(item)
                  .flat()
                  .map((item) => {
                    return (
                      <CheckboxInput
                        label={item}
                        value={item}
                        name={item}
                        onChange={handleCheck}
                        checked={filter.item}
                        key={item}
                      />
                    )
                  })}
              </div>
            </DropdownOnClick>
          )
        })}
      </StickyLayout>
    </div>
  )
}

export default Food
