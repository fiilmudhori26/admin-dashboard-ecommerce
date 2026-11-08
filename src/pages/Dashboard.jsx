import { orders, stats } from '../data/mockData.js'
import StatCard from '../components/ui/StatCard.jsx'
import RevenueChart from '../components/charts/RevenueChart.jsx'

/**
 * Dashboard — admin overview page.
 *
 * Consumes: nothing (reads mockData + components directly).
 * Produces: a page with a responsive grid of StatCards (mockData.stats)
 * followed by a RevenueChart (monthly revenue aggregated from mockData.orders).
 *
 * @returns {import('react').JSX.Element}
 */
export default function Dashboard() {
  // Aggregate order totals per calendar month (YYYY-MM -> total), oldest first.
  const monthlyTotals = (orders ?? []).reduce((acc, order) => {
    const month = order.date.slice(0, 7)
    acc[month] = (acc[month] || 0) + order.total
    return acc
  }, {})

  const revenue = Object.entries(monthlyTotals)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, value]) => ({
      name: new Date(`${month}-01`).toLocaleString('id-ID', {
        month: 'long',
        year: 'numeric',
      }),
      value,
    }))

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">
          Ringkasan penjualan, pesanan, dan pelanggan toko.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats?.length > 0 ? (
          stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))
        ) : (
          <div className="col-span-full p-8 text-center text-sm text-gray-500">
            Tidak ada data ditemukan
          </div>
        )}
      </div>

      <section>
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Pendapatan per Bulan
        </h3>
        <RevenueChart data={revenue} />
      </section>
    </div>
  )
}
