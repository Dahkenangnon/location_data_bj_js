import { IDepartment, IDistrict,  INeighborhood, ITown } from "./interfaces";
export type BjLocationData = (IDepartment | ITown | IDistrict | INeighborhood) & { type?: string };
export type BjLocationType = "department" | "town" | "district" | "neighborhood";