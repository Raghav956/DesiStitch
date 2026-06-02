import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import api from '../../services/api'

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const login = async () => {

    try {

      const response = await api.post(

        '/admin/login',

        {

          email,

          password

        }

      )

      localStorage.setItem(

        'admin_token',

        response.data.access_token

      )

      toast.success(
        'Login Successful'
      )

      navigate('/admin')

    } catch {

      toast.error(
        'Invalid Credentials'
      )

    }

  }

  return (

    <div className="min-h-screen bg-[#faf8f4] flex items-center justify-center">

      <div className="bg-white w-[450px] p-10 rounded-[30px] shadow-sm">

        <h1 className="text-4xl font-black mb-8">

          Admin Login

        </h1>

        <div className="space-y-4">

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="w-full border p-4 rounded-2xl"

          />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            className="w-full border p-4 rounded-2xl"

          />

          <button

            onClick={login}

            className="w-full bg-black text-white py-4 rounded-2xl"

          >

            Login

          </button>

        </div>

      </div>

    </div>

  )

}