# Admin Dashboard E-Commerce Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a frontend-only React admin dashboard for e-commerce analytics with mock data, including dashboard statistics, orders/products/customers tables with sorting/filter/search, Recharts visualizations, responsive sidebar layout, and deploy-ready setup.

**Architecture:** Single-page React app using Vite, React Router DOM for navigation, Tailwind CSS for styling, Recharts for charts, Lucide React for icons. Mock data lives in a single `src/data/mockData.js`. A `Layout` wrapper provides fixed left sidebar, top header, and scrollable content area. Pages split by responsibility under `src/pages/`, shared UI under `src/components/ui/`, charts under `src/components/charts/`, layout under `src/components/layout/`.

**Tech Stack:** React 18, Vite, React Router DOM, Tailwind CSS, Recharts, Lucide React, JavaScript (no TypeScript per spec), Vitest + React Testing Library for key component tests.

**Spec:** docs/superpowers/specs/YYYY-MM-DD-admin-dashboard-design.md

## Global Constraints

- Frontend-only, mock data statis, no backend atau autentikasi nyata
- Stack: React + Vite + Tailwind CSS + React Router
- Estimasi waktu: 1–2 minggu (paruh waktu)
- Deploy: Vercel atau Netlify
- Commit history rapih dan code terstruktur
- Responsif di desktop dan mobile

## Review Focus

- Empty state: tabel kosong saat filter tidak cocok data apa pun
- Mobile viewport: sidebar collapse / toggle behavior di layar kecil
- Large dataset: tabel tetap responsif dengan banyak baris data dummy
- Invalid/missing mock data field: komponen tidak crash jika field data hilang
- Chart with zero or single data point: grafik tidak error pada data minimal

---

## File Structure

Create:
- `index.html` — Vite entry HTML dengan root div
- `vite.config.js` — Vite config
- `src/main.jsx` — React entry point, render App ke root
- `src/index.css` — Tailwind directives + base styles
- `src/App.jsx` — BrowserRouter, Routes, route definitions
- `src/data/mockData.js` — array orders, products, customers, stats
- `src/components/layout/Sidebar.jsx` — navigasi kiri fixed, link ke halaman
- `src/components/layout/Header.jsx` — header atas, user profile, menu mobile
- `src/components/layout/Layout.jsx` — wrapper Sidebar + Header + Outlet
- `src/components/ui/StatCard.jsx` — kartu statistik (label, nilai, tren, ikon)
- `src/components/ui/DataTable.jsx` — tabel dengan sorting, filter, pencarian, empty state
- `src/components/charts/RevenueChart.jsx` — line/bar chart dengan Recharts
- `src/pages/Dashboard.jsx` — halaman utama: stat cards + revenue chart
- `src/pages/Orders.jsx` — tabel pesanan dengan DataTable
- `src/pages/Products.jsx` — tabel produk dengan DataTable
- `src/pages/Customers.jsx` — tabel pelanggan dengan DataTable
- `src/pages/Profile.jsx` — halaman profil sederhana
- `src/hooks/useTable.js` — custom hook untuk state tabel (sort, filter, search, paginasi)
- `vitest.config.js` — Vitest config
- `src/components/ui/__tests__/StatCard.test.jsx` — test render StatCard
- `src/components/ui/__tests__/DataTable.test.jsx` — test sorting/filter/search
- `README.md` — setup, run, deploy instructions

---

### Task 1: Project scaffolding and dependencies

**Files:**
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/index.css`
- Modify: `package.json` (dependencies, scripts)

**Interfaces:**
- Produces: running `npm run dev` starts Vite dev server on localhost:5173 without errors

- [ ] **Step 1: Scaffold Vite + React project**

Run: `npm create vite@latest . -- --template react` (or equivalent in existing folder)

- [ ] **Step 2: Install dependencies**

Run: `npm install react-router-dom tailwindcss postcss autoprefixer recharts lucide-react`

Run: `npx tailwindcss init -p` (generate tailwind.config.js and postcss.config.js)

- [ ] **Step 3: Configure Tailwind**

Edit `tailwind.config.js` content paths; edit `src/index.css` with `@tailwind` directives

- [ ] **Step 4: Verify dev server runs**

Run: `npm run dev`
Expected: Vite server starts, no build errors, page loads at localhost:5173

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React project with Tailwind CSS"
```

---

