import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import api from '../../services/api'

export default function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    password: '',

    confirmPassword: ''

  })

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (

      formData.password !==

      formData.confirmPassword

    ) {

      toast.error(

        'Passwords do not match'

      )

      return

    }

    try {

      await api.post(

        '/auth/signup',

        {

          name: formData.name,

          email: formData.email,

          password: formData.password

        }

      )

      toast.success(

        'Account created successfully'

      )

      navigate('/login')

    } catch (error) {

      toast.error(

        error.response?.data?.detail ||

        'Signup failed'

      )

    }

  }

  return (

    <div className="max-w-md mx-auto px-6 py-24">

      <h1 className="text-5xl font-black mb-10">

        Sign Up

      </h1>

      <form

        onSubmit={handleSubmit}

        className="space-y-5"

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

          className="w-full border rounded-2xl p-4"

        />

        <input

          type="email"

          required

          placeholder="Email"

          value={formData.email}

          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }

          className="w-full border rounded-2xl p-4"

        />

        <input

          type="password"

          required

          placeholder="Password"

          value={formData.password}

          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }

          className="w-full border rounded-2xl p-4"

        />

        <input

          type="password"

          required

          placeholder="Confirm Password"

          value={formData.confirmPassword}

          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword:
                e.target.value
            })
          }

          className="w-full border rounded-2xl p-4"

        />

        <button

          type="submit"

          className="w-full bg-black text-white py-4 rounded-full font-semibold"

        >

          Create Account

        </button>

      </form>

      <p className="mt-6 text-center">

        Already have an account?

        <Link

          to="/login"

          className="ml-2 font-semibold"

        >

          Login

        </Link>

      </p>

    </div>

  )

}