import { useState } from 'react'
import {
  departmentList,
  townsOfDepartment,
  districtsOfTown,
  neighborhoodsOfDistrict,
} from 'location_data_bj'
import type { IDepartment, ITown, IDistrict, INeighborhood } from 'location_data_bj'

// Computed once at module scope — data is static
const departments: IDepartment[] = departmentList()

type Selection = {
  department: string
  town: string
  district: string
  neighborhood: string
}

const EMPTY: Selection = { department: '', town: '', district: '', neighborhood: '' }

function Select({
  label,
  value,
  options,
  disabled,
  onChange,
}: {
  label: string
  value: string
  options: Array<{ code: string; name: string }>
  disabled: boolean
  onChange: (code: string) => void
}) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontWeight: 600, marginBottom: 4,
        fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6b7280',
      }}>
        {label}
        {disabled && <span style={{ fontWeight: 400, marginLeft: 6, color: '#d1d5db' }}>— pick {label === 'Town' ? 'a department' : label === 'District' ? 'a town' : 'a district'} first</span>}
      </label>
      <select
        value={value}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%', padding: '9px 12px', borderRadius: 8,
          border: '1px solid #e5e7eb', fontSize: 14,
          background: disabled ? '#f9fafb' : '#fff',
          color: disabled ? '#9ca3af' : '#111827',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
        }}
      >
        <option value="">— select —</option>
        {options.map(o => (
          <option key={o.code} value={o.code}>{o.name}</option>
        ))}
      </select>
    </div>
  )
}

export default function App() {
  const [sel, setSel] = useState<Selection>(EMPTY)

  const towns: ITown[]        = sel.department  ? townsOfDepartment(sel.department)     : []
  const districts: IDistrict[] = sel.town       ? districtsOfTown(sel.town)              : []
  const neighborhoods: INeighborhood[] = sel.district ? neighborhoodsOfDistrict(sel.district) : []

  function pick(level: keyof Selection, code: string) {
    setSel(prev => {
      const next = { ...prev, [level]: code }
      if (level === 'department') { next.town = ''; next.district = ''; next.neighborhood = '' }
      if (level === 'town')       { next.district = ''; next.neighborhood = '' }
      if (level === 'district')   { next.neighborhood = '' }
      return next
    })
  }

  const counts = [
    `${departments.length} depts`,
    sel.department ? `${towns.length} towns` : '77 towns',
    sel.town ? `${districts.length} districts` : '546 districts',
    sel.district ? `${neighborhoods.length} neighborhoods` : '5 303 neighborhoods',
  ]

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: 460, margin: '3rem auto', padding: '2rem 2rem 1.5rem',
      border: '1px solid #e5e7eb', borderRadius: 14,
      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
    }}>
      <h1 style={{ margin: '0 0 0.2rem', fontSize: '1.1rem', fontWeight: 700, color: '#111827' }}>
        Benin Republic — Location Selector
      </h1>
      <p style={{ margin: '0 0 1.75rem', color: '#9ca3af', fontSize: 12 }}>
        {counts.join(' · ')}
      </p>

      <Select
        label="Department"
        value={sel.department}
        options={departments}
        disabled={false}
        onChange={code => pick('department', code)}
      />
      <Select
        label="Town"
        value={sel.town}
        options={towns}
        disabled={!sel.department}
        onChange={code => pick('town', code)}
      />
      <Select
        label="District"
        value={sel.district}
        options={districts}
        disabled={!sel.town}
        onChange={code => pick('district', code)}
      />
      <Select
        label="Neighborhood"
        value={sel.neighborhood}
        options={neighborhoods}
        disabled={!sel.district}
        onChange={code => pick('neighborhood', code)}
      />

      {sel.neighborhood && (
        <pre style={{
          marginTop: '1.5rem', background: '#f8fafc', padding: '1rem',
          borderRadius: 8, fontSize: 12, overflow: 'auto',
          border: '1px solid #e5e7eb', color: '#374151',
        }}>
          {JSON.stringify(sel, null, 2)}
        </pre>
      )}
    </div>
  )
}
