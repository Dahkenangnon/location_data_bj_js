# BJ Location Data
Benin Republic location data for web and mobile apps

For mobile (dart/flutter) version, please visit [location_data_bj](https://pub.dev/packages/location_data_bj) dart package

For raw data version, please visit [bj_location_data_raw](https://github.com/Dahkenangnon/bj_location_data_raw) repository

>
>
> Data Snapshot (As of 2023-12-21)
>
> Department: 12
>
> Twon: 77
>
> District: 546
>
> Neighborhood: 5303
>
> The `code` used in the dataset is an auto generated code. Please refer to the [bj_location_data_raw](https://github.com/Dahkenangnon/bj_location_data_raw) repository for more information.
------------------------


## Installation with npm
```bash
npm install location_data_bj
```

## Installation with yarn
```bash
yarn add location_data_bj
```

## Directly in the browser

1. With a CDN

```html
<script src="https://unpkg.com/location_data_bj"></script>
```

2. With a local copy
You can download the latest version of location_data_bj from the [GitHub releases](https://github.com/Dahkenangnon/bj_location_data/releases/latest). Then include the script in your HTML file:

```html
<script src="path/to/your/local/location_data_bj.js"></script>
```

## API


### `departmentList: (sortBy?: 'asc' | 'desc') => IDepartment[]` : Get all departments

### `townsList: (sortBy?: 'asc' | 'desc') => ITown[]` : Get all towns

### `districtList: (sortBy?: 'asc' | 'desc') => IDistrict[]` : Get all districts

### `neighborhoodList: (sortBy?: 'asc' | 'desc') => INeighborhood[]` : Get all neighborhoods

### `department: (code: string) => IDepartment | undefined` : Get a department by its code

### `town: (code: string) => ITown | undefined` : Get a town by its code

### `district: (code: string) => IDistrict | undefined` : Get a district by its code

### `neighborhood: (code: string) => INeighborhood | undefined` : Get a neighborhood by its code

### `townsOfDepartment: (departmentCode: string, sortBy?: 'asc' | 'desc') => ITown[]` : Get towns of a specific department

### `districtsOfTown: (townCode: string, sortBy?: 'asc' | 'desc') => IDistrict[]` : Get districts of a specific town

### `neighborhoodsOfDistrict: (districtCode: string, sortBy?: 'asc' | 'desc') => INeighborhood[]` : Get neighborhoods of a specific district

### `searchData: (query: string, sortBy?: 'asc' | 'desc') => Array<BjLocationData>` : Search data in all categories (departments, towns, districts, neighborhoods)

### `searchDepartments: (query: string, sortBy?: 'asc' | 'desc') => IDepartment[]` : Search departments by name

### `searchTowns: (query: string, sortBy?: 'asc' | 'desc') => ITown[]` : Search towns by name

### `searchDistricts: (query: string, sortBy?: 'asc' | 'desc') => IDistrict[]` : Search districts by name

### `searchNeighborhoods: (query: string, sortBy?: 'asc' | 'desc') => INeighborhood[]` : Search neighborhoods by name

### `init: (options: BjLocationWidgetOptions) => void` : Find the widget holder element using the provided option and plug the widget in it.

### `BjLocationWidgetOptions` : Widget options
    
```typescript
interface BjLocationWidgetOptions {
    holderQuerySelector: string;
    level?: BjLocationType[];
    useSearch?: boolean;
    useDefaultSelect?: boolean;
    useHierarchy?: boolean;
    departmentsData?: IDepartment[];
    searchPlaceholder?: string;
    searchNoResultsText?: string;
    departmentSelectLabel?: string;
    townSelectLabel?: string;
    districtSelectLabel?: string;
    neighborhoodSelectLabel?: string;
    onChanges?: (data: BjLocationData) => void;
    onDepartmentChange?: (data: IDepartment) => void;
    onTownChange?: (data: ITown) => void;
    onDistrictChange?: (data: IDistrict) => void;
    onNeighborhoodChange?: (data: INeighborhood) => void;
}
```

### `BjLocationData` : Data object with type information

```typescript
interface BjLocationData {
    code: string;
    name: string;
    type: BjLocationType;
}
```

### `BjLocationType` : Data type

```typescript
type BjLocationType = 'Department' | 'Town' | 'District' | 'Neighborhood';
```

### `IDepartment` : Department data object

```typescript
interface IDepartment {
    code: string;
    name: string;
}
```

### `ITown` : Town data object

```typescript
interface ITown {
    code: string;
    name: string;
    department_code: string;
}
```

### `IDistrict` : District data object

```typescript
interface IDistrict {
    code: string;
    name: string;
    town_code: string;
}
```

### `INeighborhood` : Neighborhood data object

```typescript
interface INeighborhood {
    code: string;
    name: string;
    district_code: string;
}
```
****
## Widget HTML structure

The widget html structure is as follow:
```html

<div class="search-container">
        <input type="text" name="search-input" id="search-input" placeholder="Search..." />
        <div class="search-results-container">
            <!-- The results will be added here -->
        </div>
    </div>

    <!-- When useSearch is false or not set, the below only will be display -->
    <div class="department-container">
        <select name="department-select" id="department-select">
            <option value="">Select a department</option>
            <!-- The options will be added here -->
        </select>
    </div>
    <div class="town-container">
        <select name="town-select" id="town-select">
            <option value="">Select a town</option>
            <!-- The options will be added here -->
        </select>
    </div>
    <div class="district-container">
        <select name="district-select" id="district-select">
            <option value="">Select a district</option>
            <!-- The options will be added here -->
        </select>
    </div>
    <div class="neighborhood-container">
        <select name="neighborhood-select" id="neighborhood-select">
            <option value="">Select a neighborhood</option>
            <!-- The options will be added here -->
        </select>
    </div>
</div>
```

## Widget CSS Sample
    
```css
 /* General styles for the widget container */
#locationDataBJ-widget {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Styles for search container */
.search-container {
    margin-bottom: 20px;
}

.search-container input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-results-container {
    border-top: 1px solid #ccc;
    padding-top: 10px;
}

/* Styles for select elements in the form */
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
}

/* Style for individual containers */
.department-container,
.town-container,
.district-container,
.neighborhood-container {
    margin-bottom: 10px;
}

```
    
## Widget JS Sample

```javascript
BjLocationData.init({
    holderQuerySelector: '#locationDataBJ-widget',
    level: ['Department', 'Town', 'District', 'Neighborhood'],
    useSearch: true,
    useDefaultSelect: true,
    useHierarchy: true,
    searchPlaceholder: 'Search...',
    searchNoResultsText: 'No results found',
    departmentSelectLabel: 'Select a department',
    townSelectLabel: 'Select a town',
    districtSelectLabel: 'Select a district',
    neighborhoodSelectLabel: 'Select a neighborhood',
    onChanges: (data) => {
        console.log(data);
    },
    onDepartmentChange: (data) => {
        console.log(data);
    },
    onTownChange: (data) => {
        console.log(data);
    },
    onDistrictChange: (data) => {
        console.log(data);
    },
    onNeighborhoodChange: (data) => {
        console.log(data);
    }
});
```

For more example, please see the [index.html file](/public/index.html)


## Disclaimer
Please note that the dataset used is not official. It is based on the work done by the [Junior Gantin](https://github.com/nioperas06) at [this repos](https://github.com/nioperas06/bj-decoupage-territorial).


## License
Bj Location Data is crafted with ❤️ by [Dah-Kenangnon Justin](https://dah-kenangnon.com) and is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

These person has helped me for cleaning the data and making it easier to use in dart and javascript:

- Big thanks to [Jude AGBODOYETIN](https://github.com/Jude200)
- Big thanks to [Yanel Aïna](https://github.com/yanelaina)