### Task 2: Mock data module

**Files:**
- Create: `src/data/mockData.js`

**Interfaces:**
- Consumes: none
- Produces: exported arrays `orders`, `products`, `customers`, `stats` with consistent field shapes

`orders`: `[{ id, customer, date, total, status, items }]`
`products`: `[{ id, name, category, price, stock, sold }]`
`customers`: `[{ id, name, email, orders, spent, joined }]`
`stats`: `[{ label, value, trend, icon }]`

- [ ] **Step 1: Write mock data file**

Create `src/data/mockData.js` with ~20 orders, ~15 products, ~12 customers, 4 stat cards. Use realistic Indonesian e-commerce data (namanya, kota, produk).

- [ ] **Step 2: Verify data imports without error**

Run: `node -e "const d = require('./src/data/mockData.js'); console.log(d.orders.length)"` (or vitest smoke test)

- [ ] **Step 3: Commit**

```bash
git add src/data/mockData.js
git commit -m "feat: add mock data for orders, products, customers, stats"
```

---

### Task 3: Layout components (Sidebar, Header, Layout)

**Files:**
- Create: `src/components/layout/Sidebar.jsx`
- Create: `src/components/layout/Header.jsx`
- Create: `src/components/layout/Layout.jsx`

**Interfaces:**
- `Sidebar` consumes: `activePath` (string), `onNavigate` (path => void). Produces: nav links with active styling.
- `Header` consumes: `onMenuToggle` (() => void). Produces: top bar with mobile toggle and user avatar.
- `Layout` consumes: children. Produces: sidebar + header + main content area with `Outlet`.

- [ ] **Step 1: Write Sidebar.jsx**

Fixed left sidebar, nav items (Dashboard, Pesanan, Produk, Pelanggan, Profil), active state highlight, collapse on mobile.

- [ ] **Step 2: Write Header.jsx**

Top bar, hamburger menu icon (Lucide), user profile dropdown placeholder.

- [ ] **Step 3: Write Layout.jsx**

Wrapper with Sidebar, Header, and `<Outlet />` in scrollable main area. Responsive classes: sidebar hidden on `<lg`, overlay on mobile.

- [ ] **Step 4: Verify layout renders**

Run dev server, visit any route, confirm sidebar + header visible, no console errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/
git commit -m "feat: add Sidebar, Header, and Layout components"
```

---

### Task 4: UI components (StatCard, DataTable)

**Files:**
- Create: `src/components/ui/StatCard.jsx`
- Create: `src/components/ui/DataTable.jsx`
- Create: `src/hooks/useTable.js`

**Interfaces:**
- `StatCard` consumes: `{ label, value, trend, icon }`. Produces: stat card element.
- `DataTable` consumes: `{ columns, data, onSort, onFilter, onSearch }`. Produces: table with header, rows, pagination, empty state.
- `useTable` consumes: `initialData`. Produces: `{ sortedData, sort, setSort, filteredData, setFilter, setSearch, pageData }`.

- [ ] **Step 1: Write useTable hook**

State for sort column/direction, filter value, search query, current page. Returns computed data.

- [ ] **Step 2: Write StatCard.jsx**

Responsive card, icon from Lucide, trend indicator with color (up green, down red).

- [ ] **Step 3: Write DataTable.jsx**

Table header clickable for sorting, filter input, search input, rows from data, "Tidak ada data" empty state.

- [ ] **Step 4: Verify components render with mock data**

Render StatCard and DataTable in a scratch page with mockData, confirm no crashes.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/ src/hooks/
git commit -m "feat: add StatCard, DataTable, and useTable hook"
```

---

### Task 5: Chart component (RevenueChart)

**Files:**
- Create: `src/components/charts/RevenueChart.jsx`

**Interfaces:**
- `RevenueChart` consumes: `{ data }` where data is `[{ name, value }]`. Produces: Recharts LineChart or BarChart with tooltip, x-axis, y-axis. Handles empty/single data gracefully.

- [ ] **Step 1: Write RevenueChart.jsx**

Use `LineChart`, `Line`, `XAxis`, `YAxis`, `Tooltip`, `ResponsiveContainer`. Fallback message when data empty.

- [ ] **Step 2: Verify chart renders**

