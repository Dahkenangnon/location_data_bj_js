import { townsOfDepartment, districtsOfTown, neighborhoodsOfDistrict, departmentList, townsList, districtList, neighborhoodList } from ".";
import { IDepartment, ITown, IDistrict, INeighborhood } from "./types/interfaces";
import { BjLocationType, BjLocationData } from "./types/type";

/**
 * Ensure that the level option is an array of string containing only 'department', 'town', 'district', 'neighborhood'
 * 
 * @param level The level option provided by the user
 * @returns The level option with the right order
 */
export function ensureLevelHierarchy(level: string[]): string[] {
    const hierarchyOrder = ['department', 'town', 'district', 'neighborhood'];
    let result: string[] = [];

    for (let i = 0; i < hierarchyOrder.length; i++) {
        // Check if the current level is in the input array
        if (level.includes(hierarchyOrder[i])) {
            // For the first item in the hierarchy, add it directly
            if (i === 0) {
                result.push(hierarchyOrder[i]);
            }
            // For other items, add them only if their parent is in the result
            else if (result.includes(hierarchyOrder[i - 1])) {
                result.push(hierarchyOrder[i]);
            }
        }
    }
    return result;
}


/**
 * Ensure that the level option is an array of string containing only 'department', 'town', 'district', 'neighborhood'
 * and in the right order. Throw an error if the level option is not valid
 * 
 * @param level The level option provided by the user
 * @returns 
 */
export function isValidLevelOptionOrThrow(level: any) {

    if (!level || !level.length) {
        throw new Error('The level option is required and must be an array of string');
    }

    // Check if the provided level string are valid
    const levels = ['department', 'town', 'district', 'neighborhood'];
    const validLevels = level.filter((l: string) => {
        return levels.includes(l);
    });

    // If the provided level string are not valid, throw an error
    if (validLevels.length !== level.length) {
        throw new Error(`The level option must be an array of string containing only ${levels.join(', ')}`);
    }

    // Ensure that the level is an array with that order 'department','town', 'district','neighborhood', 
    // If a child cannot be provided and his parent is there unless his is the only provided
    return ensureLevelHierarchy(level);
}

export function levelInitialData(level: BjLocationType, sortBy: 'asc' | 'desc' = 'asc'): BjLocationData[] {
    switch (level) {
        case 'department':
            return departmentList() as IDepartment[];
        case 'town':
            return townsOfDepartment(departmentList()[0].code, sortBy) as ITown[];
        case 'district':
            return districtsOfTown(townsOfDepartment(departmentList()[0].code, sortBy)[0].code, sortBy) as IDistrict[];
        case 'neighborhood':
            return neighborhoodsOfDistrict(districtsOfTown(townsOfDepartment(departmentList()[0].code, sortBy)[0].code, sortBy)[0].code, sortBy) as INeighborhood[];
        default:
            throw new Error("Unknown level");
    }
}

/**
 * Get the list of data of a level for a parent data
 * 
 * @param level The data level. It's the parent level of the data to get. Ex: 'department' for 'town' data
 * @param code The code of the parent data
 * @returns The list of data
 */
export function getChildData(level: BjLocationType, code: string): BjLocationData[] {
    switch (level) {
        case 'department':
            return townsOfDepartment(code,);
        case 'town':
            return districtsOfTown(code,);
        case 'district':
            return neighborhoodsOfDistrict(code,);
        default:
            throw new Error("This level don't have known children");
    }
}


