import {normalizeDataForPoster} from 'utils/utils'
import {
  FOOD_LIST,
  FOOD_QUERY,
  MEAL_LIST,
  MEAL_QUERY,
  DIET_LIST,
  DIET_QUERY,
  baseUrl,
  DIET_SINGLE_ITEM,
  FOOD_SINGLE_ITEM,
  MEAL_SINGLE_ITEM,
} from './config'

export function fetchFoodData(type: typeof MEAL_QUERY): {
  (query: typeof MEAL_LIST | MEAL_SINGLE_ITEM): Promise<any>
}
export function fetchFoodData(type: typeof FOOD_QUERY): {
  (query: typeof FOOD_LIST | FOOD_SINGLE_ITEM): Promise<any>
}
export function fetchFoodData(type: typeof DIET_QUERY): {
  (query: typeof DIET_LIST | DIET_SINGLE_ITEM): Promise<any>
}

export function fetchFoodData(type: any) {
  return async function (query: any) {
    const url = `${baseUrl}&${type}=${query}`

    try {
      const data = await fetch(url)
      const res = await data.json()

      return {...res, title: query}
    } catch (e) {
      throw e
    }
  }
}

export async function getFoodData(
  type: typeof DIET_QUERY,
  query: typeof DIET_LIST | DIET_SINGLE_ITEM,
  {sliceFrom, sliceTo}: {sliceFrom: number; sliceTo: number},
): Promise<any>
export async function getFoodData(
  type: typeof FOOD_QUERY,
  query: typeof FOOD_LIST | FOOD_SINGLE_ITEM,
  {sliceFrom, sliceTo}: {sliceFrom: number; sliceTo: number},
): Promise<any>
export async function getFoodData(
  type: typeof MEAL_QUERY,
  query: typeof MEAL_LIST | MEAL_SINGLE_ITEM,
  {sliceFrom, sliceTo}: {sliceFrom: number; sliceTo: number},
): Promise<any>

export async function getFoodData(
  type: any,
  query: any,
  {sliceFrom = 0, sliceTo = 2},
) {
  let data: any = []
  const menu: any[] = typeof query === 'string' ? [query] : Object.values(query)
  const FoodType = fetchFoodData(type)

  for (const menuItem of menu) {
    const foodList = await FoodType(menuItem)
    const normalizedData = await normalizeDataForPoster(foodList, {
      sliceFrom,
      sliceTo,
    })
    await data.push({data: normalizedData, title: foodList?.title})
  }
  return typeof query === 'string' ? data[0] : data
}

//
//
//!I'm going to delete this comment at 1400/5/29
// const menu = Object.values(FOOD_LIST)
// const diet = fetchFoodData(foodType)

// for (const item of menu) {
//   const array = await diet(item)
//   const data = await normalizeDataForPoster(array, {
//     sliceFrom: 0,
//     sliceTo: 10,
//   })
//   await ArrayData.push({data, title: array?.title})
// }
