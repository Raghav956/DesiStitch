import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from '../services/api'

export default function CategoryScroll() {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    fetchCategories()

  }, [])

  const fetchCategories = async () => {

    const response = await api.get('/categories')

    setCategories(response.data)
  }

  return (

    <section className="py-8">

      <div className="px-4 mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Categories
        </h2>

      </div>

      <div className="flex gap-4 overflow-x-auto px-4">

        {categories.map((category) => (

          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="min-w-[170px] relative rounded-[30px] overflow-hidden"
          >

            <img
              src={category.image_url}
              className="w-full h-[220px] object-cover"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-4">

              <h3 className="text-white text-xl font-bold">
                {category.name}
              </h3>

            </div>

          </Link>

        ))}

      </div>

    </section>

  )
}