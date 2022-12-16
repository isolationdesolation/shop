export interface Product {
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number;
  rating: RatingPayload;
  title: string;
}

export type ProductPayload = Partial<Omit<Product, 'id'|'rating'>>

export interface RatingPayload {
  rate: number;
  count: number;
}
