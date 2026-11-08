import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activePath, setActivePath] = useState('/')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePath={activePath} onNavigate={setActivePath} open={sidebarOpen} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <main className="flex-1 flex flex-col overflow-hidden lg:pl-64 relative">
        <Header onMenuToggle={() => setSidebarOpen((open) => !open)} />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {children}
          <Outlet />
        </div>
      </main>
    </div>
  )
}
