import { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'

import api from '../services/api'

export default function Shop() {

  const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {

    fetchProducts()

  }, [])

  const fetchProducts = async () => {

    const response = await api.get('/products')

    setProducts(response.data)
  }

  const filteredProducts = products.filter((product) =>

    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (

    <div className="min-h-screen bg-cream">

      <div className="p-4">

        <h1 className="text-4xl font-bold">
          Shop
        </h1>

        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full mt-5 p-4 rounded-2xl border"
        />

      </div>

      <div className="grid grid-cols-2 gap-4 p-4">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  )
}