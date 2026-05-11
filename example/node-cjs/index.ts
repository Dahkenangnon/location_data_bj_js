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
} from 'location_data_bj';

// ─── Lists ────────────────────────────────────────────────────────────────────

const departments = departmentList();
console.log(`Departments (${departments.length}):`);
departments.slice(0, 3).forEach(d => console.log(`  [${d.code}] ${d.name}`));

const towns = townsList();
console.log(`\nTowns (${towns.length}), first 3:`);
towns.slice(0, 3).forEach(t => console.log(`  [${t.code}] ${t.name} — dept: ${t.department_code}`));

const districts = districtList();
console.log(`\nDistricts (${districts.length})`);

const neighborhoods = neighborhoodList();
console.log(`Neighborhoods (${neighborhoods.length})`);

// ─── Single lookup ────────────────────────────────────────────────────────────

const firstDeptCode = departments[0].code;
const dept = department(firstDeptCode);
console.log(`\ndepartment('${firstDeptCode}') →`, dept);

const firstTownCode = towns[0].code;
const t = town(firstTownCode);
console.log(`town('${firstTownCode}') →`, t);

const firstDistrictCode = districts[0].code;
const d = district(firstDistrictCode);
console.log(`district('${firstDistrictCode}') →`, d);

const firstNeighborhoodCode = neighborhoods[0].code;
const n = neighborhood(firstNeighborhoodCode);
console.log(`neighborhood('${firstNeighborhoodCode}') →`, n);

// ─── Hierarchy traversal ──────────────────────────────────────────────────────

const townsInFirstDept = townsOfDepartment(firstDeptCode);
console.log(`\ntownsOfDepartment('${firstDeptCode}') → ${townsInFirstDept.length} towns, first:`, townsInFirstDept[0]);

if (townsInFirstDept.length > 0) {
  const districtsInFirstTown = districtsOfTown(townsInFirstDept[0].code);
  console.log(`districtsOfTown('${townsInFirstDept[0].code}') → ${districtsInFirstTown.length} districts`);

  if (districtsInFirstTown.length > 0) {
    const nbhds = neighborhoodsOfDistrict(districtsInFirstTown[0].code);
    console.log(`neighborhoodsOfDistrict('${districtsInFirstTown[0].code}') → ${nbhds.length} neighborhoods`);
  }
}

// ─── Search ───────────────────────────────────────────────────────────────────

const results = searchData('coto');
console.log(`\nsearchData('coto') → ${results.length} result(s):`);
results.slice(0, 5).forEach(r => console.log(`  [${r.type}] ${r.name}`));

console.log('\n✓ All API calls completed successfully');
