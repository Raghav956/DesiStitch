import { useEffect, useState } from 'react'
import ProductCard from "./product/ProductCard";
import api from '../services/api'

export default function ProductGrid() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchProducts()

  }, [])

  const fetchProducts = async () => {

    try {

      const response = await api.get('/products')

      setProducts(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <section className="px-4 py-10">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          New Arrivals
        </h2>

        <button className="text-mustard font-semibold">
          View All
        </button>

      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  )
}