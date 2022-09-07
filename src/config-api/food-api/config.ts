export const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.EDAM_APP_ID}&app_key=${process.env.EDAM_API_KEY}`

export const CATEGORY_MENU = [
  {
    name: 'Meal',
    image:
      'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
  },
  {
    name: 'Food',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Diet',
    image:
      'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
]

export const DIET_QUERY = 'diet' as const
export const DIET_LIST = {
  HIGH_FIBER: 'high-fiber',
  // HIGH_PROTEIN: 'high-protein',
  // HIGH_CARB: 'low-carb',
  // LOW_FAT: 'low-fat',
  // BALANCED : 'Balanced',
  // LOW_SODIUM : 'low-sodium',
}

export const MEAL_QUERY = 'mealType' as const
export const MEAL_LIST = {
  BREAKFAST: 'breakfast',
  BRUNCH: 'brunch',
  // LUNCH_DINNER : 'lunch/dinner',
  // SNACK : 'snack',
}

export const FOOD_QUERY = 'q' as const
export const FOOD_LIST = {
  keKEBAB: 'kebab',
  PIZZA: 'pizza',
  // JUICE : 'juice',
  // SALAD : 'salad',
}

export enum DIET_SINGLE_ITEM {
  HIGH_FIBER = 'high-fiber',
  HIGH_PROTEIN = 'high-protein',
  HIGH_CARB = 'low-carb',
  LOW_FAT = 'low-fat',
  BALANCED = 'Balanced',
  LOW_SODIUM = 'low-sodium',
}

export enum MEAL_SINGLE_ITEM {
  BREAKFAST = 'breakfast',
  BRUNCH = 'brunch',
  LUNCH_DINNER = 'lunch/dinner',
  SNACK = 'snack',
}

export enum FOOD_SINGLE_ITEM {
  keKEBAB = 'kebab',
  PIZZA = 'pizza',
  JUICE = 'juice',
  SALAD = 'salad',
}
