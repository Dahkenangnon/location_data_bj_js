/**
 * @license
 * Copyright Justin Dah-kenangnon - All Rights Reserved.
 *
 * @link https://dah-kenangnon.com
 * For more details, see LICENSE.md file in root folder
 */
import { IDepartment, IDistrict, INeighborhood, ITown } from "./interfaces";
export type BjLocationData = (IDepartment | ITown | IDistrict | INeighborhood) & {
    type?: string;
};
export type BjLocationType = "department" | "town" | "district" | "neighborhood";
