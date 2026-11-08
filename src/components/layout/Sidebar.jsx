import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronRight, LayoutDashboard, Package, ShoppingCart, Users, User } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/', Icon: LayoutDashboard },
  { label: 'Pesanan', path: '/orders', Icon: ShoppingCart },
  { label: 'Produk', path: '/products', Icon: Package },
  { label: 'Pelanggan', path: '/customers', Icon: Users },
  { label: 'Profil', path: '/profile', Icon: User },
]

export default function Sidebar({ activePath = '/', onNavigate, open = false }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (path) => {
    navigate(path)
    if (typeof onNavigate === 'function') {
      onNavigate(path)
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <aside
      className={[
        'fixed inset-y-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200',
        'flex flex-col transform transition-transform duration-300 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0',
      ].join(' ')}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-16 border-b border-gray-200 px-4 shrink-0">
        <span className="font-semibold text-gray-900 tracking-tight">Admin</span>
      </div>
      <nav className="flex-1 overflow-y-auto py-3 shrink-0">
        <ul className="space-y-1 px-3">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path)
            return (
              <li key={item.path}>
                <button
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  className={[
                    'flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg shrink-0 transition-colors',
                    active
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                  ].join(' ')}
                >
                  <item.Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight className="ml-auto w-4 h-4 flex-shrink-0 text-gray-400" />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
