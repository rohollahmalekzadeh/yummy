import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Banner,
  CategoryPoster,
  Row,
  MapComponent,
  RowsContainer,
} from 'components'
import {buttonBase} from 'components/button/button'
import {getFooDData} from 'network/food-api/order-list'
import {
  DIET_MENU,
  DIET_QUERY,
  FOOD_MENU,
  FOOD_QUERY,
  MEAL_MENU,
  MEAL_QUERY,
  CATEGORY_MENU,
} from 'network/food-api/config'

import {motion, Variants} from 'framer-motion'

import {BsArrowLeft} from 'react-icons/bs'

import {normalizeDataForPoster} from 'utils/utils'

const onHover: Variants = {
  hover: {
    translateX: -6,
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
}

//! I'm going to change this
export async function getStaticProps() {
  const highProtein = await getFooDData(DIET_QUERY)(DIET_MENU.HIGH_PROTEIN)

  const highProteinList = normalizeDataForPoster(highProtein, {
    sliceFrom: 0,
    sliceTo: 4,
  })

  return {
    props: {
      highProteinList: {...highProteinList, title: highProtein.title},
    },
  }
}

const Home = ({highProteinList}: any) => {
  return (
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
        <Row title="Category">
          <MapComponent Component={CategoryPoster} data={CATEGORY_MENU} />
        </Row>
      </RowsContainer>
    </div>
  )
}

export default Home
