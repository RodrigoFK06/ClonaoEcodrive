export interface Winner {
    id: string;
    name: string;
    prize: string;
    imageUrl: string;
  }
  
  export interface MonthlyPrize {
    title: string;
    imageUrl: string;
  }
  
  export interface WinnersApiResponse {
    currentWeek: string;
    monthlyPrize: MonthlyPrize;
    winnersList: Winner[];
  }
  