export const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.EDAM_APP_ID}&app_key=${process.env.EDAM_API_KEY}`

export type DIET_LABELS =
  | 'Balanced'
  | 'high-fiber'
  | 'high-protein'
  | 'low-carb'
  | 'low-fat'
  | 'low-sodium'

export type MEAL_TYPE =
  | 'breakfast'
  | 'brunch'
  | 'lunch/dinner'
  | 'snack'
  | 'teatime'

export type FOOD_TYPE = 'kebab' | 'pizza' | 'juice' | 'salad'

// ;('https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=570a7391&app_key=4b28b90c5dbcf1d0dd540ad4cb70e228&diet=high-protein&mealType=Snack')
