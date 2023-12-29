/**
 * @license
 * Copyright Justin Dah-kenangnon - All Rights Reserved.
 * 
 * @link https://dah-kenangnon.com
 * For more details, see LICENSE.md file in root folder
 */
import departments from './data/departments';
import towns from './data/towns';
import districts from './data/districts';
import neighborhoods from './data/neighborhoods';
import { IDepartment, ITown, IDistrict, INeighborhood, BjLocationWidgetOptions } from './types/interfaces';
import { BjLocationData, BjLocationType } from './types/type';
import { isValidLevelOptionOrThrow, updateParent, updateChild, levelInitialData } from './utils';

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
export function departmentList(sortBy: 'asc' | 'desc' = 'asc'): IDepartment[] {
    const sortedDepartments = [...departments];
    sortedDepartments.sort((a, b) => {
        if (sortBy === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return sortedDepartments;
}

/**
 * Get all towns list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {ITown[]} Towns list
 */
export function townsList(sortBy: 'asc' | 'desc' = 'asc'): ITown[] {
    const sortedTowns = [...towns];
    sortedTowns.sort((a, b) => {
        if (sortBy === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return sortedTowns;
}

/**
 * Get all districts list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDistrict[]} Districts list
 */
export function districtList(sortBy: 'asc' | 'desc' = 'asc'): IDistrict[] {
    const sortedDistricts = [...districts];
    sortedDistricts.sort((a, b) => {
        if (sortBy === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return sortedDistricts;
}

/**
 * Get all neighborhoods list
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {INeighborhood[]} Neighborhoods list
 */
export function neighborhoodList(sortBy: 'asc' | 'desc' = 'asc'): INeighborhood[] {
    const sortedNeighborhoods = [...neighborhoods];
    sortedNeighborhoods.sort((a, b) => {
        if (sortBy === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return sortedNeighborhoods;
}

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
export function department(code: string): IDepartment | undefined {
    return departments.find((department) => department.code === code);
}

/**
 * Get a town by its code
 * @param code - Code of the town
 * @returns {ITown | undefined} The town with the specified code, or undefined if not found
 */
export function town(code: string): ITown | undefined {
    return towns.find((town) => town.code === code);
}

/**
 * Get a district by its code
 * @param code - Code of the district
 * @returns {IDistrict | undefined} The district with the specified code, or undefined if not found
 */
export function district(code: string): IDistrict | undefined {
    return districts.find((district) => district.code === code);
}

/**
 * Get a neighborhood by its code
 * @param code - Code of the neighborhood
 * @returns {INeighborhood | undefined} The neighborhood with the specified code, or undefined if not found
 */
export function neighborhood(code: string): INeighborhood | undefined {
    return neighborhoods.find((neighborhood) => neighborhood.code === code);
}

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
export function townsOfDepartment(departmentCode: string, sortBy: 'asc' | 'desc' = 'asc'): ITown[] {
    const filteredTowns = towns.filter((town) => town.department_code === departmentCode);

    filteredTowns.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredTowns : filteredTowns.reverse();
}

/**
 * Get districts of a specific town
 * @param townCode - Code of the town
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDistrict[]} Districts in the specified town
 */
export function districtsOfTown(townCode: string, sortBy: 'asc' | 'desc' = 'asc'): IDistrict[] {
    const filteredDistricts = districts.filter((district) => district.town_code === townCode);

    filteredDistricts.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredDistricts : filteredDistricts.reverse();
}

/**
 * Get neighborhoods of a specific district
 * @param districtCode - Code of the district
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {INeighborhood[]} Neighborhoods in the specified district
 */
export function neighborhoodsOfDistrict(districtCode: string, sortBy: 'asc' | 'desc' = 'asc'): INeighborhood[] {
    const filteredNeighborhoods = neighborhoods.filter((neighborhood) => neighborhood.district_code === districtCode);

    filteredNeighborhoods.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredNeighborhoods : filteredNeighborhoods.reverse();
}



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
export function searchData(query: string, sortBy: 'asc' | 'desc' = 'asc'): Array<BjLocationData> {
    const searchResults: Array<BjLocationData> = [];

    // Search in departments
    const departmentResults = departments.filter((department) => department.name.toLowerCase().includes(query.toLowerCase()));
    departmentResults.forEach((result) => {
        searchResults.push({ ...result, type: 'Department' });
    });

    // Search in towns
    const townResults = towns.filter((town) => town.name.toLowerCase().includes(query.toLowerCase()));
    townResults.forEach((result) => {
        searchResults.push({ ...result, type: 'Town' });
    });

    // Search in districts
    const districtResults = districts.filter((district) => district.name.toLowerCase().includes(query.toLowerCase()));
    districtResults.forEach((result) => {
        searchResults.push({ ...result, type: 'District' });
    });

    // Search in neighborhoods
    const neighborhoodResults = neighborhoods.filter((neighborhood) => neighborhood.name.toLowerCase().includes(query.toLowerCase()));
    neighborhoodResults.forEach((result) => {
        searchResults.push({ ...result, type: 'Neighborhood' });
    });

    // Sort the combined results by name
    searchResults.sort((a, b) => a.name.localeCompare(b.name));

    // Return the sorted list in the specified order
    return sortBy === 'asc' ? searchResults : searchResults.reverse();
}


/**
 * Search departments by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDepartment[]} Matching departments
 */
export function searchDepartments(query: string, sortBy: 'asc' | 'desc' = 'asc'): IDepartment[] {
    const filteredDepartments = departments.filter((department) => department.name.toLowerCase().includes(query.toLowerCase()));

    filteredDepartments.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredDepartments : filteredDepartments.reverse();
}

/**
 * Search towns by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {ITown[]} Matching towns
 */
export function searchTowns(query: string, sortBy: 'asc' | 'desc' = 'asc'): ITown[] {
    const filteredTowns = towns.filter((town) => town.name.toLowerCase().includes(query.toLowerCase()));

    filteredTowns.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredTowns : filteredTowns.reverse();
}

/**
 * Search districts by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {IDistrict[]} Matching districts
 */
export function searchDistricts(query: string, sortBy: 'asc' | 'desc' = 'asc'): IDistrict[] {
    const filteredDistricts = districts.filter((district) => district.name.toLowerCase().includes(query.toLowerCase()));

    filteredDistricts.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredDistricts : filteredDistricts.reverse();
}

/**
 * Search neighborhoods by name
 * @param query - Search query
 * @param sortBy - Sorting order for the 'name' field: 'asc' (ascending) or 'desc' (descending)
 * @returns {INeighborhood[]} Matching neighborhoods
 */
export function searchNeighborhoods(query: string, sortBy: 'asc' | 'desc' = 'asc'): INeighborhood[] {
    const filteredNeighborhoods = neighborhoods.filter((neighborhood) => neighborhood.name.toLowerCase().includes(query.toLowerCase()));

    filteredNeighborhoods.sort((a, b) => a.name.localeCompare(b.name));

    return sortBy === 'asc' ? filteredNeighborhoods : filteredNeighborhoods.reverse();
}

/**
 * Find the widget holder element using the provided option and plug the widget in it.
 * 
 * @param options Options to use to initialize the widget
 */
export function init(options: BjLocationWidgetOptions) {

    // Ensure the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        if (options.departmentsData) {
            //TODO: Handle the user defined custom data. Will be implemented in next version
        }

        // Find the widget holder element
        const holder = document.querySelector(options.holderQuerySelector);

        // If the holder is not found, throw an error
        if (!holder) {
            throw new Error(`The holder element with query selector '${options.holderQuerySelector}' is not found`);
        }

        // Create the widget and append it to the DOM
        const widget = document.createElement('div');
        widget.id = 'locationDataBJ-widget';
        holder.innerHTML = '';
        holder.appendChild(widget);

        // If useSearch is true, add the search container and present the result in a select element
        // on that user can select the result. When user select a result, the callback function will be called
        // This options, show only a search input and no select element will be displayed
        if (options.useSearch) {

            // Create the search container
            const searchContainer = document.createElement('div');
            searchContainer.classList.add('search-container');

            // Create the search input
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.name = 'search-input';
            searchInput.id = 'search-input';
            searchInput.placeholder = options.searchPlaceholder || 'Search...';

            // Create the search results container
            const searchResultsContainer = document.createElement('div');
            searchResultsContainer.classList.add('search-results-container');

            // Append the search input and the search results container to the search container
            searchContainer.appendChild(searchInput);
            searchContainer.appendChild(searchResultsContainer);

            // Append the search container to the widget
            widget.appendChild(searchContainer);

            // Add the search input event listener
            searchInput.addEventListener('keyup', (e) => {

                // Get the search input value
                const searchValue = (e.target as HTMLInputElement).value;

                // If the search value is empty, clear the search results container
                if (!searchValue) {
                    searchResultsContainer.innerHTML = '';
                    return;
                }

                // Search the data
                const searchResults = searchData(searchValue, 'asc');

                // If no results are found, display a message
                if (!searchResults.length) {
                    searchResultsContainer.innerHTML = `<div class="search-result">${options.searchNoResultsText || 'No results found'}</div>`;
                    return;
                }

                // Create the select element
                const searchResultsSelect = document.createElement('select');
                searchResultsSelect.name = 'search-results-select';
                searchResultsSelect.id = 'search-results-select';

                // Create the select options
                const optionsHtml = searchResults.map((result) => {
                    return `<option value="${result.code}" data-dataobject='${JSON.stringify(result)}'>${result.name}</option>`;
                }).join('');

                // Add the options to the select element
                searchResultsSelect.innerHTML = optionsHtml;

                // Add the select element to the search results container
                searchResultsContainer.innerHTML = '';
                searchResultsContainer.appendChild(searchResultsSelect);

                // Add the select element event listener
                searchResultsSelect.addEventListener('change', (e) => {

                    // Get the selected option
                    const selectedOption = (e.target as HTMLSelectElement).selectedOptions[0];

                    // Get the selected option data object
                    const value = JSON.parse(selectedOption.dataset.dataobject as string);

                    // Notify the global callback function
                    if(options.onChanges){
                        options.onChanges(value);
                    }
                });
            });

            return;
        }


        // If useSearch is false, add the department, town, district and neighborhood containers 
        // according to the level option provided
        // var levels = options.level || ['department', 'town', 'district', 'neighborhood'];
        var levels = isValidLevelOptionOrThrow(options.level);

        // This variable hold the current state of all levels. State are the selected option's value of each level
        // This will allow bidirectional data flow from child to parent and vice versa
        let currentLevelState: { department: string, town: string, district: string, neighborhood: string } = {
            department: '',
            town: '',
            district: '',
            neighborhood: ''
        };

        let cursor = 0; // This variable is used to track the current level (0: department, 1: town, 2: district, 3: neighborhood)

        // For each level, create the container and the select element and append them to the widget
        levels.forEach((currentLevel: string) => {

            // Create the container
            const container = document.createElement('div');
            container.classList.add(`${currentLevel}-container`);

            // TODO: Handle the case when search is `enable{Level}Search` for this level

            // Create the select element
            const select = document.createElement('select');
            select.name = `${currentLevel}-select`;
            select.id = `${currentLevel}-select`;


            const levelDatalist = levelInitialData(currentLevel as BjLocationType);
            const optionsHtml = levelDatalist.map((result) => {
                if (options.useDefaultSelect && result.code == levelDatalist[0].code) {
                    return `<option selected value="${result.code}" data-dataobject='${JSON.stringify(result)}'>${result.name}</option>`;
                }

                return `<option value="${result.code}" data-dataobject='${JSON.stringify(result)}'>${result.name}</option>`;
            }).join('');

            // Only add the default option if useDefaultSelect is true
            if (!options.useDefaultSelect) {
                // add selection label as first child of optionsHtml
                let selectLabel = options[currentLevel + 'SelectLabel'] || 'Select an entry';

                // Add a new option at the beginning and make it selected
                let defaultOptionHtml = `<option selected value="no-select">${selectLabel}</option>`;
                select.innerHTML = defaultOptionHtml + optionsHtml;

                //Ensure that the default option is not only the first but also selected by default
                select.selectedIndex = 0;
            } else {
                select.innerHTML = optionsHtml;
            }

            // Append the select element to the container
            container.appendChild(select);

            // Append the container to the widget
            widget.appendChild(container);



            // Add the select element event listener to update the next select element
            select.addEventListener('change', (e) => {

                // Get the selected option
                const selectedOption = (e.target as HTMLSelectElement).selectedOptions[0];

                // If no option is selected, clear the next select element
                if (!selectedOption) {
                    return;
                }

                // Get the selected option data object
                const value = JSON.parse(selectedOption.dataset.dataobject as string);

                // Call the global callback function
                if (options.onChanges) {
                    options.onChanges(value);
                }

                // Call the specific callback according to the current level
                if (options.onDepartmentChange && currentLevel == 'department') {
                    currentLevelState.department = value.code;
                    options.onDepartmentChange(value);
                    cursor = 0;

                    // Trigger child update if useHierarchy is true
                    if (options.useHierarchy) {
                        updateChild(0, currentLevelState, 'town', 'district', 'neighborhood');
                    }
                } else if (options.onTownChange && currentLevel == 'town') {
                    currentLevelState.town = value.code;
                    options.onTownChange(value);
                    cursor = 1;

                    if (options.useHierarchy) {
                        updateChild(1, currentLevelState, 'district', 'neighborhood');
                        updateParent(1, currentLevelState, 'department');
                    }
                } else if (options.onDistrictChange && currentLevel == 'district') {
                    currentLevelState.district = value.code;
                    options.onDistrictChange(value);
                    cursor = 2;

                    if (options.useHierarchy) {
                        updateChild(2, currentLevelState, 'neighborhood');
                        updateParent(2, currentLevelState, 'town', 'department');
                    }

                } else if (options.onNeighborhoodChange && currentLevel == 'neighborhood') {
                    currentLevelState.neighborhood = value.code;
                    options.onNeighborhoodChange(value);
                    cursor = 3;

                    if (options.useHierarchy) {
                        updateParent(3, currentLevelState, 'district', 'town', 'department');
                    }
                }
            });
        });
    })
}

export default {
    init,
    departmentList,
    townsList,
    districtList,
    neighborhoodList,
    department,
    town,
    district,
    neighborhood,
    townsOfDepartment,
    districtsOfTown,
    neighborhoodsOfDistrict,
    searchData,
    searchDepartments,
    searchTowns,
    searchDistricts,
    searchNeighborhoods
};