export function updateChild(cursor: number, currentLevelState: { department: string, town: string, district: string, neighborhood: string }, ...levels: BjLocationType[]) {
    if (cursor == 0) {
        // 1. Updating town
        var newTownList = getChildData('department', currentLevelState.department) as ITown[];
        const newTownListSelectOptionHtml = newTownList
            .map((data) => {
                // Select the first element
                if (data.code == newTownList[0].code) {
                    return `<option selected value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
                }
                return `<option value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
            }).join('');

        // Add the options to the town select element
        (document.getElementById('town-select') as HTMLSelectElement).innerHTML = newTownListSelectOptionHtml;

        // 2. Updating district
        var newDistrictList = getChildData('town', newTownList[0].code) as IDistrict[];
        const newDistrictListSelectOptionHtml = newDistrictList
            .map((data) => {
                // Select the first element
                if (data.code == newDistrictList[0].code) {
                    return `<option selected value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
                }
                return `<option value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
            }).join('');

        // Add the options to the district select element
        (document.getElementById('district-select') as HTMLSelectElement).innerHTML = newDistrictListSelectOptionHtml;

        // 3. Updating neighborhood
        var newNeighborhoodList = getChildData('district', newDistrictList[0].code) as INeighborhood[];
        const newNeighborhoodListSelectOptionHtml = newNeighborhoodList
            .map((data) => {
                // Select the first element
                if (data.code == newNeighborhoodList[0].code) {
                    return `<option selected value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
                }
                return `<option value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
            }).join('');

        // Add the options to the neighborhood select element
        (document.getElementById('neighborhood-select') as HTMLSelectElement).innerHTML = newNeighborhoodListSelectOptionHtml;

    } else if (cursor == 1) {
        // 1. Updating district
        var newDistrictList = getChildData('town', currentLevelState.town) as IDistrict[];
        const newDistrictListSelectOptionHtml = newDistrictList
            .map((data) => {
                // Select the first element
                if (data.code == newDistrictList[0].code) {
                    return `<option selected value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
                }
                return `<option value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
            }).join('');

        // Add the options to the district select element
        (document.getElementById('district-select') as HTMLSelectElement).innerHTML = newDistrictListSelectOptionHtml;

        // 2. Updating neighborhood
        var newNeighborhoodList = getChildData('district', newDistrictList[0].code) as INeighborhood[];
        const newNeighborhoodListSelectOptionHtml = newNeighborhoodList
            .map((data) => {
                // Select the first element
                if (data.code == newNeighborhoodList[0].code) {
                    return `<option selected value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
                }
                return `<option value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
            }).join('');

        // Add the options to the neighborhood select element
        (document.getElementById('neighborhood-select') as HTMLSelectElement).innerHTML = newNeighborhoodListSelectOptionHtml;

    }
    else if (cursor == 2) {

        // 1. Updating neighborhood
        var newNeighborhoodList = getChildData('district', currentLevelState.district) as INeighborhood[];
        const newNeighborhoodListSelectOptionHtml = newNeighborhoodList
            .map((data) => {
                // Select the first element
                if (data.code == newNeighborhoodList[0].code) {
                    return `<option selected value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
                }
                return `<option value="${data.code}" data-dataobject='${JSON.stringify(data)}'>${data.name}</option>`;
            }).join('');

        // Add the options to the neighborhood select element
        (document.getElementById('neighborhood-select') as HTMLSelectElement).innerHTML = newNeighborhoodListSelectOptionHtml;
    }
}

export function updateParent(cursor: number, currentLevelState: { department: string, town: string, district: string, neighborhood: string }, ...levels: BjLocationType[]) {
    if (cursor == 3) {

        let selectedDistrictTownCode = null;
        let selectedTownDepartmentCode = null;

        // 1. Select the corresponded district
        const districtSelect = document.getElementById('district-select') as HTMLSelectElement;
        const districtOptions = districtSelect.options;
        for (var i = 0; i < districtOptions.length; i++) {
            if (districtOptions[i].value == currentLevelState.district) {
                districtOptions[i].selected = true;
                selectedDistrictTownCode = (JSON.parse(districtOptions[i].dataset.dataobject as string)).town_code;
                break;
            }
        }

        // 2. Select the corresponded town
        const townSelect = document.getElementById('town-select') as HTMLSelectElement;
        const townOptions = townSelect.options;
        for (var i = 0; i < townOptions.length; i++) {
            if (townOptions[i].value == selectedDistrictTownCode) {
                townOptions[i].selected = true;
                selectedTownDepartmentCode = (JSON.parse(townOptions[i].dataset.dataobject as string)).department_code;
                break;
            }
        }

        // 3. Select the corresponded department
        const departmentSelect = document.getElementById('department-select') as HTMLSelectElement;
        const departmentOptions = departmentSelect.options;
        for (var i = 0; i < departmentOptions.length; i++) {
            if (departmentOptions[i].value == selectedTownDepartmentCode) {
                departmentOptions[i].selected = true;
                break;
            }
        }


    } else if (cursor == 2) {
        let selectedTownDepartmentCode = null;

        // 1. Select the corresponded town
        const townSelect = document.getElementById('town-select') as HTMLSelectElement;
        const townOptions = townSelect.options;
        for (var i = 0; i < townOptions.length; i++) {
            if (townOptions[i].value == currentLevelState.town) {
                townOptions[i].selected = true;
                selectedTownDepartmentCode = (JSON.parse(townOptions[i].dataset.dataobject as string)).department_code;
                break;
            }
        }

        // 2. Select the corresponded department
        const departmentSelect = document.getElementById('department-select') as HTMLSelectElement;
        const departmentOptions = departmentSelect.options;
        for (var i = 0; i < departmentOptions.length; i++) {
            if (departmentOptions[i].value == selectedTownDepartmentCode) {
                departmentOptions[i].selected = true;
                break;
            }
        }

    } else if (cursor == 1) {
        // 1. Select the corresponded department
        const departmentSelect = document.getElementById('department-select') as HTMLSelectElement;
        const departmentOptions = departmentSelect.options;
        for (var i = 0; i < departmentOptions.length; i++) {
            if (departmentOptions[i].value == currentLevelState.department) {
                departmentOptions[i].selected = true;
                break;
            }
        }
    }
}