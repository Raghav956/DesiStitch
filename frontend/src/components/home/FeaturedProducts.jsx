import { useEffect, useState } from 'react'

import api from '../../services/api'

import ProductCard from '../product/ProductCard'

export default function FeaturedProducts() {

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

    <section className="py-24 bg-cream">

      {/* HEADER */}

      <div className="max-w-site mx-auto px-6 mb-14">

        <p className="uppercase tracking-[5px] text-sm text-gray-500">

          New Arrivals

        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">

          <h2 className="text-4xl md:text-6xl font-black leading-none">

            Trending
            <br />
            This Season

          </h2>

          <p className="max-w-lg text-gray-600 leading-relaxed">

            Discover handcrafted silhouettes curated for effortless elegance and everyday luxury.

          </p>

        </div>

      </div>

      {/* PRODUCT GRID */}

      <div className="max-w-site mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          {products.length === 0 ? (

  <div className="col-span-full text-center py-20">

    <h3 className="text-2xl font-bold">

      No Products Found

    </h3>

    <p className="text-gray-500 mt-3">

      New arrivals coming soon.

    </p>

  </div>

) : 
  products.slice(0, 8).map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>

  )
}