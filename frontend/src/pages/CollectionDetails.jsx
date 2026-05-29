import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import ProductCard from '../components/product/ProductCard'

export default function CollectionDetails() {

  const { slug } = useParams()

  const [collection, setCollection] = useState(null)

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchCollection()

    fetchProducts()

  }, [slug])

  const fetchCollection = async () => {

    const response = await api.get(
      `/collections/${slug}`
    )

    setCollection(response.data)
  }

  const fetchProducts = async () => {

    const response = await api.get(
      `/collections/${slug}/products`
    )

    setProducts(response.data)
  }

  if (!collection) {

    return (

      <div className="p-20">
        Loading...
      </div>

    )
  }

  return (

    <div className="min-h-screen bg-[#faf7f2]">

      {/* HERO */}

      <section className="relative h-[65vh] overflow-hidden">

        <img
          src={collection.banner}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30">

          {/* BREADCRUMB */}

          <div className="absolute top-8 left-8 text-white/80 text-sm">

            Home / Collections / {collection.title}

          </div>

          {/* CENTER CONTENT */}

          <div className="h-full flex items-center justify-center text-center px-6">

            <div>

              <p className="uppercase tracking-[5px] text-white/80">

                Desi Stitch Collection

              </p>

              <h1 className="text-5xl md:text-7xl font-black text-white mt-6">

                {collection.title}

              </h1>

              <p className="text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">

                {collection.subtitle}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FILTER BAR */}

      <section className="bg-white border-y border-gray-200">

        <div className="max-w-[1500px] mx-auto px-6 py-6 flex items-center justify-between">

          <button className="uppercase tracking-[2px] text-sm font-medium">

            Filter & Sort

          </button>

          <div className="flex items-center gap-10">

            <select className="bg-transparent outline-none text-sm">

              <option>
                Featured
              </option>

              <option>
                Price Low to High
              </option>

              <option>
                Price High to Low
              </option>

            </select>

            <p className="text-sm text-gray-500">

              {products.length} Products

            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="max-w-[1500px] mx-auto px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>

    </div>

  )
}