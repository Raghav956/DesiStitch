import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import CategoryPage from './pages/CategoryPage'
import Collections from './pages/Collections'
import CollectionDetails from './pages/CollectionDetails'
import Checkout from './pages/Checkout'

import AdminDashboard from './pages/admin/AdminDashboard'
import ProductsAdmin from './pages/admin/ProductsAdmin'

export default function App() {

  return (

    <Routes>

      {/* STORE ROUTES */}

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />

      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />

      <Route
        path="/category/:id"
        element={
          <Layout>
            <CategoryPage />
          </Layout>
        }
      />

      <Route
        path="/collections"
        element={
          <Layout>
            <Collections />
          </Layout>
        }
      />

      <Route
        path="/collections/:slug"
        element={
          <Layout>
            <CollectionDetails />
          </Layout>
        }
      />

      <Route
        path="/product/:id"
        element={
          <Layout>
            <ProductDetails />
          </Layout>
        }
      />

      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />

      {/* ADMIN ROUTES */}

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/products"
        element={<ProductsAdmin />}
      />

    </Routes>

  )
}