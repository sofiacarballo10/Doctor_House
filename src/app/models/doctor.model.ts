import { Specialty } from "./specialty";

export interface Doctor {
    id: number;
    license: number;
    name: string;
    specialty: Specialty;
    experience: number;
    price: number;
    mainImage: string;
    favorite: boolean;
}
