export type CartItem = {
  label: string
  price: number
  image: string
  quantity?: number
  off?: number
}

export type CartItems = {
  data: CartItem[]
  title?: string
}
