export interface Reward {
  id: string;
  titulo: string;
  dias: string;    
  imagen: string; 
  descripcion: string; 
  tipo: string;
}

export interface ApiResponse {
  data: Reward[];
  error?: string;
}
