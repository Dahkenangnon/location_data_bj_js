/**
 * @license
 * Copyright Justin Dah-kenangnon - All Rights Reserved.
 *
 * @link https://dah-kenangnon.com
 * For more details, see LICENSE.md file in root folder
 */
import { BjLocationData } from "./type";
/** Department is the first administrative territory division in the country */
export interface IDepartment {
    code: string;
    name: string;
}
/** Town is included in department */
export interface ITown {
    code: string;
    name: string;
    department_code: string;
}
/** District are included in the town */
export interface IDistrict {
    code: string;
    name: string;
    town_code: string;
}
/** District can have neighborhoods */
export interface INeighborhood {
    code: string;
    name: string;
    district_code: string;
}
/**
 * The options to provide to the widget
 */
export interface BjLocationWidgetOptions {
    [key: string]: any;
    /**
     * The html element which have to plug the widget.
     * Can be an id (#foo), class (.foo) or any other query selector
     */
    holderQuerySelector: string;
    /**
     * If false, no default option will be selected in the selects and value
     * provided in options {level}SelectLabel will be used instead.
     */
    useDefaultSelect?: boolean;
    /**
     * Label for the department select
     */
    departmentSelectLabel: string;
    /**
     * Label for the town select
     */
    townSelectLabel: string;
    /**
     * Label for the district select
     */
    districtSelectLabel: string;
    /**
     * Label for the neighborhood select
     */
    neighborhoodSelectLabel: string;
    /**
     * The level of the location data.
     *
     * Order matters! The first element of the array will be the first select of the widget, the second element will be the second select, etc.
     *
     * Any change in the first select will update the second select, etc. when using the hierarchy (see `useHierarchy` option)
     *
     * When providing a level, you must provide the previous/parent level data, except when level is 'department' . Unless you will get
     * only a select for the first valid level. In that, if ùseHierarchy` is false, 4 selects will be displayed and no update will be made.
     *
     * @example
     *
     * // valid with `useHierarchy` true
     * level: ['department', 'town', 'district', 'neighborhood'];
     * level: ['town', 'district', 'neighborhood'];
     * level: ['district', 'neighborhood'];
     * level: ['neighborhood'];
     *
     * // invalid with `useHierarchy` true
     * level: ['town', 'department', 'district', 'neighborhood'];
     * level: ['town', 'district', 'department', 'neighborhood'];
     */
    level: ['department', 'town', 'district', 'neighborhood'];
    /**
     * Callback function to call when a selection is detected. The selected value can be
     * various types: `department`, `town`, `district`, `neighborhood`.
     * Use value.type to check it
     *
     * @param value The selected value.
     * @returns {void}
     */
    onChanges?: (value: BjLocationData, currentState?: any) => void;
    /**
     * Callback function to call when a user select a department
     *
     * @param value The selected value.
     * @param currentState The current state of the widget
     * @returns {void}
     */
    onDepartmentChange?: (value: IDepartment, currentState?: any) => void;
    /**
    * Callback function to call when a user select a town
    *
    * @param value The selected value.
    * @param currentState The current state of the widget
    * @returns {void}
    */
    onTownChange?: (value: ITown, currentState?: any) => void;
    /**
    * Callback function to call when a user select a town
    *
    * @param value The selected value.
    * @param currentState The current state of the widget
    * @returns {void}
    */
    onDistrictChange?: (value: IDistrict, currentState?: any) => void;
    /**
    * Callback function to call when a user select a neighborhood
    *
    * @param value The selected value.
    * @param currentState The current state of the widget
    * @returns {void}
    */
    onNeighborhoodChange?: (value: INeighborhood, currentState?: any) => void;
    /**
     * Will be used to complete the department data used internally by the widget allowing use
     * to use you own data
     *
     * Must be an array of {@link IDepartment}
     *
     * @todo To be implemented in next release
     */
    departmentsData?: IDepartment[];
    /**
     * Will be used to complete the town data used internally by the widget allowing use
     * to use you own data
     *
     * Must be an array of {@link ITown}
     *
     * @todo To be implemented in next release
     */
    townsData?: ITown[];
    /**
     * Will be used to complete the district data used internally by the widget allowing use
     * to use you own data
     *
     * Must be an array of {@link IDistrict}
     *
     * @todo To be implemented in next release
     */
    districtsData?: IDistrict[];
    /**
     * Will be used to complete the neighborhood data used internally by the widget allowing use
     * to use you own data
     *
     * Must be an array of {@link INeighborhood}
     *
     * @todo To be implemented in next release
     */
    neighborhoodsData?: INeighborhood[];
    /**
     * If true, the widget will use the hierarchy of the location data.
     * If false, all 4 selects will be displayed and not update will be made when changing a select. That case, make
     * valid any other in the `level` array.
     */
    useHierarchy?: boolean;
    /**
     * If true, a search input will be used instead of the group of selects.
     */
    useSearch?: boolean;
    /**
     * The placeholder for the search input when `useSearch` is true. Ignored otherwise.
     */
    searchPlaceholder?: string;
    /**
     * The text to display when no results are found. Ignored when `useSearch` is false.
     */
    searchNoResultsText?: string;
    /**
     * If true, a specific input will be added to the widget to search the department data.
     */
    enableDepartmentSearch?: boolean;
    /**
     * If true, a specific input will be added to the widget to search the town data.
     */
    enableTownSearch?: boolean;
    /**
     * If true, a specific input will be added to the widget to search the district data.
     */
    enableDistrictSearch?: boolean;
    /**
     * If true, a specific input will be added to the widget to search the neighborhood data.
     */
    enableNeighborhoodSearch?: boolean;
    /**
     * The placeholder for the department search input when `enableDepartmentSearch` is true. Ignored otherwise.
     */
    departmentSearchPlaceholder?: string;
    /**
     * The placeholder for the town search input when `enableTownSearch` is true. Ignored otherwise.
     */
    townSearchPlaceholder?: string;
    /**
     * The placeholder for the district search input when `enableDistrictSearch` is true. Ignored otherwise.
     */
    districtSearchPlaceholder?: string;
    /**
     * The placeholder for the neighborhood search input when `enableNeighborhoodSearch` is true. Ignored otherwise.
     */
    neighborhoodSearchPlaceholder?: string;
    /**
     * The text to display when no results are found. Ignored when `enableDepartmentSearch` is false.
     */
    departmentSearchNoResultsText?: string;
    /**
     * The text to display when no results are found. Ignored when `enableTownSearch` is false.
     */
    townSearchNoResultsText?: string;
    /**
     * The text to display when no results are found. Ignored when `enableDistrictSearch` is false.
     */
    districtSearchNoResultsText?: string;
    /**
     * The text to display when no results are found. Ignored when `enableNeighborhoodSearch` is false.
     */
    neighborhoodSearchNoResultsText?: string;
}
