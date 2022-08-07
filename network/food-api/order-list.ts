import {DIET_LABELS, MEAL_TYPE, FOOD_TYPE, baseUrl} from './config'

export const getOrderListByFood = async (query: FOOD_TYPE) => {
  const url = `${baseUrl}&q=${query}`
  try {
    const data = await fetch(url)
    const res = await data.json()
    return {...res, title: query}
  } catch (e) {
    throw e
  }
}

export const getOrderListByDiet = async (query: DIET_LABELS) => {
  const url = `${baseUrl}&diet=${query}`
  try {
    const data = await fetch(url)
    const res = await data.json()
    return {...res, title: query}
  } catch (e) {
    throw e
  }
}

export const getOrderListByMeal = async (query: MEAL_TYPE) => {
  const url = `${baseUrl}&mealType=${query}`
  try {
    const data = await fetch(url)
    const res = await data.json()
    return {...res, title: query}
  } catch (e) {
    throw e
  }
}
