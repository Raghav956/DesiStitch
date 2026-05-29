import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

export default function CollectionShowcase() {

  const [collections, setCollections] = useState([])

  useEffect(() => {

    fetchCollections()

  }, [])

  const fetchCollections = async () => {

    try {

      const response = await api.get('/collections')

      setCollections(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <section className="py-24 bg-cream">

      {/* SECTION HEADER */}

      <div className="max-w-site mx-auto px-6 mb-14">

        <p className="uppercase tracking-[5px] text-sm text-gray-500">

          Curated Collections

        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">

          <h2 className="text-4xl md:text-6xl font-black leading-none">

            Crafted
            <br />
            For Every Mood

          </h2>

          <p className="max-w-lg text-gray-600 leading-relaxed">

            Explore handcrafted fashion collections inspired by timeless Indian silhouettes and modern elegance.

          </p>

        </div>

      </div>

      {/* COLLECTION GRID */}

      <div className="max-w-site mx-auto px-6 grid md:grid-cols-2 gap-6">

        {collections.map((collection) => (

          <Link
            key={collection.id}
            to={`/collections/${collection.slug}`}
            className="group relative overflow-hidden rounded-luxury"
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={collection.banner}
                className="h-[650px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/20 flex items-end p-8">

              <div>

                <p className="uppercase tracking-[4px] text-white/80 text-sm">

                  Desi Stitch Collection

                </p>

                <h3 className="text-white text-4xl md:text-5xl font-bold mt-3">

                  {collection.title}

                </h3>

                <p className="text-white/90 mt-4 max-w-md leading-relaxed">

                  {collection.subtitle}

                </p>

                <button className="mt-6 text-white border-b border-white">

                  Explore Collection

                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  )
}