Render with mock revenue data and with empty array; confirm no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/charts/
git commit -m "feat: add RevenueChart component with Recharts"
```

---

### Task 6: Pages — Dashboard

**Files:**
- Create: `src/pages/Dashboard.jsx`

**Interfaces:**
- `Dashboard` consumes: none (uses mockData + components). Produces: page with grid of StatCards and RevenueChart.

- [ ] **Step 1: Write Dashboard.jsx**

Layout stat cards in responsive grid, revenue chart beside or below, using mockData.stats and revenue array.

- [ ] **Step 2: Verify Dashboard route renders**

Add temporary route in App, run dev, confirm stats and chart visible.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Dashboard.jsx
git commit -m "feat: add Dashboard page with stats and chart"
```

---

### Task 7: Pages — Orders

**Files:**
- Create: `src/pages/Orders.jsx`

**Interfaces:**
- `Orders` consumes: none. Produces: page titled "Pesanan" with DataTable bound to mockData.orders.

- [ ] **Step 1: Write Orders.jsx**

DataTable columns: ID, Pelanggan, Tanggal, Total, Status. Bind to orders data via useTable.

- [ ] **Step 2: Verify Orders table renders**

Sorting, filter, search work on orders data; empty state shows when no match.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Orders.jsx
git commit -m "feat: add Orders page with data table"
```

---

### Task 8: Pages — Products

**Files:**
- Create: `src/pages/Products.jsx`

**Interfaces:**
- `Products` consumes: none. Produces: page titled "Produk" with DataTable bound to mockData.products.

- [ ] **Step 1: Write Products.jsx**

Columns: ID, Nama Produk, Kategori, Harga, Stok, Terjual.

- [ ] **Step 2: Verify Products table renders**

Same verification as Orders.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Products.jsx
git commit -m "feat: add Products page with data table"
```

---

### Task 9: Pages — Customers

**Files:**
- Create: `src/pages/Customers.jsx`

**Interfaces:**
- `Customers` consumes: none. Produces: page titled "Pelanggan" with DataTable bound to mockData.customers.

- [ ] **Step 1: Write Customers.jsx**

Columns: ID, Nama, Email, Jumlah Pesanan, Total Belanja, Bergabung.

- [ ] **Step 2: Verify Customers table renders**

Same verification pattern.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Customers.jsx
git commit -m "feat: add Customers page with data table"
```

---

### Task 10: Pages — Profile

**Files:**
- Create: `src/pages/Profile.jsx`

**Interfaces:**
- `Profile` consumes: none. Produces: simple profile page with user info placeholder and settings stub.

- [ ] **Step 1: Write Profile.jsx**

Avatar, name, email, role, simple settings form (non-functional, UI only).

- [ ] **Step 2: Verify Profile renders**

No errors, responsive layout.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Profile.jsx
git commit -m "feat: add Profile page"
```

---

### Task 11: App routing and navigation wiring

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/layout/Sidebar.jsx` (wire links to routes)

**Interfaces:**
- `App` produces: `<BrowserRouter><Routes><Route path="/" element={<Dashboard />} /> ...</Routes></BrowserRouter>` with routes for `/`, `/orders`, `/products`, `/customers`, `/profile`.
- `Sidebar` link `to` props match route paths; active link highlighted via `useLocation`/`useNavigate`.

- [ ] **Step 1: Write App.jsx with routes**

Import all pages, define Routes, wrap in Layout for protected-looking shell (Layout wraps all routes except maybe none).

- [ ] **Step 2: Wire Sidebar navigation**

Use `useNavigate` from react-router-dom, `NavLink` or manual onClick.

- [ ] **Step 3: Verify all routes navigate**

Click each sidebar link, URL and content change correctly; no 404/blank.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/components/layout/Sidebar.jsx
git commit -m "feat: wire React Router routes and sidebar navigation"
```

---

### Task 12: Component tests (Vitest + React Testing Library)

**Files:**
- Create: `vitest.config.js`
- Create: `src/components/ui/__tests__/StatCard.test.jsx`
- Create: `src/components/ui/__tests__/DataTable.test.jsx`

**Interfaces:**
- `StatCard.test` asserts StatCard renders label, value, trend text.
- `DataTable.test` asserts sorting changes row order, filter reduces rows, search matches text.

- [ ] **Step 1: Install test dependencies and config**

