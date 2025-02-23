export interface Benefit {
  id: string
  title: string
  promotion: string
  location: string
  days: string
  imageSrc: string
}

export interface BenefitsApiResponse {
  data: Benefit[]
  error?: string
}

