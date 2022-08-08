export const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.EDAM_APP_ID}&app_key=${process.env.EDAM_API_KEY}`

export const DIET_QUERY = 'diet' as const
export enum DIET_MENU {
  HIGH_FIBER = 'high-fiber',
  HIGH_PROTEIN = 'high-protein',
  HIGH_CARB = 'low-carb',
  LOW_FAT = 'low-fat',
  BALANCED = 'Balanced',
  LOW_SODIUM = 'low-sodium',
}

export const MEAL_QUERY = 'meal' as const
export enum MEAL_MENU {
  BREAKFAST = 'breakfast',
  BRUNCH = 'brunch',
  LUNCH_DINNER = 'lunch/dinner',
  SNACK = 'snack',
  TEATIME = 'teatime',
}

export const FOOD_QUERY = 'q' as const
export enum FOOD_MENU {
  keKEBAB = 'kebab',
  PIZZA = 'pizza',
  JUICE = 'juice',
  SALAD = 'salad',
  // },
}
