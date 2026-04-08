export const products = [
  { id: 1, name: 'iPhone 15 Pro Max', cat: 'smartphones', price: 749000, old: null, badge: 'new', stars: 5, reviews: 2400, icon: 'fa-brands fa-apple', color: '#555', bg: '#FFF7ED', image: '/src/assets/products/iphone15.jpg' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', cat: 'smartphones', price: 589000, old: 735000, badge: 'sale', stars: 5, reviews: 1200, icon: 'fa-brands fa-android', color: '#3ddc84', bg: '#EFF6FF', image: '/src/assets/products/samsung-s24.jpg' },
  { id: 3, name: 'Xiaomi 14 Pro', cat: 'smartphones', price: 395000, old: 450000, badge: 'hot', stars: 4, reviews: 876, icon: 'fa-solid fa-mobile-screen', color: '#f97316', bg: '#F0FDF4', image: '/src/assets/products/xiaomi14.jpg' },
  { id: 4, name: 'MacBook Air M3', cat: 'laptops', price: 920000, old: null, badge: 'new', stars: 5, reviews: 1800, icon: 'fa-brands fa-apple', color: '#555', bg: '#EFF6FF', image: '/src/assets/products/macbook-m3.jpg' },
  { id: 5, name: 'Dell XPS 15', cat: 'laptops', price: 780000, old: 920000, badge: 'sale', stars: 4, reviews: 654, icon: 'fa-brands fa-windows', color: '#0078d4', bg: '#F5F3FF', image: '/src/assets/products/dell-xps.jpg' },
  { id: 6, name: 'Lenovo ThinkPad X1', cat: 'laptops', price: 650000, old: null, badge: 'top', stars: 5, reviews: 432, icon: 'fa-solid fa-laptop', color: '#dc2626', bg: '#ECFDF5', image: '/src/assets/products/lenovo-x1.jpg' },
  { id: 7, name: 'Sony WH-1000XM5', cat: 'audio', price: 185000, old: null, badge: null, stars: 4, reviews: 3400, icon: 'fa-solid fa-headphones', color: '#111', bg: '#F0FDF4', image: '/src/assets/products/sony-xm5.jpg' },
  { id: 8, name: 'AirPods Pro 2', cat: 'audio', price: 145000, old: 165000, badge: 'sale', stars: 5, reviews: 5200, icon: 'fa-solid fa-ear-listen', color: '#555', bg: '#FFF7ED', image: '/src/assets/products/airpods-pro.jpg' },
  { id: 9, name: 'JBL Charge 5', cat: 'audio', price: 89000, old: null, badge: 'hot', stars: 4, reviews: 2100, icon: 'fa-solid fa-volume-high', color: '#f97316', bg: '#FFFBEB', image: '/src/assets/products/jbl-charge5.jpg' },
  { id: 10, name: 'Apple Watch Series 9', cat: 'montres', price: 245000, old: null, badge: 'new', stars: 5, reviews: 988, icon: 'fa-solid fa-clock', color: '#555', bg: '#FDF2F8', image: '/src/assets/products/apple-watch9.jpg' },
  { id: 11, name: 'Samsung Galaxy Watch 6', cat: 'montres', price: 185000, old: 220000, badge: 'sale', stars: 4, reviews: 743, icon: 'fa-solid fa-stopwatch', color: '#1d4ed8', bg: '#FFF1F2', image: '/src/assets/products/samsung-watch6.jpg' },
  { id: 12, name: 'PS5 Slim + 2 manettes', cat: 'gaming', price: 340000, old: 400000, badge: 'hot', stars: 5, reviews: 2100, icon: 'fa-brands fa-playstation', color: '#003087', bg: '#F5F3FF', image: '/src/assets/products/ps5-slim.jpg' },
  { id: 13, name: 'Xbox Series X', cat: 'gaming', price: 320000, old: null, badge: 'top', stars: 4, reviews: 1650, icon: 'fa-brands fa-xbox', color: '#107c10', bg: '#F0FDF4', image: '/src/assets/products/xbox-series-x.jpg' },
  { id: 14, name: 'DJI Osmo Pocket 3', cat: 'cameras', price: 195000, old: null, badge: 'new', stars: 4, reviews: 654, icon: 'fa-solid fa-camera', color: '#f97316', bg: '#FFF7ED', image: '/src/assets/products/dji-pocket3.jpg' },
  { id: 15, name: 'Cable USB-C 100W 3m', cat: 'accessoires', price: 12000, old: 18000, badge: 'sale', stars: 5, reviews: 4300, icon: 'fa-solid fa-plug', color: '#555', bg: '#FFFBEB', image: '/src/assets/products/cable-usbc.jpg' },
]

export const flashDeals = [
  { id: 101, name: 'iPhone 14', price: 420000, old: 620000, pct: 32, icon: 'fa-brands fa-apple', color: '#555', bg: '#FFF7ED', stock: 35, image: '/src/assets/products/iphone14.jpg' },
  { id: 102, name: 'AirPods Pro', price: 99000, old: 145000, pct: 32, icon: 'fa-solid fa-ear-listen', color: '#555', bg: '#FDF2F8', stock: 18, image: '/src/assets/products/airpods-pro-flash.jpg' },
  { id: 103, name: 'Samsung A54', price: 185000, old: 250000, pct: 26, icon: 'fa-brands fa-android', color: '#3ddc84', bg: '#EFF6FF', stock: 55, image: '/src/assets/products/samsung-a54.jpg' },
  { id: 104, name: 'JBL Flip 6', price: 55000, old: 89000, pct: 38, icon: 'fa-solid fa-music', color: '#f97316', bg: '#FFFBEB', stock: 70, image: '/src/assets/products/jbl-flip6.jpg' },
]

export const categories = [
  { key: 'all', label: 'Tout', icon: 'fa-solid fa-fire' },
  { key: 'smartphones', label: 'Smartphones', icon: 'fa-solid fa-mobile-screen' },
  { key: 'laptops', label: 'Laptops', icon: 'fa-solid fa-laptop' },
  { key: 'audio', label: 'Audio', icon: 'fa-solid fa-headphones' },
  { key: 'montres', label: 'Montres', icon: 'fa-solid fa-clock' },
  { key: 'gaming', label: 'Gaming', icon: 'fa-solid fa-gamepad' },
  { key: 'cameras', label: 'Cameras', icon: 'fa-solid fa-camera' },
  { key: 'accessoires', label: 'Accessoires', icon: 'fa-solid fa-plug' },
]