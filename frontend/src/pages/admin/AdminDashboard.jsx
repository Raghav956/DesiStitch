import { useEffect, useState } from 'react'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

export default function AdminDashboard() {

  const [stats, setStats] = useState({

    products: 0,

    categories: 0,

    collections: 0,

    orders: 0,

    messages: 0,

    subscribers: 0

  })

  useEffect(() => {

    fetchStats()

  }, [])

  const fetchStats = async () => {

    try {

      const response = await api.get(
        '/dashboard/stats'
      )

      setStats(
        response.data
      )

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <AdminLayout>

      <h1 className="text-5xl font-black">

        Dashboard

      </h1>

      <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6 mt-10">

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Products

          </p>

          <h2 className="text-4xl font-black mt-2">

            {stats.products}

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Categories

          </p>

          <h2 className="text-4xl font-black mt-2">

            {stats.categories}

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Collections

          </p>

          <h2 className="text-4xl font-black mt-2">

            {stats.collections}

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Orders

          </p>

          <h2 className="text-4xl font-black mt-2">

            {stats.orders}

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Messages

          </p>

          <h2 className="text-4xl font-black mt-2">

            {stats.messages}

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px] border-2 border-black">

          <p className="text-gray-500">

            Newsletter

          </p>

          <h2 className="text-4xl font-black mt-2">

            {stats.subscribers}

          </h2>

        </div>

      </div>

    </AdminLayout>

  )

}