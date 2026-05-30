import { useEffect, useState } from 'react'

import api from '../services/api'

import CollectionsHero from '../components/collection/CollectionHero'

import CollectionCard from '../components/collection/CollectionCard'

export default function Collections() {

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

    <div>

      <CollectionsHero />

      {/* INTRO */}

      <section className="py-20">

        <div className="max-w-[1500px] mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-sm text-gray-500">

            Curated Fashion

          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-5">

            Discover Every Collection

          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-relaxed">

            Each collection tells a story through handcrafted fabrics, timeless silhouettes, and thoughtful design.

          </p>

        </div>

      </section>

      {/* COLLECTION GRID */}

      <section className="pb-24">

        <div className="max-w-[1500px] mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {collections.map((collection) => (

              <CollectionCard
                key={collection.id}
                collection={collection}
              />

            ))}

          </div>

        </div>

      </section>

    </div>

  )
}