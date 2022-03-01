import { Brand } from './brand.model';

export interface Doctor {
  id: number;
  licenseS: number;
  name: string;
  speciality: string;
  experience: number;
  price: number;
  mainImage: string;
  favorite: boolean;
}
