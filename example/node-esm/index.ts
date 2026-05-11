/**
 * Node.js native ESM consumer example
 *
 * Resolves: dist/esm/index.js  (via "import" export condition)
 * Type-safe: uses re-exported types from location_data_bj
 */
import {
  departmentList,
  townsOfDepartment,
  districtsOfTown,
  neighborhoodsOfDistrict,
  searchData,
} from 'location_data_bj';

import type { IDepartment, ITown, IDistrict, INeighborhood } from 'location_data_bj';

// ─── Typed variables prove the type re-exports work ──────────────────────────

const departments: IDepartment[] = departmentList();
console.log(`Departments (${departments.length}):`);
departments.slice(0, 3).forEach(d => console.log(`  [${d.code}] ${d.name}`));

// ─── Hierarchy traversal ──────────────────────────────────────────────────────

const firstDept = departments[0];
const towns: ITown[] = townsOfDepartment(firstDept.code);
console.log(`\ntownsOfDepartment('${firstDept.code}') → ${towns.length} towns, first: ${towns[0]?.name}`);

const districts: IDistrict[] = towns[0] ? districtsOfTown(towns[0].code) : [];
console.log(`districtsOfTown('${towns[0]?.code}') → ${districts.length} districts`);

const neighborhoods: INeighborhood[] = districts[0] ? neighborhoodsOfDistrict(districts[0].code) : [];
console.log(`neighborhoodsOfDistrict('${districts[0]?.code}') → ${neighborhoods.length} neighborhoods`);

// ─── Search ───────────────────────────────────────────────────────────────────

const results = searchData('porto');
console.log(`\nsearchData('porto') → ${results.length} result(s):`);
results.forEach(r => console.log(`  [${r.type}] ${r.name}`));

console.log('\n✓ Node.js ESM (dist/esm) — all good');
