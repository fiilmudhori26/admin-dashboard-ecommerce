// src/data/mockData.js
// Mock data for the admin dashboard — Indonesian e-commerce.
// Consumed by pages and components from Task 4 onward.
//
// Data is cross-referenced and internally consistent:
//   - customers[].orders / spent match their orders
//   - products[].sold matches quantities sold in orders
//   - order totals match the sum of their items

export const orders = [
  {
    id: "ORD-001",
    customer: "Budi Santoso",
    date: "2024-10-02",
    total: 14999000,
    status: "Delivered",
    items: [{ id: "P001", name: "iPhone 15", qty: 1, price: 14999000 }],
  },
  {
    id: "ORD-002",
    customer: "Siti Rahayu",
    date: "2024-10-06",
    total: 14498000,
    status: "Delivered",
    items: [
      { id: "P002", name: "Samsung Galaxy S24", qty: 1, price: 12999000 },
      { id: "P003", name: "Sepatu Nike Air Max", qty: 1, price: 1499000 },
    ],
  },
  {
    id: "ORD-003",
    customer: "Agus Setiawan",
    date: "2024-10-10",
    total: 900000,
    status: "Delivered",
    items: [{ id: "P004", name: "Rice Cooker Philips", qty: 2, price: 450000 }],
  },
  {
    id: "ORD-004",
    customer: "Dewi Lestari",
    date: "2024-10-12",
    total: 8999000,
    status: "Shipped",
    items: [{ id: "P005", name: "Laptop ASUS VivoBook", qty: 1, price: 8999000 }],
  },
  {
    id: "ORD-005",
    customer: "Rina Marlina",
    date: "2024-10-15",
    total: 450000,
    status: "Delivered",
    items: [{ id: "P006", name: "Baju Batik Kanvas", qty: 2, price: 225000 }],
  },
  {
    id: "ORD-006",
    customer: "Dani Pratama",
    date: "2024-10-18",
    total: 1320000,
    status: "Processing",
    items: [
      { id: "P013", name: "Speaker Bluetooth JBL", qty: 1, price: 750000 },
      { id: "P015", name: "Powerbank 20000mAh", qty: 2, price: 285000 },
    ],
  },
  {
    id: "ORD-007",
    customer: "Maya Sari",
    date: "2024-10-20",
    total: 285000,
    status: "Delivered",
    items: [{ id: "P008", name: "Kopi Gayo Arabika", qty: 3, price: 95000 }],
  },
  {
    id: "ORD-008",
    customer: "Joko Susilo",
    date: "2024-10-23",
    total: 1250000,
    status: "Processing",
    items: [{ id: "P011", name: "Meja Kerja Minimalis", qty: 1, price: 1250000 }],
  },
  {
    id: "ORD-009",
    customer: "Lina Kurnia",
    date: "2024-10-25",
    total: 200000,
    status: "Cancelled",
    items: [
      { id: "P007", name: "Sendal Wanita Kulit", qty: 1, price: 125000 },
      { id: "P014", name: "Topi Peci Kotak", qty: 1, price: 75000 },
    ],
  },
  {
    id: "ORD-010",
    customer: "Rizky Hidayat",
    date: "2024-10-28",
    total: 520000,
    status: "Pending",
    items: [
      { id: "P009", name: "Tumbler Stainless Steel", qty: 2, price: 175000 },
      { id: "P010", name: "Obat Herbal Kurkuma", qty: 2, price: 85000 },
    ],
  },
  {
    id: "ORD-011",
    customer: "Putri Melati",
    date: "2024-11-01",
    total: 2150000,
    status: "Shipped",
    items: [{ id: "P012", name: "Lemari Pakaian 2 Pintu", qty: 1, price: 2150000 }],
  },
  {
    id: "ORD-012",
    customer: "Eko Priyanto",
    date: "2024-11-03",
    total: 285000,
    status: "Pending",
    items: [{ id: "P015", name: "Powerbank 20000mAh", qty: 1, price: 285000 }],
  },
  {
    id: "ORD-013",
    customer: "Budi Santoso",
    date: "2024-11-05",
    total: 13674000,
    status: "Delivered",
    items: [
      { id: "P002", name: "Samsung Galaxy S24", qty: 1, price: 12999000 },
      { id: "P006", name: "Baju Batik Kanvas", qty: 3, price: 225000 },
    ],
  },
  {
    id: "ORD-014",
    customer: "Siti Rahayu",
    date: "2024-11-07",
    total: 925000,
    status: "Delivered",
    items: [
      { id: "P004", name: "Rice Cooker Philips", qty: 1, price: 450000 },
      { id: "P008", name: "Kopi Gayo Arabika", qty: 5, price: 95000 },
    ],
  },
  {
    id: "ORD-015",
    customer: "Budi Santoso",
    date: "2024-11-09",
    total: 14999000,
    status: "Delivered",
    items: [{ id: "P001", name: "iPhone 15", qty: 1, price: 14999000 }],
  },
  {
    id: "ORD-016",
    customer: "Dewi Lestari",
    date: "2024-11-11",
    total: 2998000,
    status: "Processing",
    items: [{ id: "P003", name: "Sepatu Nike Air Max", qty: 2, price: 1499000 }],
  },
  {
    id: "ORD-017",
    customer: "Dani Pratama",
    date: "2024-11-14",
    total: 9749000,
    status: "Pending",
    items: [
      { id: "P005", name: "Laptop ASUS VivoBook", qty: 1, price: 8999000 },
      { id: "P013", name: "Speaker Bluetooth JBL", qty: 1, price: 750000 },
    ],
  },
  {
    id: "ORD-018",
    customer: "Maya Sari",
    date: "2024-11-16",
    total: 900000,
    status: "Delivered",
    items: [{ id: "P006", name: "Baju Batik Kanvas", qty: 4, price: 225000 }],
  },
  {
    id: "ORD-019",
    customer: "Joko Susilo",
    date: "2024-11-18",
    total: 3400000,
    status: "Shipped",
    items: [
      { id: "P011", name: "Meja Kerja Minimalis", qty: 1, price: 1250000 },
      { id: "P012", name: "Lemari Pakaian 2 Pintu", qty: 1, price: 2150000 },
    ],
  },
  {
    id: "ORD-020",
    customer: "Rizky Hidayat",
    date: "2024-11-20",
    total: 865000,
    status: "Pending",
    items: [
      { id: "P009", name: "Tumbler Stainless Steel", qty: 3, price: 175000 },
      { id: "P010", name: "Obat Herbal Kurkuma", qty: 4, price: 85000 },
    ],
  },
];

