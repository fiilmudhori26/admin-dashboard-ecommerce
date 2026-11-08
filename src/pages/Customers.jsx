import { useState, useEffect } from 'react'
import { customers } from '../data/mockData.js'
import DataTable from '../components/ui/DataTable.jsx'
import useTable from '../hooks/useTable.js'

/**
 * Customers — admin customers page.
 *
 * Consumes: nothing (reads mockData.customers directly).
 * Produces: a page titled "Pelanggan" with a DataTable bound to
 * mockData.customers via useTable (sorting, filtering, searching, pagination).
 *
 * Columns: ID, Nama, Email, Jumlah Pesanan, Total Belanja, Bergabung.
 *
 * @returns {import('react').JSX.Element}
 */
export default function Customers() {
  const { pageData, setSort, setFilter, setSearch } = useTable({
    initialData: customers,
  })

  // Local sort state. useTable.setSort expects
  // { column: string|null, direction: 'asc'|'desc'|null }, not a bare column key.
  // Track sortColumn so that switching to a new column always starts at `asc`.
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)

  const handleSort = (key) => {
    let nextDir
    if (key !== sortColumn) {
      // New column: always start at asc.
      nextDir = 'asc'
    } else {
      // Same column: cycle null → asc → desc → null.
      nextDir =
        sortDirection === null ? 'asc' : sortDirection === 'asc' ? 'desc' : null
    }
    setSortColumn(key)
    setSortDirection(nextDir)
    setSort({ column: key, direction: nextDir })
  }

  useEffect(() => {
    document.title = 'Pelanggan'
  }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nama' },
    { key: 'email', label: 'Email' },
    { key: 'orders', label: 'Jumlah Pesanan' },
    { key: 'spent', label: 'Total Belanja' },
    { key: 'joined', label: 'Bergabung' },
  ]

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Pelanggan</h2>
        <p className="mt-1 text-sm text-gray-500">
          Daftar pelanggan toko.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={pageData}
        onSort={handleSort}
        onFilter={setFilter}
        onSearch={setSearch}
      />
    </div>
  )
}
