import { useState } from 'react'

import ProductManager from '../components/admin/ProductManager'
import CategoryManager from '../components/admin/CategoryManager'

export default function Admin() {

  const [tab, setTab] = useState('products')

  return (

    <div className="min-h-screen bg-cream">

      <div className="p-4 border-b bg-white sticky top-0 z-50">

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex gap-3 mt-4">

          <button
            onClick={() => setTab('products')}
            className={`px-5 py-3 rounded-2xl ${
              tab === 'products'
                ? 'bg-black text-white'
                : 'bg-gray-200'
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setTab('categories')}
            className={`px-5 py-3 rounded-2xl ${
              tab === 'categories'
                ? 'bg-black text-white'
                : 'bg-gray-200'
            }`}
          >
            Categories
          </button>

        </div>

      </div>

      <div className="p-4">

        {tab === 'products' && <ProductManager />}

        {tab === 'categories' && <CategoryManager />}

      </div>

    </div>

  )
}