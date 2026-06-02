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
import Wishlist from './pages/Wishlist'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProductsAdmin from './pages/admin/ProductsAdmin'
import CategoriesAdmin from './pages/admin/CategoriesAdmin'
import CollectionsAdmin from './pages/admin/CollectionsAdmin'
import OrdersAdmin from './pages/admin/OrdersAdmin'
import AdminLogin from './pages/admin/Login'
import About from './pages/footer/About'
import Contact from './pages/footer/Contact'
import PrivacyPolicy from './pages/footer/PrivacyPolicy'
import ShippingPolicy from './pages/footer/ShippingPolicy'
import ReturnPolicy from './pages/footer/ReturnPolicy'
import Terms from './pages/footer/Terms'
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute'
import MessagesAdmin from './pages/admin/MessagesAdmin'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Account from './pages/account/Account'
import ProtectedUserRoute from './components/auth/ProtectedUserRoute'
import MyOrders from './pages/account/MyOrders'
import OrderSuccess from './pages/OrderSuccess'
import NewsletterAdmin from './pages/admin/NewsletterAdmin'
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
  path="/wishlist"
  element={
    <Layout>
      <Wishlist />
    </Layout>
  }
/>



     <Route

  path="/account"

  element={

    <ProtectedUserRoute>

      <Layout>

        <Account />

      </Layout>

    </ProtectedUserRoute>

  }

/>

<Route

  path="/my-orders"

  element={

    <ProtectedUserRoute>

      <Layout>

        <MyOrders />

      </Layout>

    </ProtectedUserRoute>

  }

/>


<Route
  path="/order-success/:id"
  element={
    <Layout>
      <OrderSuccess />
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
  path="/login"
  element={
    <Layout>
      <Login />
    </Layout>
  }
/>

<Route
  path="/signup"
  element={
    <Layout>
      <Signup />
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

<Route
  path="/about"
  element={
    <Layout>
      <About />
    </Layout>
  }
/>

<Route
  path="/contact"
  element={
    <Layout>
      <Contact />
    </Layout>
  }
/>

<Route
  path="/privacy-policy"
  element={
    <Layout>
      <PrivacyPolicy />
    </Layout>
  }
/>

<Route
  path="/shipping-policy"
  element={
    <Layout>
      <ShippingPolicy />
    </Layout>
  }
/>

<Route
  path="/return-policy"
  element={
    <Layout>
      <ReturnPolicy />
    </Layout>
  }
/>

<Route
  path="/terms-and-conditions"
  element={
    <Layout>
      <Terms />
    </Layout>
  }
/>





      {/* ADMIN ROUTES */}

        <Route

  path="/admin/login"

  element={<AdminLogin />}

/>

     <Route

  path="/admin"

  element={

    <ProtectedAdminRoute>

      <AdminDashboard />

    </ProtectedAdminRoute>

  }

/>

      <Route

  path="/admin/products"

  element={

    <ProtectedAdminRoute>

      <ProductsAdmin />

    </ProtectedAdminRoute>

  }

/>
<Route

  path="/admin/messages"

  element={

    <ProtectedAdminRoute>

      <MessagesAdmin />

    </ProtectedAdminRoute>

  }

/>

     <Route

  path="/admin/categories"

  element={

    <ProtectedAdminRoute>

      <CategoriesAdmin />

    </ProtectedAdminRoute>

  }

/>
<Route

  path="/admin/collections"

  element={

    <ProtectedAdminRoute>

      <CollectionsAdmin />

    </ProtectedAdminRoute>

  }

/>

<Route

  path="/admin/orders"

  element={

    <ProtectedAdminRoute>

      <OrdersAdmin />

    </ProtectedAdminRoute>

  }

/>
<Route

  path="/admin/newsletter"

  element={

    <ProtectedAdminRoute>

      <NewsletterAdmin />

    </ProtectedAdminRoute>

  }

/>

    </Routes>

  )
}