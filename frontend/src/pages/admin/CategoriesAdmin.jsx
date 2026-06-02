import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

export default function CategoriesAdmin() {

  const [categories, setCategories] = useState([])

  const [name, setName] = useState('')
const [editingId, setEditingId] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {

    fetchCategories()

  }, [])

  const fetchCategories = async () => {

    const response = await api.get(
      '/categories'
    )

    setCategories(response.data)

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

    setImageUrl(
      response.data.url
    )

    toast.success(
      'Image uploaded'
    )

  } catch {

    toast.error(
      'Upload failed'
    )

  }

}

const saveCategory = async () => {

  if (!name.trim()) {

    toast.error(
      'Category name is required'
    )

    return

  }

  try {

    if (editingId) {

      await api.put(

        `/categories/${editingId}`,

        {
          name,
          image_url: imageUrl
        }

      )

      toast.success(
        'Category Updated'
      )

    } else {

      await api.post(

        '/categories',

        {
          name,
          image_url: imageUrl
        }

      )

      toast.success(
        'Category Created'
      )

    }

    setEditingId(null)

    setName('')

    setImageUrl('')

    fetchCategories()

  } catch {

    toast.error(
      'Save Failed'
    )

  }

}

  const deleteCategory = async (id) => {

    await api.delete(
      `/categories/${id}`
    )

    toast.success(
      'Deleted'
    )

    fetchCategories()

  }

  return (

    <AdminLayout>

      <h1 className="text-5xl font-black mb-10">

        Categories

      </h1>

      <div className="bg-white p-8 rounded-[30px] mb-10">

        <h2 className="text-2xl font-bold mb-6">

          {editingId
  ? 'Edit Category'
  : 'Add Category'}

        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Category Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="border p-4 rounded-2xl"
          />

         <div>

  <input

    type="file"

    accept="image/*"

    onChange={(e) => {

      const file =
        e.target.files?.[0]

      if (!file) return

      uploadImage(file)

    }}

    className="border p-4 rounded-2xl w-full"

  />

  {imageUrl && (

    <img

      src={imageUrl}

      alt="Category Preview"

      className="w-40 h-40 object-cover rounded-2xl mt-4"

    />

  )}

</div>

        </div>

        <button
          onClick={saveCategory}
          className="mt-6 bg-black text-white px-8 py-3 rounded-full"
        >

         {editingId
  ? 'Update Category'
  : 'Create Category'}

        </button>
        {editingId && (

  <button

    onClick={() => {

      setEditingId(null)

      setName('')

      setImageUrl('')

    }}

    className="ml-4 px-8 py-3 rounded-full border"

  >

    Cancel

  </button>

)}

      </div>

      <div className="bg-white rounded-[30px] overflow-hidden">

        <table className="w-full">

          <thead>

            <tr>

              <th className="p-5 text-left">

                Image

              </th>

              <th className="p-5 text-left">

                Name

              </th>

              <th className="p-5 text-left">

                Action

              </th>

            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (

              <tr
                key={category.id}
                className="border-t"
              >

                <td className="p-5">

                  <img
                    src={category.image_url}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                </td>

                <td className="p-5">

                  {category.name}

                </td>

                <td className="p-5">


<button

  onClick={() => {

    setEditingId(
      category.id
    )

    setName(
      category.name
    )

    setImageUrl(
      category.image_url
    )

  }}

  className="text-blue-500 mr-4"

>

  Edit

</button>

                  <button
                    onClick={() =>
                      deleteCategory(
                        category.id
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