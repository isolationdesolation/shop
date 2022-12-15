export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingPayload;
  title: string;
}

export interface RatingPayload {
  rate: number;
  count: number;
}
