import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import StatCard from '../StatCard'

describe('StatCard', () => {
  it('renders label, value, and trend text', () => {
    render(
      <StatCard label="Total Penjualan" value="Rp 93.366.000" trend="+12% this month" icon="DollarSign" />
    )

    expect(screen.getByText('Total Penjualan')).toBeInTheDocument()
    expect(screen.getByText('Rp 93.366.000')).toBeInTheDocument()
    expect(screen.getByText('+12% this month')).toBeInTheDocument()
  })
})
