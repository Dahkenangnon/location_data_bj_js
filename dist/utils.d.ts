import { BjLocationType, BjLocationData } from "./types/type";
/**
 * Ensure that the level option is an array of string containing only 'department', 'town', 'district', 'neighborhood'
 *
 * @param level The level option provided by the user
 * @returns The level option with the right order
 */
export declare function ensureLevelHierarchy(level: string[]): string[];
/**
 * Ensure that the level option is an array of string containing only 'department', 'town', 'district', 'neighborhood'
 * and in the right order. Throw an error if the level option is not valid
 *
 * @param level The level option provided by the user
 * @returns
 */
export declare function isValidLevelOptionOrThrow(level: any): string[];
export declare function levelInitialData(level: BjLocationType, sortBy?: 'asc' | 'desc'): BjLocationData[];
/**
 * Get the list of data of a level for a parent data
 *
 * @param level The data level. It's the parent level of the data to get. Ex: 'department' for 'town' data
 * @param code The code of the parent data
 * @returns The list of data
 */
export declare function getChildData(level: BjLocationType, code: string): BjLocationData[];
export declare function updateChild(cursor: number, currentLevelState: {
    department: string;
    town: string;
    district: string;
    neighborhood: string;
}, ...levels: BjLocationType[]): void;
export declare function updateParent(cursor: number, currentLevelState: {
    department: string;
    town: string;
    district: string;
    neighborhood: string;
}, ...levels: BjLocationType[]): void;
