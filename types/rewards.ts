export interface Reward {
  id: string
  title: string
  days: string
  imageSrc: string
}

export interface ApiResponse {
  data: Reward[]
  error?: string
}

