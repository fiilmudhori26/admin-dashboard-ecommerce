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
  const { pageData, setSort, setFilter, setSearch } = useTable({
    initialData: orders,
  })

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
        data={pageData}
        onSort={setSort}
        onFilter={setFilter}
        onSearch={setSearch}
      />
    </div>
  )
}
