/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2023-Present Justin Dah-kenangnon <dah.kenangnon@gmail.com>
 *
 * @link https://dah-kenangnon.com
 * For more details, see LICENSE file in root folder
 */
import { IDepartment, IDistrict, INeighborhood, ITown } from "./interfaces";
export type BjLocationData = (IDepartment | ITown | IDistrict | INeighborhood) & {
    type?: string;
};
export type BjLocationType = "department" | "town" | "district" | "neighborhood";