export const products = [
  { id: "P001", name: "iPhone 15", category: "Elektronik", price: 14999000, stock: 25, sold: 2 },
  { id: "P002", name: "Samsung Galaxy S24", category: "Elektronik", price: 12999000, stock: 18, sold: 2 },
  { id: "P003", name: "Sepatu Nike Air Max", category: "Pakaian", price: 1499000, stock: 40, sold: 3 },
  { id: "P004", name: "Rice Cooker Philips", category: "Rumah Tangga", price: 450000, stock: 60, sold: 3 },
  { id: "P005", name: "Laptop ASUS VivoBook", category: "Elektronik", price: 8999000, stock: 15, sold: 2 },
  { id: "P006", name: "Baju Batik Kanvas", category: "Pakaian", price: 225000, stock: 80, sold: 9 },
  { id: "P007", name: "Sendal Wanita Kulit", category: "Pakaian", price: 125000, stock: 100, sold: 1 },
  { id: "P008", name: "Kopi Gayo Arabika", category: "Makanan", price: 95000, stock: 120, sold: 8 },
  { id: "P009", name: "Tumbler Stainless Steel", category: "Rumah Tangga", price: 175000, stock: 55, sold: 5 },
  { id: "P010", name: "Obat Herbal Kurkuma", category: "Kesehatan", price: 85000, stock: 90, sold: 6 },
  { id: "P011", name: "Meja Kerja Minimalis", category: "Furniture", price: 1250000, stock: 12, sold: 2 },
  { id: "P012", name: "Lemari Pakaian 2 Pintu", category: "Furniture", price: 2150000, stock: 8, sold: 2 },
  { id: "P013", name: "Speaker Bluetooth JBL", category: "Elektronik", price: 750000, stock: 30, sold: 2 },
  { id: "P014", name: "Topi Peci Kotak", category: "Pakaian", price: 75000, stock: 200, sold: 1 },
  { id: "P015", name: "Powerbank 20000mAh", category: "Aksesori", price: 285000, stock: 45, sold: 3 },
];

export const customers = [
  { id: "C001", name: "Budi Santoso", email: "budi.santoso@gmail.com", orders: 3, spent: 43672000, joined: "2023-01-15" },
  { id: "C002", name: "Siti Rahayu", email: "siti.rahayu@yahoo.co.id", orders: 2, spent: 15423000, joined: "2023-03-22" },
  { id: "C003", name: "Agus Setiawan", email: "agus.setiawan@outlook.com", orders: 1, spent: 900000, joined: "2023-05-10" },
  { id: "C004", name: "Dewi Lestari", email: "dewi.lestari@gmail.com", orders: 2, spent: 11997000, joined: "2023-07-18" },
  { id: "C005", name: "Rina Marlina", email: "rina.marlina@yahoo.com", orders: 1, spent: 450000, joined: "2023-09-05" },
  { id: "C006", name: "Dani Pratama", email: "dani.pratama@gmail.com", orders: 2, spent: 11069000, joined: "2023-11-12" },
  { id: "C007", name: "Maya Sari", email: "maya.sari@outlook.co.id", orders: 2, spent: 1185000, joined: "2024-01-20" },
  { id: "C008", name: "Joko Susilo", email: "joko.susilo@gmail.com", orders: 2, spent: 4650000, joined: "2024-02-28" },
  { id: "C009", name: "Lina Kurnia", email: "lina.kurnia@yahoo.co.id", orders: 1, spent: 200000, joined: "2024-04-15" },
  { id: "C010", name: "Rizky Hidayat", email: "rizky.hidayat@gmail.com", orders: 2, spent: 1385000, joined: "2024-05-30" },
  { id: "C011", name: "Putri Melati", email: "putri.melati@outlook.com", orders: 1, spent: 2150000, joined: "2024-07-10" },
  { id: "C012", name: "Eko Priyanto", email: "eko.priyanto@yahoo.com", orders: 1, spent: 285000, joined: "2024-08-22" },
];

export const stats = [
  { label: "Total Penjualan", value: "Rp 93.366.000", trend: "+12% this month", icon: "DollarSign" },
  { label: "Total Pesanan", value: "20", trend: "+8% vs last month", icon: "ShoppingCart" },
  { label: "Produk Terjual", value: "51", trend: "+5% vs last month", icon: "Package" },
  { label: "Pelanggan Aktif", value: "12", trend: "+3 new this week", icon: "Users" },
];
