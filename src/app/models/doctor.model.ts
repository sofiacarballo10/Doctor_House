import { Brand } from './brand.model';

export interface Doctor {
  id: number;
  matricula: number;
  name: string;
  speciality: string;
  experience: number;
  price: number;
  mainImage: string;
}
