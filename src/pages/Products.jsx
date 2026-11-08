import { useState, useEffect } from 'react'
import { products } from '../data/mockData.js'
import DataTable from '../components/ui/DataTable.jsx'
import useTable from '../hooks/useTable.js'

/**
 * Products — admin products page.
 *
 * Consumes: nothing (reads mockData.products directly).
 * Produces: a page titled "Produk" with a DataTable bound to mockData.products
 * via useTable (sorting, filtering, searching, pagination).
 *
 * Columns: ID, Nama Produk, Kategori, Harga, Stok, Terjual.
 *
 * @returns {import('react').JSX.Element}
 */
export default function Products() {
  const { pageData, setSort, setFilter, setSearch } = useTable({
    initialData: products,
  })

  // Local sort state. useTable.setSort expects
  // { column: string|null, direction: 'asc'|'desc'|null }, not a bare column key.
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)

  const handleSort = (key) => {
    let nextDir
    if (key !== sortColumn) {
      // New column: always start at asc.
      nextDir = 'asc'
    } else {
      // Same column: cycle null → asc → desc → null.
      nextDir = sortDirection === null ? 'asc' : sortDirection === 'asc' ? 'desc' : null
    }
    setSortColumn(key)
    setSortDirection(nextDir)
    setSort({ column: key, direction: nextDir })
  }

  useEffect(() => {
    document.title = 'Produk'
  }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nama Produk' },
    { key: 'category', label: 'Kategori' },
    { key: 'price', label: 'Harga' },
    { key: 'stock', label: 'Stok' },
    { key: 'sold', label: 'Terjual' },
  ]

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Produk</h2>
        <p className="mt-1 text-sm text-gray-500">
          Daftar produk toko.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={pageData ?? []}
        onSort={handleSort}
        onFilter={setFilter}
        onSearch={setSearch}
      />
    </div>
  )
}
