import { useEffect, useState } from 'react'
import { orders } from '../data/mockData.js'
import DataTable from '../components/ui/DataTable.jsx'
import useTable from '../hooks/useTable.js'

/**
 * Orders — admin orders page.
 *
 * Consumes: nothing (reads mockData.orders directly).
 * Produces: a page titled "Pesanan" with a DataTable bound to mockData.orders
 * via useTable (sorting, filtering, searching, pagination).
 *
 * Columns: ID, Pelanggan, Tanggal, Total, Status.
 *
 * @returns {import('react').JSX.Element}
 */
export default function Orders() {
  const { sortedData, setSort, setFilter, setSearch } = useTable({
    initialData: orders,
  })

  // Local direction-toggle state. useTable.setSort expects
  // { column: string|null, direction: 'asc'|'desc'|null }, not a bare column key.
  const [sortDirection, setSortDirection] = useState(null) // 'asc' | 'desc' | null

  useEffect(() => {
    document.title = 'Pesanan'
  }, [])

  const handleSort = (key) => {
    const nextDir = sortDirection === null ? 'asc' : sortDirection === 'asc' ? 'desc' : null
    setSortDirection(nextDir)
    setSort({ column: key, direction: nextDir })
  }

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'customer', label: 'Pelanggan' },
    { key: 'date', label: 'Tanggal' },
    { key: 'total', label: 'Total' },
    { key: 'status', label: 'Status' },
  ]

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Pesanan</h2>
        <p className="mt-1 text-sm text-gray-500">
          Daftar pesanan pelanggan toko.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={sortedData ?? []}
        onSort={handleSort}
        onFilter={setFilter}
        onSearch={setSearch}
      />
    </div>
  )
}
