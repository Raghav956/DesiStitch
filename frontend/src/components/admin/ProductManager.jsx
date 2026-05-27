import { useEffect, useState } from 'react'

import api from '../../services/api'

export default function ProductManager() {

  const [products, setProducts] = useState([])

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image_url: '',
    stock: '',
    category_id: ''
  })

  useEffect(() => {

    fetchProducts()

  }, [])

  const fetchProducts = async () => {

    const response = await api.get('/products')

    setProducts(response.data)
  }

  const createProduct = async () => {

    await api.post('/products', {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      category_id: Number(form.category_id)
    })

    fetchProducts()

    setForm({
      title: '',
      description: '',
      price: '',
      image_url: '',
      stock: '',
      category_id: ''
    })
  }

  return (

    <div>

      <div className="bg-white p-5 rounded-3xl shadow-sm">

        <h2 className="text-2xl font-bold mb-5">
          Add Product
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value
              })
            }
            className="w-full border p-4 rounded-2xl"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value
              })
            }
            className="w-full border p-4 rounded-2xl"
          />

          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value
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

          <input
            placeholder="Stock"
            value={form.stock}
            onChange={(e) =>
              setForm({
                ...form,
                stock: e.target.value
              })
            }
            className="w-full border p-4 rounded-2xl"
          />

          <input
            placeholder="Category ID"
            value={form.category_id}
            onChange={(e) =>
              setForm({
                ...form,
                category_id: e.target.value
              })
            }
            className="w-full border p-4 rounded-2xl"
          />

          <button
            onClick={createProduct}
            className="w-full bg-black text-white py-4 rounded-2xl"
          >
            Create Product
          </button>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden"
          >

            <img
              src={product.image_url}
              className="w-full aspect-[3/4] object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {product.title}
              </h3>

              <p className="text-gray-500">
                ₹{product.price}
              </p>

            </div>
            <button
  onClick={async () => {

    await api.delete(`/products/${product.id}`)

    fetchProducts()

  }}
  className="mt-4 w-full bg-red-500 text-white py-3 rounded-2xl"
>
  Delete
</button>

          </div>

        ))}

      </div>

    </div>

  )
}