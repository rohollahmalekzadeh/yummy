import {normalizeDataForPoster} from 'src/utils/helpers/utils'
import {CartItems} from 'types/data'
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
  (query: typeof MEAL_LIST | MEAL_SINGLE_ITEM): Promise<CartItems>
}
export function fetchFoodData(type: typeof FOOD_QUERY): {
  (query: typeof FOOD_LIST | FOOD_SINGLE_ITEM): Promise<CartItems>
}
export function fetchFoodData(type: typeof DIET_QUERY): {
  (query: typeof DIET_LIST | DIET_SINGLE_ITEM): Promise<CartItems>
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
): Promise<CartItems>
export async function getFoodData(
  type: typeof FOOD_QUERY,
  query: typeof FOOD_LIST | FOOD_SINGLE_ITEM,
  {sliceFrom, sliceTo}: {sliceFrom: number; sliceTo: number},
): Promise<CartItems>
export async function getFoodData(
  type: typeof MEAL_QUERY,
  query: typeof MEAL_LIST | MEAL_SINGLE_ITEM,
  {sliceFrom, sliceTo}: {sliceFrom: number; sliceTo: number},
): Promise<CartItems>

export async function getFoodData(
  type: any,
  query: any,
  {sliceFrom = 0, sliceTo = 2},
) {
  let data: CartItems[] = []
  const menu: any[] = typeof query === 'string' ? [query] : Object.values(query)
  const FoodType = fetchFoodData(type)
  let foodList: any = []

  for (const menuItem of menu) {
    foodList.push(FoodType(menuItem))
  }

  const foodLists: CartItems[] = await Promise.all(foodList)

  for (const food of foodLists) {
    const normalizedData = normalizeDataForPoster(food, {
      sliceFrom,
      sliceTo,
    })

    data.push({
      data: normalizedData,
      title: food?.title,
    })
  }
  return typeof query === 'string' ? data[0] : data
}
