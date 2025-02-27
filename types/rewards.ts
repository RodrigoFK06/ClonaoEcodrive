export interface Reward {
  id: string
  title: string
  days: string
  image: string
  
}

export interface ApiResponse {
  data: Reward[]
  error?: string
}

