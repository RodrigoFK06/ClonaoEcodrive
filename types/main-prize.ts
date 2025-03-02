export interface MainPrize {
  title: string
  subtitle: string
  detail: string
  note: string
  date: string
  imageUrl: string
}

export interface MainPrizeResponse {
  title:string
  subtitle:string
  note:string
  date:string
  imageUrl:string
  data: MainPrize
  error?: string
}

