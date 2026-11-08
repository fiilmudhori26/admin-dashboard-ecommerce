import { ChevronDown, Menu, User } from 'lucide-react'

export default function Header({ onMenuToggle }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 shrink-0"
    >
      <button
        type="button"
        onClick={onMenuToggle}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle navigation"
        aria-expanded="false"
      >
        <Menu size={20} strokeWidth={2} />
      </button>
      <div className="flex items-center gap-4 shrink-0">
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs">
              <User size={18} strokeWidth={2} />
            </span>
            <span className="text-sm font-medium text-gray-900 hidden sm:inline">Admin</span>
            <ChevronDown size={16} strokeWidth={2} className="ml-1 flex-shrink-0" />
            {/* TODO: wire profile dropdown menu (placeholder) */}
          </button>
        </div>
      </div>
    </header>
  )
}
