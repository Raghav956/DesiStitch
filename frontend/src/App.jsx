import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Admin from './pages/Admin'
import CategoryPage from './pages/CategoryPage'
import Collections from './pages/Collections'
import CollectionDetails from './pages/CollectionDetails'

export default function App() {

  return (

    <Layout>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/category/:id"
          element={<CategoryPage />}
        />

        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route
          path="/collections/:slug"
          element={<CollectionDetails />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </Layout>

  )
}