import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowUpDown } from 'lucide-react'

const PAGE_SIZE = 10

// Status cell badge styling (order statuses from mockData).
const STATUS_BADGE = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Processing: 'bg-blue-100 text-blue-800',
  Shipped: 'bg-indigo-100 text-indigo-800',
  Delivered: 'bg-green-100 text-green-800',
  Cancelled: 'bg-red-100 text-red-800',
}

/**
 * DataTable — a sortable, filterable, searchable, paginated table.
 *
 * @param {Object} props
 * @param {Array} props.columns - [{ key, label }]
 * @param {Array} props.data - Row data (full filtered/sorted set; DataTable owns pagination)
 * @param {Function} props.onSort - (columnKey) => void, called on header click
 * @param {Function} props.onFilter - (value) => void, called on filter input change
 * @param {Function} props.onSearch - (query) => void, called on search input change
 */
export default function DataTable({ columns = [], data = [], loading = false, onSort, onFilter, onSearch }) {
  const [page, setPage] = useState(1)

  const totalPages = useMemo(() => Math.max(1, Math.ceil(data.length / PAGE_SIZE)), [data.length])

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [data.length, page, totalPages])

  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageData = data.slice(start, start + PAGE_SIZE)

  const handleSort = useCallback(
    (key) => {
      if (typeof onSort === 'function' && key != null) {
        onSort(key)
      }
    },
    [onSort]
  )

  const handleFilter = useCallback(
    (event) => {
      if (typeof onFilter === 'function') {
        onFilter(event.target.value)
      }
    },
    [onFilter]
  )

  const handleSearch = useCallback(
    (event) => {
      if (typeof onSearch === 'function') {
        onSearch(event.target.value)
      }
    },
    [onSearch]
  )

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:flex sm:flex-col sm:items-start sm:justify-between gap-3 lg:flex-row lg:items-center">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="relative w-full sm:w-64">
            <span className="absolute left-2.5 top-2.5 text-gray-400 text-sm" aria-hidden="true">
              🔍
            </span>
            <input
              type="search"
              placeholder="Cari data..."
              aria-label="Cari data"
              className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none block w-full"
              onChange={handleSearch}
            />
          </div>
          <div className="relative w-full sm:w-64">
            <span className="absolute left-2.5 top-2.5 text-gray-400 text-sm" aria-hidden="true">
              🔽
            </span>
            <input
              type="text"
              placeholder="Filter..."
              aria-label="Filter"
              className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none block w-full"
              onChange={handleFilter}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => handleSort(column.key)}
                  role="button"
                  tabIndex={0}
                  aria-sort="none"
                >
                  {column.label}
                  <ArrowUpDown className="ml-1 w-3 h-3 text-gray-400 flex-shrink-0" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              [...Array(3)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-3">
                      <div className="h-4 bg-gray-200 rounded-md w-1/2" />
                    </td>
                  ))}
                </tr>
              ))
            ) : pageData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-sm text-gray-500"
                >
                  Tidak ada data ditemukan
                </td>
              </tr>
            ) : (
              pageData.map((row, rowIndex) => (
                <tr
                  key={row.id != null ? row.id : `row-${rowIndex}`}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column) => {
                    const value = row[column.key]
                    if (value == null) {
                      return (
                        <td key={column.key} className="px-4 py-3 text-sm text-gray-700">
                          -
                        </td>
                      )
                    }
                    if (column.key === 'status') {
                      return (
                        <td key={column.key} className="px-4 py-3 text-sm text-gray-700">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                              STATUS_BADGE[value] ?? 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {value}
                          </span>
                        </td>
                      )
                    }
                    return (
                      <td key={column.key} className="px-4 py-3 text-sm text-gray-700">
                        {value}
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 sm:flex sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          Menampilkan{' '}
          {data.length > 0 ? start + 1 : 0} –{' '}
          {Math.min(start + pageData.length, data.length)} dari {data.length}
        </p>
        <div className="flex items-center gap-1 mt-2 sm:mt-0">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="px-2.5 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sebelumnya
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const p = index + 1
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-6 h-6 text-sm rounded-md ${
                  p === currentPage ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {p}
              </button>
            )
          })}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-2.5 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Berikutnya
          </button>
        </div>
      </div>
    </div>
  )
}
