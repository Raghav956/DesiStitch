import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from '../services/api'

export default function Collections() {

  const [collections, setCollections] = useState([])

  useEffect(() => {

    fetchCollections()

  }, [])

  const fetchCollections = async () => {

    const response = await api.get('/collections')

    setCollections(response.data)
  }

  return (

    <div className="min-h-screen bg-[#faf7f2]">

      <section className="px-6 py-16 text-center">

        <p className="uppercase tracking-[5px] text-sm text-gray-500">

          Desi Stitch

        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-5">

          Collections

        </h1>

      </section>

      <section className="grid md:grid-cols-2 gap-6 px-6 pb-20">

        {collections.map((collection) => (

          <Link
            key={collection.id}
            to={`/collections/${collection.slug}`}
            className="group relative overflow-hidden rounded-[40px]"
          >

            <img
              src={collection.banner}
              className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-8">

              <div>

                <h2 className="text-white text-4xl font-bold">

                  {collection.title}

                </h2>

                <p className="text-white/90 mt-4 max-w-md">

                  {collection.subtitle}

                </p>

              </div>

            </div>

          </Link>

        ))}

      </section>

    </div>

  )
}