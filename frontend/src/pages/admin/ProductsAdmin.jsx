import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

export default function ProductsAdmin() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchProducts()

  }, [])

  const [formData, setFormData] = useState({

  title: '',

  description: '',

  price: '',

  image_url: '',

  stock: '',

  category_id: '',

  collection_id: ''

})
const createProduct = async () => {

  try {

    await api.post(
      '/products',
      formData
    )

    toast.success(
      'Product created'
    )

    fetchProducts()

  } catch {

    toast.error(
      'Failed to create product'
    )

  }

}
  const fetchProducts = async () => {

    try {

      const response = await api.get(
        '/products'
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  const deleteProduct = async (id) => {

    try {

      await api.delete(
        `/products/${id}`
      )

      toast.success(
        'Product deleted'
      )

      fetchProducts()

    } catch (error) {

      toast.error(
        'Delete failed'
      )
    }
  }

  return (

    <AdminLayout>

      <div className="flex items-center justify-between mb-10">

        <h1 className="text-5xl font-black">

          Products

        </h1>

        <button className="bg-black text-white px-6 py-3 rounded-full">

          Add Product

        </button>

      </div>

      <div className="bg-white rounded-[30px] overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-5 text-left">

                Product

              </th>

              <th className="p-5 text-left">

                Price

              </th>

              <th className="p-5 text-left">

                Stock

              </th>

              <th className="p-5 text-left">

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-b"
              >

                <td className="p-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={product.image_url}
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">

                        {product.title}

                      </h3>

                    </div>

                  </div>

                </td>

                <td className="p-5">

                  ₹{product.price}

                </td>

                <td className="p-5">

                  {product.stock}

                </td>

                <td className="p-5">

                  <button

                    onClick={() =>
                      deleteProduct(
                        product.id
                      )
                    }

                    className="text-red-500"

                  >

                    Delete

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  )
}