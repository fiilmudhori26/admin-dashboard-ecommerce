import { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import DataTable from '../DataTable'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nama' },
  { key: 'status', label: 'Status' },
]

const initialData = [
  { id: 3, name: 'Produk C', status: 'Shipped' },
  { id: 1, name: 'Produk A', status: 'Pending' },
  { id: 2, name: 'Produk B', status: 'Delivered' },
]

function TableWrapper() {
  const [data, setData] = useState(initialData)

  const handleSort = (key) => {
    setData((prev) => [...prev].sort((a, b) => String(a[key] ?? '').localeCompare(String(b[key] ?? ''))))
  }

  const handleSearch = (query) => {
    const q = String(query ?? '').toLowerCase()
    setData((prev) => prev.filter((row) => String(row.name ?? '').toLowerCase().includes(q)))
  }

  const handleFilter = (value) => {
    const v = String(value ?? '').toLowerCase()
    setData((prev) => prev.filter((row) => String(row.status ?? '').toLowerCase().includes(v)))
  }

  return (
    <DataTable columns={columns} data={data} onSort={handleSort} onFilter={handleFilter} onSearch={handleSearch} />
  )
}

const rowNames = () => screen.getAllByText(/^Produk [ABC]$/).map((cell) => cell.textContent)

describe('DataTable', () => {
  it('changes row order when a sort header is clicked', () => {
    render(<TableWrapper />)

    expect(rowNames()).toEqual(['Produk C', 'Produk A', 'Produk B'])

    fireEvent.click(screen.getByRole('button', { name: 'Nama' }))

    expect(rowNames()).toEqual(['Produk A', 'Produk B', 'Produk C'])
  })

  it('reduces rows when filtering', () => {
    render(<TableWrapper />)

    expect(rowNames()).toHaveLength(3)

    fireEvent.change(screen.getByPlaceholderText('Filter...'), { target: { value: 'Delivered' } })

    expect(rowNames()).toHaveLength(1)
    expect(screen.getByText('Produk B')).toBeInTheDocument()
    expect(screen.getByText('Delivered')).toBeInTheDocument()
  })

  it('matches search text against rows', () => {
    render(<TableWrapper />)

    fireEvent.change(screen.getByPlaceholderText('Cari data...'), { target: { value: 'produk a' } })

    expect(rowNames()).toHaveLength(1)
    expect(screen.getByText('Produk A')).toBeInTheDocument()
  })
})
