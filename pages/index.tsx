import React from 'react'
import Head from 'next/head'
import {
  Banner,
  CategoryPoster,
  Row,
  MapComponent,
  RowsContainer,
  OrderPoster,
} from 'components'
import {getFoodData} from 'network/food-api/order-list'
import {
  MEAL_QUERY,
  MEAL_SINGLE_ITEM,
  CATEGORY_MENU,
} from 'network/food-api/config'
import {GetStaticProps} from 'next'

//! I'm going to change this
export const getStaticProps: GetStaticProps = async (context) => {
  const highProtein = await getFoodData(
    MEAL_QUERY,
    MEAL_SINGLE_ITEM.BREAKFAST,
    {
      sliceFrom: 0,
      sliceTo: 20,
    },
  )

  return {
    props: {
      highProtein: {
        ...highProtein,
        // data: highProtein.data.filter(
        //   (item: any) => item.off > 0 && item.price > 0,
        // ),
      },
    },
  }
}

const Home = ({highProtein}: any) => {
  return (
    <React.Suspense fallback="loading...">
      <div>
        <Head>
          <title>Yummy</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/assets/logo2.jpg" />
        </Head>
        <div className="mb-20">
          <Banner />
        </div>

        <RowsContainer>
          <Row
            title="Category"
            classname={`${
              CATEGORY_MENU.length < 4
                ? `xl:grid-cols-${CATEGORY_MENU.length}`
                : ''
            }`}
          >
            <MapComponent Component={CategoryPoster} data={CATEGORY_MENU} />
          </Row>
          <Row
            title="Hot price"
            classname={`${
              highProtein.data.length < 4
                ? `xl:grid-cols-${highProtein.data.length}`
                : ``
            }`}
          >
            <MapComponent Component={OrderPoster} data={highProtein.data} />
          </Row>
        </RowsContainer>
      </div>
    </React.Suspense>
  )
}

export default Home
