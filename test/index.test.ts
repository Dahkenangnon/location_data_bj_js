/**
 * @license
 * Copyright Justin Dah-kenangnon - All Rights Reserved.
 * 
 * @link https://dah-kenangnon.com
 * For more details, see LICENSE.md file in root folder
 */
import {
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
    searchNeighborhoods,
} from '../src/index';
import departmentDatas from '../src/data/departments';
import townDatas from '../src/data/towns';
import districtDatas from '../src/data/districts';
import neighborhoodDatas from '../src/data/neighborhoods';

describe('Data integrity and functions', () => {
    /** Test format  */

    // 1. department 
    test('department should be an array of 12 entry where each entry should have (code, name)', () => {
        expect(departmentDatas).toEqual(expect.any(Array));
        expect(departmentDatas.length).toBe(12);
        const hasCodeAndName = departmentDatas.every((dept) => {
            return dept.hasOwnProperty('code') && dept.hasOwnProperty('name');
        });
        expect(hasCodeAndName).toBe(true);
    });

    // 2. town 
    test('town should be an array of 77 entry where each entry should have (code, name, department_code)', () => {
        expect(townDatas).toEqual(expect.any(Array));
        expect(townDatas.length).toBe(77);
        const hasCodeAndName = townDatas.every((town) => {
            return town.hasOwnProperty('code') && town.hasOwnProperty('name') && town.hasOwnProperty('department_code');
        });
        expect(hasCodeAndName).toBe(true);
    });

    // 3. district
    test('district should be an array of 546 entry where each entry should have (code, name, town_code)', () => {
        expect(districtDatas).toEqual(expect.any(Array));
        expect(districtDatas.length).toBe(546);
        const hasCodeAndName = districtDatas.every((district) => {
            return district.hasOwnProperty('code') && district.hasOwnProperty('name') && district.hasOwnProperty('town_code');
        });
        expect(hasCodeAndName).toBe(true);
    });

    // 4. neighborhood
    test('neighborhood should be an array of 5303 entry where each entry should have (code, name, district_code)', () => {
        expect(neighborhoodDatas).toEqual(expect.any(Array));
        expect(neighborhoodDatas.length).toBe(5303);
        const hasCodeAndName = neighborhoodDatas.every((neighborhood) => {
            return neighborhood.hasOwnProperty('code') && neighborhood.hasOwnProperty('name') && neighborhood.hasOwnProperty('district_code');
        });
        expect(hasCodeAndName).toBe(true);
    });


    /** Sort list tests (asc, desc)  */

    // 1. departmentList
    test('departmentList should return a sorted (asc/desc) list of departments', () => {

        // Ascending order
        const departmentsAsc = departmentList('asc');

        expect(departmentsAsc).toEqual(expect.any(Array));
        expect(departmentsAsc.length).toBe(12);

        // Check if the array is sorted in ascending order by 'name'
        const isSortedAscending = departmentsAsc.every((dept, index) => {
            return index === 0 || dept.name >= departmentsAsc[index - 1].name;
        });
        expect(isSortedAscending).toBe(true);

        // Descending order
        const departmentsDesc = departmentList('desc');

        expect(departmentsDesc).toEqual(expect.any(Array));
        expect(departmentsDesc.length).toBe(12);

        // Check if the array is sorted in descending order by 'name'
        const isSortedDescending = departmentsDesc.every((dept, index) => {
            return index === 0 || dept.name <= departmentsDesc[index - 1].name;
        });

        expect(isSortedDescending).toBe(true);
    });


    // 2. townsList
    test('townsList should return a sorted (asc/desc) list of towns', () => {

        // Ascending order
        const townsAsc = townsList('asc');

        expect(townsAsc).toEqual(expect.any(Array));
        expect(townsAsc.length).toBe(77);

        // Check if the array is sorted in ascending order by 'name'
        const isSortedAscending = townsAsc.every((town, index) => {
            return index === 0 || town.name >= townsAsc[index - 1].name;
        });
        expect(isSortedAscending).toBe(true);

        // Descending order
        const townsDesc = townsList('desc');

        expect(townsDesc).toEqual(expect.any(Array));
        expect(townsDesc.length).toBe(77);

        // Check if the array is sorted in descending order by 'name'
        const isSortedDescending = townsDesc.every((town, index) => {
            return index === 0 || town.name <= townsDesc[index - 1].name;
        });

        expect(isSortedDescending).toBe(true);
    });


    // 3. districtList
    test('districtList should return a sorted (asc/desc) list of districts', () => {

        // Ascending order
        const districtsAsc = districtList('asc');

        expect(districtsAsc).toEqual(expect.any(Array));
        expect(districtsAsc.length).toBe(546);

        // Check if the array is sorted in ascending order by 'name'
        const isSortedAscending = districtsAsc.every((district, index) => {
            return index === 0 || district.name >= districtsAsc[index - 1].name;
        });
        expect(isSortedAscending).toBe(true);

        // Descending order
        const districtsDesc = districtList('desc');

        expect(districtsDesc).toEqual(expect.any(Array));
        expect(districtsDesc.length).toBe(546);

        // Check if the array is sorted in descending order by 'name'
        const isSortedDescending = districtsDesc.every((district, index) => {
            return index === 0 || district.name <= districtsDesc[index - 1].name;
        });

        expect(isSortedDescending).toBe(true);
    });


    // 4. neighborhoodList
    test('neighborhoodList should return a sorted (asc/desc) list of neighborhoods', () => {

        // Ascending order
        const neighborhoodsAsc = neighborhoodList('asc');

        expect(neighborhoodsAsc).toEqual(expect.any(Array));
        expect(neighborhoodsAsc.length).toBe(5303);

        // Check if the array is sorted in ascending order by 'name'
        const isSortedAscending = neighborhoodsAsc.every((neighborhood, index) => {
            return index === 0 || neighborhood.name >= neighborhoodsAsc[index - 1].name;
        });
        expect(isSortedAscending).toBe(true);

        // Descending order
        const neighborhoodsDesc = neighborhoodList('desc');

        expect(neighborhoodsDesc).toEqual(expect.any(Array));
        expect(neighborhoodsDesc.length).toBe(5303);

        // Check if the array is sorted in descending order by 'name'
        const isSortedDescending = neighborhoodsDesc.every((neighborhood, index) => {
            return index === 0 || neighborhood.name <= neighborhoodsDesc[index - 1].name;
        });

        expect(isSortedDescending).toBe(true);
    });

    /** Single data by it code  */

    // 1. department
    test('department should return a department by code', () => {
        const code = 'ali';
        const result = department(code);
        expect(result).toEqual(expect.any(Object));
        expect(result).toEqual({ code: 'ali', name: 'ALIBORI' });
    });

    // 2. town
    test('town should return a town by code', () => {
        const code = 'cot';
        const result = town(code);
        expect(result).toEqual(expect.any(Object));
        expect(result).toEqual({ code: 'cot', name: 'COTONOU', department_code: 'lit' });
    });

    // 3. district
    test('district should return a district by code', () => {
        const code = 'okp';
        const result = district(code);
        expect(result).toEqual(expect.any(Object));
        expect(result).toEqual({ code: 'okp', name: 'OKPARA', town_code: 'sae' });
    });


    // 4. neighborhood
    test('neighborhood should return a neighborhood by code', () => {
        const code = 'ag4';
        const result = neighborhood(code);
        expect(result).toEqual(expect.any(Object));
        expect(result).toEqual({ code: 'ag4', name: 'AGBADJAGON', district_code: 'boh' });
    });


    /** List of data by parent code  */

    // 1. townsOfDepartment
    test('townsOfDepartment should return towns of a specific department', () => {
        const departmentCode = 'ali';
        const towns = townsOfDepartment(departmentCode, 'asc');
        expect(towns).toEqual(expect.any(Array));
        expect(towns.length).toBe(6);
        expect(towns[0].name).toBe('BANIKOARA');
        expect(towns[5].name).toBe('SEGBANA');
    });

    // 2. districtsOfTown
    test('districtsOfTown should return districts of a specific town', () => {
        const townCode = 'cot';
        const districts = districtsOfTown(townCode, 'asc');
        expect(districts).toEqual(expect.any(Array));
        expect(districts.length).toBe(13);
    });

    // 3. neighborhoodsOfDistrict
    test('neighborhoodsOfDistrict should return neighborhoods of a specific district', () => {
        const districtCode = 'okp';
        const neighborhoods = neighborhoodsOfDistrict(districtCode, 'asc');
        expect(neighborhoods).toEqual(expect.any(Array));
        expect(neighborhoods.length).toBe(6);
    });

    /** Search data  */
    test('searchData should return matching data with type information', () => {
        const results = searchData('ali', 'asc');
        expect(results).toEqual(expect.any(Array));
        expect(results.length).toBeGreaterThanOrEqual(1);
        expect(results).toContainEqual({ code: 'ali', name: 'ALIBORI', type: 'Department' });

        const results2 = searchData('Cotonou', 'asc');
        expect(results2).toEqual(expect.any(Array));
        expect(results.length).toBeGreaterThanOrEqual(1);
        expect(results2).toContainEqual({ "code": "cot", "department_code": "lit", "name": "COTONOU", "type": "Town" });

        const results3 = searchData('not_exist', 'asc');
        expect(results3).toEqual(expect.any(Array));
        expect(results3.length).toBe(0);
    });

    /** Search data by type  */
    // 1. searchDepartments
    test('searchDepartments should return matching departments', () => {
        const query = 'ali';
        const departments = searchDepartments(query, 'asc');
        expect(departments).toEqual(expect.any(Array));
        expect(departments.length).toBe(1);
        expect(departments).toContainEqual({ code: 'ali', name: 'ALIBORI' });
    });

    // 2. searchTowns
    test('searchTowns should return matching towns', () => {
        const query = 'cot';
        const towns = searchTowns(query, 'asc');
        expect(towns).toEqual(expect.any(Array));
        expect(towns.length).toBe(1);
        expect(towns).toContainEqual({ code: 'cot', name: 'COTONOU', department_code: 'lit' });
    });

    // 3. searchDistricts
    test('searchDistricts should return matching districts', () => {
        const query = 'SOKPONTA';
        const districts = searchDistricts(query, 'asc');
        expect(districts).toEqual(expect.any(Array));
        expect(districts.length).toBe(1);
        expect(districts).toContainEqual({ "code": "sop", "name": "SOKPONTA", "town_code": "gla" });
    });

    // 4. searchNeighborhoods
    test('searchNeighborhoods should return matching neighborhoods', () => {
        const query = 'AGBADJAGON';
        const neighborhoods = searchNeighborhoods(query, 'asc');
        expect(neighborhoods).toEqual(expect.any(Array));
        expect(neighborhoods.length).toBe(1);
        expect(neighborhoods).toContainEqual({ "code": "ag4", "name": "AGBADJAGON", "district_code": "boh" });
    });
});
