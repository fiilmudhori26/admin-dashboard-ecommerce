import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Profile from './pages/Profile'

/**
 * App — application shell with React Router wiring.
 *
 * Produces: BrowserRouter > Routes > Layout-wrapped routes for all 5 pages:
 *   /        → Dashboard
 *   /orders  → Orders
 *   /products → Products
 *   /customers → Customers
 *   /profile → Profile
 *
 * Layout is mounted once (pathless layout route) and renders Sidebar +
 * Header + Outlet, so sidebar/header state persists across navigations.
 *
 * @returns {import('react').JSX.Element}
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
