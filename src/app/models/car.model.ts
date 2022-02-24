import { Brand } from './brand.model';

export interface Car {
  id: number;
  brand: number | Brand;
  model: string;
  year: number;
  price: number;
  mainImage: string;
}
