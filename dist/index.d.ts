import { IDepartment, ITown, IDistrict, INeighborhood, BjLocationWidgetOptions } from './types/interfaces';
import { BjLocationData } from './types/type';
/*********************************************************************
 *
 * Data list
 *
 *********************************************************************/
/**
 * Get all departments list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDepartment[]} Departments list
 */
export declare function departmentList(sortBy?: 'asc' | 'desc'): IDepartment[];
/**
 * Get all towns list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {ITown[]} Towns list
 */
export declare function townsList(sortBy?: 'asc' | 'desc'): ITown[];
/**
 * Get all districts list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDistrict[]} Districts list
 */
export declare function districtList(sortBy?: 'asc' | 'desc'): IDistrict[];
/**
 * Get all neighborhoods list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {INeighborhood[]} Neighborhoods list
 */
export declare function neighborhoodList(sortBy?: 'asc' | 'desc'): INeighborhood[];
/*********************************************************************
 *
 * Single data by its code
 *
 *********************************************************************/
/**
 * Get a department by its code
 * @param code - Code of the department
 * @returns {IDepartment | undefined} The department with the specified code, or undefined if not found
 */
export declare function department(code: string): IDepartment | undefined;
/**
 * Get a town by its code
 * @param code - Code of the town
 * @returns {ITown | undefined} The town with the specified code, or undefined if not found
 */
export declare function town(code: string): ITown | undefined;
/**
 * Get a district by its code
 * @param code - Code of the district
 * @returns {IDistrict | undefined} The district with the specified code, or undefined if not found
 */
export declare function district(code: string): IDistrict | undefined;
/**
 * Get a neighborhood by its code
 * @param code - Code of the neighborhood
 * @returns {INeighborhood | undefined} The neighborhood with the specified code, or undefined if not found
 */
export declare function neighborhood(code: string): INeighborhood | undefined;
/*********************************************************************
 *
 * Data list by its parent code
 *
 *********************************************************************/
/**
 * Get towns of a specific department
 * @param departmentCode - Code of the department
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {ITown[]} Towns in the specified department
 */
export declare function townsOfDepartment(departmentCode: string, sortBy?: 'asc' | 'desc'): ITown[];
/**
 * Get districts of a specific town
 * @param townCode - Code of the town
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDistrict[]} Districts in the specified town
 */
export declare function districtsOfTown(townCode: string, sortBy?: 'asc' | 'desc'): IDistrict[];
/**
 * Get neighborhoods of a specific district
 * @param districtCode - Code of the district
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {INeighborhood[]} Neighborhoods in the specified district
 */
export declare function neighborhoodsOfDistrict(districtCode: string, sortBy?: 'asc' | 'desc'): INeighborhood[];
/*********************************************************************
 *
 * Search data
 *
 *********************************************************************/
/**
 * Search data in all categories (departments, towns, districts, neighborhoods)
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {Array<BjLocationData>} Matching data with type information
 */
export declare function searchData(query: string, sortBy?: 'asc' | 'desc'): Array<BjLocationData>;
/**
 * Search departments by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDepartment[]} Matching departments
 */
export declare function searchDepartments(query: string, sortBy?: 'asc' | 'desc'): IDepartment[];
/**
 * Search towns by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {ITown[]} Matching towns
 */
export declare function searchTowns(query: string, sortBy?: 'asc' | 'desc'): ITown[];
/**
 * Search districts by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDistrict[]} Matching districts
 */
export declare function searchDistricts(query: string, sortBy?: 'asc' | 'desc'): IDistrict[];
/**
 * Search neighborhoods by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {INeighborhood[]} Matching neighborhoods
 */
export declare function searchNeighborhoods(query: string, sortBy?: 'asc' | 'desc'): INeighborhood[];
/**
 * Find the widget holder element using the provided option and plug the widget in it.
 *
 * @param options Options to use to initialize the widget
 */
export declare function init(options: BjLocationWidgetOptions): void;
declare const _default: {
    init: typeof init;
    departmentList: typeof departmentList;
    townsList: typeof townsList;
    districtList: typeof districtList;
    neighborhoodList: typeof neighborhoodList;
    department: typeof department;
    town: typeof town;
    district: typeof district;
    neighborhood: typeof neighborhood;
    townsOfDepartment: typeof townsOfDepartment;
    districtsOfTown: typeof districtsOfTown;
    neighborhoodsOfDistrict: typeof neighborhoodsOfDistrict;
    searchData: typeof searchData;
    searchDepartments: typeof searchDepartments;
    searchTowns: typeof searchTowns;
    searchDistricts: typeof searchDistricts;
    searchNeighborhoods: typeof searchNeighborhoods;
};
export default _default;
