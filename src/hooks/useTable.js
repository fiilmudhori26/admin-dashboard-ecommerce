import { useMemo, useState } from 'react'

const PAGE_SIZE = 10

/**
 * useTable — sorting, filtering, searching and pagination state for data tables.
 *
 * @param {Array} initialData - Raw row data.
 * @returns {{
 *   sortedData: Array,
 *   sort: { column: string|null, direction: 'asc'|'desc'|null },
 *   setSort: (sort: { column: string|null, direction: 'asc'|'desc'|null }) => void,
 *   filteredData: Array,
 *   setFilter: (value: string) => void,
 *   setSearch: (query: string) => void,
 *   pageData: Array,
 * }}
 */
export default function useTable({ initialData }) {
  const data = useMemo(() => initialData ?? [], [initialData])

  const [sort, setSort] = useState({ column: null, direction: null })
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filteredData = useMemo(() => {
    const f = String(filter).toLowerCase()
    const s = String(search).toLowerCase()
    if (!f && !s) return data
    return data.filter((row) => {
      const values = Object.values(row)
        .filter((value) => value != null)
        .map((value) => String(value).toLowerCase())
      const matchFilter = !f || values.some((value) => value.includes(f))
      const matchSearch = !s || values.some((value) => value.includes(s))
      return matchFilter && matchSearch
    })
  }, [data, filter, search])

  const sortedData = useMemo(() => {
    const { column, direction } = sort
    if (!column || !direction) return filteredData
    return [...filteredData].sort((a, b) => {
      const av = a[column]
      const bv = b[column]
      if (av == null && bv == null) return 0
      if (av == null) return direction === 'asc' ? 1 : -1
      if (bv == null) return direction === 'asc' ? -1 : 1
      let cmp = 0
      if (av < bv) cmp = -1
      else if (av > bv) cmp = 1
      return direction === 'asc' ? cmp : -cmp
    })
  }, [filteredData, sort])

  const pageData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return sortedData.slice(start, start + PAGE_SIZE)
  }, [sortedData, page])

  return {
    sortedData,
    sort,
    setSort,
    filteredData,
    setFilter,
    setSearch,
    pageData,
  }
}
