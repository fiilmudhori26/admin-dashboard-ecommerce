# Admin Dashboard — Ecommerce

A responsive single-page admin dashboard for e-commerce management, built with React, Vite, and Tailwind CSS. View sales statistics, revenue analytics, and manage orders, products, and customers with sortable, filterable, and searchable data tables.

## Badges

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-DOM-ca4245?style=for-the-badge&logo=react-router&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-3-FF6B00?style=for-the-badge)
![Lucide React](https://img.shields.io/badge/Lucide%20React-1-F0F0F0?style=for-the-badge&logo=lucide&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-5-6E99B8?style=for-the-badge&logo=vitest&logoColor=white)

## Screenshot

![Admin Dashboard screenshot placeholder](screenshot.png)

> Replace `screenshot.png` with an actual screenshot of the deployed dashboard.

## Tech stack

- [React](https://react.dev) 19 — UI library
- [Vite](https://vitejs.dev) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com) v4 — utility-first styling
- [React Router DOM](https://reactrouter.com) — client-side routing
- [Recharts](https://recharts.org) — revenue analytics chart
- [Lucide React](https://lucide.dev) — icons
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com) + jsdom — unit testing

## Features

- Dashboard overview with key stat cards (total revenue, orders, products, customers)
- Revenue line chart (analytics) with empty-state fallback
- Orders, Products, and Customers pages with paginated data tables
- Column sorting, status filtering, and full-text search on every table
- Responsive sidebar navigation and header (mobile-friendly)
- Empty states and edge-case guards (zero/single chart data, missing fields, large datasets)
- Indonesian locale formatting (Rp currency)
- Unit tests for StatCard and DataTable (sorting, filter, search)

## Setup

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev

# Run the test suite
npm run test
```

> Note: `npm run test` runs Vitest via the `test` script registered in `package.json`.

## How to run

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/admin-dashboard-ecommerce.git
   cd admin-dashboard-ecommerce
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser.
5. Run tests:
   ```bash
   npm run test
   # or: npx vitest run
   ```

## How to deploy

This is a static Vite app, so it deploys free on Vercel or Netlify.

### Option A — Push to GitHub first (then connect to Vercel/Netlify)

1. Create a new empty repository on GitHub (do not initialize with README).
2. Add the remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/admin-dashboard-ecommerce.git
   git branch -M master
   git push -u origin master
   ```
3. **Vercel:** go to vercel.com → "Add New Project" → import the GitHub repository → Framework preset: Vite → Build command: `npm run build` → Output directory: `dist` → Deploy.
4. **Netlify:** go to app.netlify.com → "Add new site" → "Import an existing project" → connect GitHub → select the repository → Build command: `npm run build` → Publish directory: `dist` → Deploy site.
5. Open the generated live URL and confirm the dashboard loads (Dashboard, Orders, Products, Customers, Profile pages).

### Option B — Deploy a built folder directly

```bash
npm run build
# then upload the `dist/` folder to Vercel (vercel CLI) or Netlify (netlify drop/cli)
```

## Portfolio note

This project was built as a portfolio piece demonstrating a complete admin dashboard: routing, reusable data table with sorting/filtering/search/pagination, charts, responsive layout, and unit tests. Deployment to Vercel/Netlify is handled separately by pushing the GitHub repository and connecting it to the platform of choice (see "How to deploy" above).

## Author

Built as an e-commerce admin dashboard portfolio project.  
Connect: [your-github-profile] • Live demo: [deployed-url]

## License

MIT
