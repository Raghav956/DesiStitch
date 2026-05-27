import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Admin from './pages/Admin'
import CategoryPage from './pages/CategoryPage'
export default function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:id" element={<CategoryPage />} />

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>

  )
}