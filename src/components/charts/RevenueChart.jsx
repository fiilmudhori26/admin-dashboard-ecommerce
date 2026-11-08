import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

/**
 * RevenueChart — line chart for revenue analytics.
 *
 * @param {Object} props
 * @param {Array<{ name: string, value: number }>} props.data - Chart data points
 */
export default function RevenueChart({ data = [] }) {
  const hasData = Array.isArray(data) && data.length > 0

  if (!hasData) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
        <p className="text-sm text-gray-500">Tidak ada data pendapatan</p>
      </div>
    )
  }

  const formatValue = (value) => `Rp ${Number(value).toLocaleString('id-ID')}`

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="revenue-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => formatValue(value)} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ fill: '#2563eb' }}
              fillOpacity={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
