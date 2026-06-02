import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'
import AdminLayout from '../../components/admin/AdminLayout'

export default function ProductsAdmin() {

  const [categories, setCategories] = useState([])

const [collections, setCollections] = useState([])

  const [products, setProducts] = useState([])

  const [showForm, setShowForm] = useState(false)

  const [editingId, setEditingId] = useState(null)


  const [formData, setFormData] = useState({

    title: '',

    description: '',

    price: '',

    image_url: '',

    stock: '',

    category_id: '',

    collection_id: ''

  })

useEffect(() => {

  fetchProducts()

  fetchCategories()

  fetchCollections()

}, [])

  const fetchProducts = async () => {

    try {

      const response = await api.get('/products')

      setProducts(response.data)

    } catch (error) {

      console.log(error)

      toast.error('Failed to load products')

    }

  }

  const uploadImage = async (file) => {

  const data = new FormData()

  data.append(
    'file',
    file
  )

  try {

    const response = await api.post(

      '/upload',

      data,

      {
        headers: {
          'Content-Type':
            'multipart/form-data'
        }
      }

    )

    setFormData((prev) => ({

      ...prev,

      image_url:
        response.data.url

    }))

    toast.success(
      'Image uploaded'
    )

  } catch {

    toast.error(
      'Upload failed'
    )

  }

}


  const fetchCategories = async () => {

  try {

    const response = await api.get(
      '/categories'
    )

    setCategories(
      response.data
    )

  } catch (error) {

    console.log(error)

  }

}


const fetchCollections = async () => {

  try {

    const response = await api.get(
      '/collections'
    )

    setCollections(
      response.data
    )

  } catch (error) {

    console.log(error)

  }

}

  const saveProduct = async () => {


    if (
  !formData.title ||
  !formData.price ||
  !formData.stock ||
  !formData.category_id
) {

  toast.error(
    'Please fill all required fields'
  )

  return

}

  try {

    if (editingId) {

      await api.put(

        `/products/${editingId}`,

        {

    ...formData,

    price: Number(formData.price),

    stock: Number(formData.stock),

    category_id: Number(formData.category_id),

    collection_id:
  formData.collection_id
    ? Number(formData.collection_id)
    : null

  }

      )

      toast.success(
        'Product Updated'
      )

    } else {

      await api.post(
        '/products',
        {

    ...formData,

    price: Number(formData.price),

    stock: Number(formData.stock),

    category_id: Number(formData.category_id),

    collection_id:
  formData.collection_id
    ? Number(formData.collection_id)
    : null

  }
      )

      toast.success(
        'Product Created'
      )

    }

    setEditingId(null)

    setShowForm(false)

    fetchProducts()

    setFormData({

  title: '',

  description: '',

  price: '',

  image_url: '',

  stock: '',

  category_id: '',

  collection_id: ''

})

  } catch {

    toast.error(
      'Save Failed'
    )

  }

}

 const deleteProduct = async (id) => {

  toast((t) => (

    <div className="flex items-center gap-4">

      <span>

        Delete this product?

      </span>

      <button

        className="bg-red-500 text-white px-3 py-1 rounded"

        onClick={async () => {

          toast.dismiss(t.id)

          try {

            await api.delete(
              `/products/${id}`
            )

            toast.success(
              'Product deleted'
            )

            fetchProducts()

          } catch (error) {

            console.log(error)

            toast.error(
              'Delete failed'
            )

          }

        }}

      >

        Yes

      </button>

    </div>

  ))

}

  return (
      <AdminLayout>
    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <h1 className="text-5xl font-black">

          Products

        </h1>

       <button

  onClick={() => {

    if (!showForm) {

      setEditingId(null)

      setFormData({

        title: '',

        description: '',

        price: '',

        image_url: '',

        stock: '',

        category_id: '',

        collection_id: ''

      })

    }

    setShowForm(!showForm)

  }}

  className="bg-black text-white px-6 py-3 rounded-full"

>

  {showForm
    ? 'Close Form'
    : 'Add Product'}

</button>

      </div>

      {/* FORM */}

      {showForm && (

        <div className="bg-white rounded-[30px] p-8 mb-10 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">

             {editingId
    ? 'Edit Product'
    : 'Add Product'}

          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input

              value={formData.title}

              placeholder="Title"

              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value
                })
              }

              className="border p-4 rounded-2xl"

            />

            <input

              value={formData.price}

              placeholder="Price"

              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: e.target.value
                })
              }

              className="border p-4 rounded-2xl"

            />

              <div>

  <input

    type="file"

    accept="image/*"

    onChange={(e) =>
      uploadImage(
        e.target.files[0]
      )
    }

    className="border p-4 rounded-2xl w-full"

  />

  {formData.image_url && (

    <img

      src={formData.image_url}

      alt="Preview"

      className="w-40 h-40 object-cover rounded-2xl mt-4"

    />

  )}

</div>

            <input

              value={formData.stock}

              placeholder="Stock"

              onChange={(e) =>
                setFormData({
                  ...formData,
                  stock: e.target.value
                })
              }

              className="border p-4 rounded-2xl"

            />

           <select

  value={formData.category_id}

  onChange={(e) =>
    setFormData({
      ...formData,
      category_id: e.target.value
    })
  }

  className="border p-4 rounded-2xl"

>

  <option value="">

    Select Category

  </option>

  {categories.map((category) => (

    <option

      key={category.id}

      value={category.id}

    >

      {category.name}

    </option>

  ))}

</select>

            <select

  value={formData.collection_id}

  onChange={(e) =>
    setFormData({
      ...formData,
      collection_id: e.target.value
    })
  }

  className="border p-4 rounded-2xl"

>

  <option value="">

    Select Collection

  </option>

  {collections.map((collection) => (

    <option

      key={collection.id}

      value={collection.id}

    >

      {collection.title}

    </option>

  ))}

</select>

          </div>

          <textarea

            value={formData.description}

            placeholder="Description"

            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value
              })
            }

            className="w-full border p-4 rounded-2xl mt-4 h-32"

          />

          {/* IMAGE PREVIEW */}

          {formData.image_url && (

            <img

              src={formData.image_url}

              alt="preview"

              className="mt-6 h-40 rounded-2xl object-cover"

            />

          )}

        <button
  onClick={saveProduct}
  className="mt-6 bg-black text-white px-8 py-3 rounded-full"
>

  {editingId
    ? 'Update Product'
    : 'Create Product'}

</button>

        </div>

      )}

      {/* PRODUCTS TABLE */}

      <div className="bg-white rounded-[30px] overflow-hidden shadow-sm">

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

                      src={
                        product.image_url ||
                        'https://via.placeholder.com/150'
                      }

                      alt={product.title}

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

  onClick={() => {

    setEditingId(product.id)

    setFormData({

      title: product.title,

      description: product.description,

      price: product.price,

      image_url: product.image_url,

      stock: product.stock,

      category_id: product.category_id,

      collection_id: product.collection_id

    })

    setShowForm(true)

  }}

  className="text-blue-500 mr-4"

>

  Edit

</button>


                  <button

                    onClick={() =>
                      deleteProduct(product.id)
                    }

                    className="text-red-500 hover:text-red-700"

                  >

                    Delete

                  </button>


                  

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
      </AdminLayout>

  )

}