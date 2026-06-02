import { useState } from 'react'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function Contact() {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    phone: '',

    message: ''

  })

  const handleSubmit = async (

    e

  ) => {

    e.preventDefault()

    try {

      await api.post(

        '/messages',

        formData

      )

      toast.success(

        'Message sent successfully'

      )

      setFormData({

        name: '',

        email: '',

        phone: '',

        message: ''

      })

    } catch {

      toast.error(

        'Failed to send message'

      )

    }

  }

  return (

    <div className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-8">

        Contact Us

      </h1>

      <form

        onSubmit={handleSubmit}

        className="space-y-6"

      >

      <input

  required

  placeholder="Name"

  value={formData.name}

  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value
    })
  }

  className="w-full border p-4 rounded-2xl"

/>

<input

  required

  type="email"

  placeholder="Email"

  value={formData.email}

  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value
    })
  }

  className="w-full border p-4 rounded-2xl"

/>

        <input

  required

  type="tel"

  pattern="[0-9]{10}"

  placeholder="Phone"

  value={formData.phone}

  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }

  className="w-full border p-4 rounded-2xl"

/>

       <textarea

  required

  rows={6}

  placeholder="Message"

  value={formData.message}

  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value
    })
  }

  className="w-full border p-4 rounded-2xl"

/>

        <button

          className="bg-black text-white px-8 py-4 rounded-full"

        >

          Send Message

        </button>

      </form>

    </div>

  )

}