Run: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`
Create `vitest.config.js` with React environment.

- [ ] **Step 2: Write StatCard.test.jsx**

Render StatCard with mock props, assert text content present.

- [ ] **Step 3: Write DataTable.test.jsx**

Render with small data, click sort header, assert order changes; type in search, assert filtered rows.

- [ ] **Step 4: Run tests**

Run: `npx vitest run`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add vitest.config.js src/components/ui/__tests__/
git commit -m "test: add unit tests for StatCard and DataTable"
```

---

### Task 13: Responsive polish, empty states, and edge cases

**Files:**
- Modify: `src/components/layout/Sidebar.jsx` (mobile toggle state)
- Modify: `src/components/ui/DataTable.jsx` (empty state, loading skeleton)
- Modify: `src/pages/*.jsx` (robust null checks on data)

**Interfaces:**
- Sidebar mobile: `isOpen` state toggles overlay visibility.
- DataTable: renders "Tidak ada data ditemukan" when filtered result is empty.
- Pages: guard `data?.map` with fallback.

- [ ] **Step 1: Add mobile sidebar toggle state**

Layout/Header manages `isOpen`, Sidebar conditionally shows overlay.

- [ ] **Step 2: Add empty state to DataTable**

When data length is 0 after filter/search, show message instead of table.

- [ ] **Step 3: Guard pages against missing data fields**

Optional chaining on all data access.

- [ ] **Step 4: Verify responsive behavior**

Resize browser / use DevTools mobile view; sidebar hides, toggle appears; empty state visible when filtering to zero.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: responsive polish, empty states, and edge-case guards"
```

---

### Task 14: README and deployment

**Files:**
- Create: `README.md`

**Interfaces:**
- README contains: project title, description, tech stack, screenshot placeholder, setup commands (`npm install`, `npm run dev`, `npm run test`), deploy steps to Vercel/Netlify, and portfolio note.

- [ ] **Step 1: Write README.md**

Include badges, features list, how to run, how to deploy, author section.

- [ ] **Step 2: Deploy to Vercel or Netlify**

Connect GitHub repo, import project, deploy. Confirm live URL works.

- [ ] **Step 3: Commit README**

```bash
git add README.md
git commit -m "docs: add README with setup and deploy instructions"
```

---

## Self-Review

1. **Spec coverage:** Dashboard stats (Task 6), tabel dengan sorting/filter/pencarian (Task 4, 7-9), grafik analitik (Task 5), halaman detail/item (Tasks 7-9 via DataTable rows; no separate detail page per spec non-goals), sidebar + header responsif (Tasks 3, 13), deploy gratis (Task 14), README rapih (Task 14). Commit history terstruktur (setiap task commit sendiri). Cakupan lengkap.

2. **Step scan:** Setiap step menghasilkan satu hal yang dapat ditulis/dikerjakan. Tidak ada baris yang tidak memberi keputusan ("TBD", "handle edge cases" tanpa spesifikasi). Test cases spesifik (sorting, filter, search).

3. **Type consistency:** Semua komponen menggunakan prop nama yang sama (`data`, `columns`, `onSort`, `label`, `value`, `trend`, `icon`). `useTable` mengembalikan objek dengan kunci konsisten yang digunakan DataTable di semua halaman.

4. **Review Focus:** Empty state — DataTable Task 13 step 2. Mobile viewport — Sidebar Task 13 step 1. Large dataset — DataTable Task 4 (paginasi/pageData). Invalid/missing field — Task 13 step 3 optional chaining. Chart zero/single data — RevenueChart Task 5 step 1 fallback. Semua has test atau verification step.

5. **Proportion:** Plan sekitar 14 tasks untuk spek satu halaman. Tidak berlebihan; tiap task memiliki deliverable yang dapat diuji sendiri.

---

Plan complete and saved to `docs/superpowers/plans/2026-11-08-admin-dashboard-ecommerce.md`. Please review the plan. Does it capture what you want?

**Which execution approach would you prefer?**

- **Subagent-driven** — A fresh subagent implements each task and a fresh reviewer checks it before the next one starts, then a whole-branch review at the end. Most thorough; costs a fresh context per task and per review.
- **Native** — I implement every task myself in this session, then one fresh reviewer checks the whole branch. Cheapest and fastest; no independent review until the end.

For this plan I recommend **Native**, because the tasks mostly depend on sequential interfaces within one small React app and the cost of a shipped mistake is low (portfolio project, frontend-only). Does the plan capture what you want, and which approach should we use?