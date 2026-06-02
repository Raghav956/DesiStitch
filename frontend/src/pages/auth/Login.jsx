import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import api from '../../services/api'

import useAuthStore from '../../store/authStore'

export default function Login() {

  const navigate = useNavigate()

  const login = useAuthStore(
    (state) => state.login
  )

  const [formData, setFormData] = useState({

    email: '',

    password: ''

  })

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await api.post(

        '/auth/login',

        formData

      )

      login(

        response.data.user,

        response.data.access_token

      )

      toast.success(

        'Login successful'

      )

      navigate('/')

    } catch (error) {

      toast.error(

        error.response?.data?.detail ||

        'Login failed'

      )

    }

  }

  return (

    <div className="max-w-md mx-auto px-6 py-24">

      <h1 className="text-5xl font-black mb-10">

        Login

      </h1>

      <form

        onSubmit={handleSubmit}

        className="space-y-5"

      >

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

        <button

          type="submit"

          className="w-full bg-black text-white py-4 rounded-full font-semibold"

        >

          Login

        </button>

      </form>

      <p className="mt-6 text-center">

        Don't have an account?

        <Link

          to="/signup"

          className="ml-2 font-semibold"

        >

          Sign Up

        </Link>

      </p>

    </div>

  )

}