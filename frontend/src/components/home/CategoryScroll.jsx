import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

export default function CategoryScroll() {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    fetchCategories()

  }, [])

  const fetchCategories = async () => {

    try {

      const response = await api.get('/categories')

      setCategories(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <section className="py-24 bg-white overflow-hidden">

      {/* HEADER */}

      <div className="max-w-site mx-auto px-6 mb-12">

        <p className="uppercase tracking-[5px] text-sm text-gray-500">

          Browse Categories

        </p>

        <h2 className="text-4xl md:text-6xl font-black mt-4">

          Shop By Style

        </h2>

      </div>

      {/* SCROLL AREA */}

      <div className="overflow-x-auto scrollbar-hide">

        <div className="flex gap-6 px-6 w-max">

          {categories.map((category) => (

            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group flex-shrink-0"
            >

              {/* IMAGE */}

              <div className="w-[220px] md:w-[280px]">

                <div className="overflow-hidden rounded-luxury bg-[#f5f1ea]">

                  <img
                    src={category.image_url}
                    className="h-[320px] md:h-[380px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                {/* TEXT */}

                <div className="mt-5 flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-bold">

                      {category.name}

                    </h3>

                    <p className="text-gray-500 mt-1">

                      Explore Collection

                    </p>

                  </div>

                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition">

                    →

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  )
}