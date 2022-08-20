import React from 'react'
import {GetStaticProps, GetStaticPaths} from 'next'
import {RowsContainer, Row, MapComponent, OrderPoster} from 'src/components'
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

export const getStaticProps: GetStaticProps = async (context) => {
  let data = []

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
            <MapComponent Component={OrderPoster} data={item.data} />
          </Row>
        </RowsContainer>
      ))}
    </div>
  )
}

export default Food
