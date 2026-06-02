import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

export default function CollectionsAdmin() {

  const [collections, setCollections] = useState([])
    const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({

    title: '',

    slug: '',

    subtitle: '',

    banner: ''

  })

  useEffect(() => {

    fetchCollections()

  }, [])

  const fetchCollections = async () => {

    const response = await api.get(
      '/collections'
    )

    setCollections(
      response.data
    )

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

  banner:
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

  const saveCollection = async () => {

  if (!formData.title.trim()) {

    toast.error(
      'Collection title is required'
    )

    return

  }

  try {

    if (editingId) {

      await api.put(

        `/collections/${editingId}`,

        formData

      )

      toast.success(
        'Collection Updated'
      )

    } else {

      await api.post(

        '/collections',

        formData

      )

      toast.success(
        'Collection Created'
      )

    }

    setEditingId(null)

    setFormData({

      title: '',

      slug: '',

      subtitle: '',

      banner: ''

    })

    fetchCollections()

  } catch {

    toast.error(
      'Save Failed'
    )

  }

}
  const deleteCollection = async (id) => {

    await api.delete(
      `/collections/${id}`
    )

    toast.success(
      'Deleted'
    )

    fetchCollections()

  }

  return (

    <AdminLayout>

      <h1 className="text-5xl font-black mb-10">

        Collections

      </h1>

      <div className="bg-white p-8 rounded-[30px] mb-10">

        <h2 className="text-2xl font-bold mb-6">

         {editingId
  ? 'Edit Collection'
  : 'Create Collection'}

        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value
              })
            }
            className="border p-4 rounded-2xl"
          />

          <input
            placeholder="Slug"
            value={formData.slug}
            onChange={(e) =>
              setFormData({
                ...formData,
                slug: e.target.value
              })
            }
            className="border p-4 rounded-2xl"
          />

          <input
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({
                ...formData,
                subtitle: e.target.value
              })
            }
            className="border p-4 rounded-2xl"
          />

          <div>

  <input

    type="file"

    accept="image/*,video/*"

    onChange={(e) =>
      uploadImage(
        e.target.files[0]
      )
    }

    className="border p-4 rounded-2xl w-full"

  />

  {formData.banner && (

  formData.banner.includes('.mp4')

  ||

  formData.banner.includes('/video/')

    ? (

      <video

        src={formData.banner}

        controls

        className="h-40 mt-4 rounded-2xl"

      />

    )

    : (

      <img

        src={formData.banner}

        alt="Banner Preview"

        className="h-40 mt-4 rounded-2xl object-cover"

      />

    )

)}

</div>

        </div>

        

        <button
          onClick={saveCollection}
          className="mt-6 bg-black text-white px-8 py-3 rounded-full"
        >

          {editingId
  ? 'Update Collection'
  : 'Create Collection'}



        </button>


        {editingId && (

  <button

    onClick={() => {

      setEditingId(null)

      setFormData({

        title: '',

        slug: '',

        subtitle: '',

        banner: ''

      })

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

                Banner

              </th>

              <th className="p-5 text-left">

                Title

              </th>

              <th className="p-5 text-left">

                Slug

              </th>

              <th className="p-5 text-left">

                Action

              </th>

            </tr>

          </thead>

          <tbody>

            {collections.map((collection) => (

              <tr
                key={collection.id}
                className="border-t"
              >

                <td className="p-5">

                 {collection.banner?.includes('.mp4')

 ||

 collection.banner?.includes('/video/')

  ? (

    <video

      src={collection.banner}

      className="w-20 h-16 rounded-xl object-cover"

    />

  )

  : (

    <img

      src={collection.banner}

      className="w-20 h-16 rounded-xl object-cover"

    />

  )}

                </td>

                <td className="p-5">

                  {collection.title}

                </td>

                <td className="p-5">

                  {collection.slug}

                </td>

                <td className="p-5">
                <button

  onClick={() => {

    setEditingId(
      collection.id
    )

    setFormData({

      title: collection.title,

      slug: collection.slug,

      subtitle: collection.subtitle,

      banner: collection.banner

    })

  }}

  className="text-blue-500 mr-4"

>

  Edit

</button>
                  <button
                    onClick={() =>
                      deleteCollection(
                        collection.id
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