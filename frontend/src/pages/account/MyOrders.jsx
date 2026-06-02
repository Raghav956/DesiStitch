import { useEffect, useState } from 'react'

import api from '../../services/api'

import toast from 'react-hot-toast'

export default function MyOrders() {

  const [orders, setOrders] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchOrders()

  }, [])

  const fetchOrders = async () => {

    try {

      const user = JSON.parse(

        localStorage.getItem(
          'desistitch_user'
        )

      )

      if (!user) {

        setLoading(false)

        return

      }

      const response = await api.get(

        `/orders/user/${user.id}`

      )

      setOrders(
        response.data
      )

    } catch (error) {

      console.log(error)

      toast.error(
        'Failed to load orders'
      )

    } finally {

      setLoading(false)

    }

  }

  if (loading) {

    return (

      <div className="py-40 text-center">

        Loading...

      </div>

    )

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-12">

        My Orders

      </h1>

      {orders.length === 0 ? (

        <div className="bg-white rounded-[30px] p-10 text-center">

          <h2 className="text-2xl font-bold">

            No Orders Yet

          </h2>

          <p className="text-gray-500 mt-3">

            Start shopping to see your orders here.

          </p>

        </div>

      ) : (

        <div className="space-y-8">

          {orders.map((order) => {

            let items = []

            try {

              items = JSON.parse(
                order.items
              )

            } catch {

              items = []

            }

            return (

              <div

                key={order.id}

                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  border
                "

              >

                {/* HEADER */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>

                    <h2 className="text-2xl font-bold">

                      Order #{order.id}

                    </h2>

                    <p className="text-gray-500 mt-2">

                      {new Date(
                        order.created_at
                      ).toLocaleString('en-IN')}

                    </p>

                  </div>

                  <div>

                    <span
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-gray-100
                        font-medium
                      "
                    >

                      {order.status}

                    </span>

                  </div>

                </div>

                {/* ITEMS */}

                <div className="mt-8 space-y-4">

                  {items.map((item) => (

                    <div

                      key={`${item.id}-${item.selectedSize}`}

                      className="
                        flex
                        items-center
                        gap-5
                        border-b
                        pb-4
                      "

                    >

                      <img

                        src={item.image_url}

                        alt={item.title}

                        className="
                          w-20
                          h-20
                          object-cover
                          rounded-xl
                        "

                      />

                      <div className="flex-1">

                        <h3 className="font-semibold">

                          {item.title}

                        </h3>

                        <p className="text-gray-500">

                          Size: {item.selectedSize}

                        </p>

                        <p className="text-gray-500">

                          Qty: {item.quantity}

                        </p>

                      </div>

                      <div className="font-bold">

                        ₹{item.price}

                      </div>

                    </div>

                  ))}

                </div>

                {/* FOOTER */}

                <div className="mt-6 flex justify-between items-center">

                  <span className="text-gray-500">

                    Payment:
                    {' '}
                    {order.payment_method}

                  </span>

                  <span className="text-2xl font-black">

                    ₹{order.total_amount}

                  </span>

                </div>

              </div>

            )

          })}

        </div>

      )}

    </div>

  )

}