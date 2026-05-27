import { useEffect, useState } from 'react'

import api from '../../services/api'

export default function CategoryManager() {

  const [categories, setCategories] = useState([])

  const [form, setForm] = useState({
    name: '',
    image_url: ''
  })

  useEffect(() => {

    fetchCategories()

  }, [])

  const fetchCategories = async () => {

    const response = await api.get('/categories')

    setCategories(response.data)
  }

  const createCategory = async () => {

    await api.post('/categories', form)

    fetchCategories()

    setForm({
      name: '',
      image_url: ''
    })
  }

  return (

    <div>

      <div className="bg-white p-5 rounded-3xl shadow-sm">

        <h2 className="text-2xl font-bold mb-5">
          Add Category
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Category Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
            className="w-full border p-4 rounded-2xl"
          />

          <input
            placeholder="Image URL"
            value={form.image_url}
            onChange={(e) =>
              setForm({
                ...form,
                image_url: e.target.value
              })
            }
            className="w-full border p-4 rounded-2xl"
          />

          <button
            onClick={createCategory}
            className="w-full bg-black text-white py-4 rounded-2xl"
          >
            Create Category
          </button>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        {categories.map((category) => (

          <div
            key={category.id}
            className="bg-white rounded-3xl overflow-hidden"
          >

            <img
              src={category.image_url}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {category.name}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}