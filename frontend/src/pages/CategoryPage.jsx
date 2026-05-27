import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import ProductCard from '../components/ProductCard'

export default function CategoryPage() {

  const { id } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchProducts()

  }, [])

  const fetchProducts = async () => {

    const response = await api.get(
      `/categories/${id}/products`
    )

    setProducts(response.data)
  }

  return (

    <div className="min-h-screen bg-cream">

      <div className="px-4 pt-6">

        <h1 className="text-4xl font-bold">
          Collection
        </h1>

      </div>

      <div className="grid grid-cols-2 gap-4 p-4">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  )
}