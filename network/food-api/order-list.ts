import {
  FOOD_MENU,
  FOOD_QUERY,
  MEAL_MENU,
  MEAL_QUERY,
  DIET_MENU,
  DIET_QUERY,
  baseUrl,
} from './config'

export function getFooDData(type: typeof MEAL_QUERY): {
  (query: MEAL_MENU): Promise<any>
}

export function getFooDData(type: typeof FOOD_QUERY): {
  (query: FOOD_MENU): Promise<any>
}

export function getFooDData(type: typeof DIET_QUERY): {
  (query: DIET_MENU): Promise<any>
}

export function getFooDData(type: any) {
  return async function (query: any) {
    const url = `${baseUrl}&${type}=${query}`

    try {
      const data = await fetch(url)
      const res = await data.json()

      return {...res, title: query || type}
    } catch (e) {
      throw e
    }
  }
}
