import React from 'react'
import {GetStaticProps, GetStaticPaths} from 'next'

import Row from 'src/components/ui/row'
import OrderPoster from 'src/components/poster/orderPoster'
import RowsContainer from 'src/components/ui/rowsContainer'
import AddToCartButton from 'src/components/addToCartButton/addToCartButton'
import Price from 'src/components/price/price'

import {getFoodData} from 'src/config-api/food-api/order-list'
import {ORDER} from 'src/link'
import {
  DIET_LIST,
  FOOD_LIST,
  MEAL_LIST,
  DIET_QUERY,
  FOOD_QUERY,
  MEAL_QUERY,
} from 'src/config-api/food-api/config'

import {CartItems} from 'types/data'

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

  //*Don't change revalidate time, because all prices are fake
  //*Don't change rendering page to CSR, because all prices are fake
  return {
    props: {
      data,
    },
    revalidate: 2000000,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ORDER.map((item) => {
    return {params: {food: Object.values(item).join('')}}
  })

  return {
    paths,
    fallback: false,
  }
}

const Food = ({data}: any) => {
  return (
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
  )
}

export default Food
