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
> Town: 77
>
> District: 546
>
> Neighborhood: 5303
>
> The `code` used in the dataset is an auto generated code. Please refer to the [bj_location_data_raw](https://github.com/Dahkenangnon/bj_location_data_raw) repository for more information.
------------------------

## Demo
Demo at: [https://dahkenangnon.github.io/location_data_bj_js/](https://dahkenangnon.github.io/location_data_bj_js/)

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
<script src="https://unpkg.com/location_data_bj@1.0.3/public/dist/bundle.js"></script>
```

2. With a local copy
You can download the latest version of location_data_bj from the [GitHub releases](https://github.com/Dahkenangnon/bj_location_data/releases/latest). Then include the script in your HTML file:

```html
<script src="path/to/your/local/location_data_bj.js"></script>
```

## API


*`departmentList: (sortBy?: 'asc' | 'desc') => IDepartment[]`*: Get all departments

*`townsList: (sortBy?: 'asc' | 'desc') => ITown[]`* : Get all towns

*`districtList: (sortBy?: 'asc' | 'desc') => IDistrict[]`* : Get all districts

*`neighborhoodList: (sortBy?: 'asc' | 'desc') => INeighborhood[]`* : Get all neighborhoods

*`department: (code: string) => IDepartment | undefined`* : Get a department by its code

*`town: (code: string) => ITown | undefined`* : Get a town by its code

*`district: (code: string) => IDistrict | undefined`* : Get a district by its code

*`neighborhood: (code: string) => INeighborhood | undefined`* : Get a neighborhood by its code

*`townsOfDepartment: (departmentCode: string, sortBy?: 'asc' | 'desc') => ITown[]`* : Get towns of a specific department

*`districtsOfTown: (townCode: string, sortBy?: 'asc' | 'desc') => IDistrict[]`* : Get districts of a specific town

*`neighborhoodsOfDistrict: (districtCode: string, sortBy?: 'asc' | 'desc') => INeighborhood[]`* : Get neighborhoods of a specific district

*`searchData: (query: string, sortBy?: 'asc' | 'desc') => Array<BjLocationData>`* : Search data in all categories (departments, towns, districts, neighborhoods)

*`searchDepartments: (query: string, sortBy?: 'asc' | 'desc') => IDepartment[]`* : Search departments by name

*`searchTowns: (query: string, sortBy?: 'asc' | 'desc') => ITown[]`* : Search towns by name

*`searchDistricts: (query: string, sortBy?: 'asc' | 'desc') => IDistrict[]`* : Search districts by name

*`searchNeighborhoods: (query: string, sortBy?: 'asc' | 'desc') => INeighborhood[]`* : Search neighborhoods by name

*`init: (options: BjLocationWidgetOptions) => void`* : Find the widget holder element using the provided option and plug the widget in it.

    
## Widget JS Sample

For a sample, please see the [index.html file](/public/index.html)


## Disclaimer
Please note that the dataset used is not official. It is based on the work done by [Junior Gantin](https://github.com/nioperas06) at [this repos](https://github.com/nioperas06/bj-decoupage-territorial).


## License
Bj Location Data is crafted with ❤️ by [Dah-Kenangnon Justin](https://dah-kenangnon.com) and is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

These person has helped me for cleaning the data and making it easier to use in dart and javascript:

- Big thanks to [Jude AGBODOYETIN](https://github.com/Jude200)
- Big thanks to [Yanel Aïna](https://github.com/yanelaina)
