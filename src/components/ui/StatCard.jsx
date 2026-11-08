import {
  Award,
  Bell,
  Banknote,
  BarChart3,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Folder,
  HardDrive,
  Home,
  LayoutDashboard,
  LayoutGrid,
  Mail,
  Monitor,
  Package,
  PieChart,
  Plus,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Star,
  Tag,
  Tablet,
  TrendingDown,
  TrendingUp,
  Users,
  UserPlus,
} from 'lucide-react'

const LUCIDE_ICONS = {
  Award,
  Bell,
  Banknote,
  BarChart3,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Folder,
  HardDrive,
  Home,
  LayoutDashboard,
  LayoutGrid,
  Mail,
  Monitor,
  Package,
  PieChart,
  Plus,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Star,
  Tag,
  Tablet,
  TrendingDown,
  TrendingUp,
  Users,
  UserPlus,
}

/**
 * StatCard — a responsive stat card for dashboard overviews.
 *
 * @param {Object} props
 * @param {string} props.label - Card label (e.g. "Total Penjualan")
 * @param {string} props.value - Main value (e.g. "Rp 93.366.000")
 * @param {string} props.trend - Trend text, e.g. "+12% this month" (color: up green, down red)
 * @param {string} props.icon - Lucide icon name (e.g. "DollarSign")
 */
export default function StatCard({ label, value, trend, icon }) {
  const Icon = LUCIDE_ICONS[icon]

  const isUp = trend ? String(trend).trimStart().startsWith('+') : false
  const isDown = trend ? String(trend).trimStart().startsWith('-') : false

  const trendClass = isUp
    ? 'text-green-600 bg-green-100'
    : isDown
      ? 'text-red-600 bg-red-100'
      : 'text-gray-600 bg-gray-100'

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" /> : null}
        <span className={`text-sm font-medium flex items-center gap-1 ${trendClass}`}>
          {trend}
        </span>
      </div>
    </div>
  )
}
