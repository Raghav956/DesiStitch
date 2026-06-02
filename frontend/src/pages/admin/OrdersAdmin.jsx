import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

export default function OrdersAdmin() {

  const [orders, setOrders] = useState([])

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')

  const [selectedOrder, setSelectedOrder] = useState(null)

  useEffect(() => {

    fetchOrders()

  }, [])

  const parseItems = (items) => {

  try {

    return JSON.parse(items)

  } catch {

    return []

  }

}
  const fetchOrders = async () => {

    try {

      const response = await api.get(
        '/orders'
      )

      setOrders(response.data)

    } catch {

      toast.error(
        'Failed to load orders'
      )

    }

  }

  const updateStatus = async (

    id,

    status

  ) => {

    try {

      await api.put(
        `/orders/${id}/status?status=${status}`
      )

      toast.success(
        'Status updated'
      )

      fetchOrders()

    } catch {

      toast.error(
        'Update failed'
      )

    }

  }

  const filteredOrders = orders.filter((order) => {

    const matchesSearch =

      order.customer_name
        ?.toLowerCase()
        .includes(search.toLowerCase())

      ||

      order.phone?.includes(search)

      ||

      String(order.id).includes(search)

    const matchesFilter =

      filter === 'All'

        ? true

        : order.status === filter

    return matchesSearch && matchesFilter

  })

  return (

    <AdminLayout>

      <h1 className="text-5xl font-black mb-10">

        Orders

      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="bg-white p-6 rounded-3xl">

          <p className="text-gray-500">

            Total Orders

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {orders.length}

          </h2>

        </div>

        <div className="bg-white p-6 rounded-3xl">

          <p className="text-gray-500">

            Pending

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {
              orders.filter(
                o => o.status === 'Pending'
              ).length
            }

          </h2>

        </div>

        <div className="bg-white p-6 rounded-3xl">

          <p className="text-gray-500">

            Shipped

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {
              orders.filter(
                o => o.status === 'Shipped'
              ).length
            }

          </h2>

        </div>

        <div className="bg-white p-6 rounded-3xl">

          <p className="text-gray-500">

            Delivered

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {
              orders.filter(
                o => o.status === 'Delivered'
              ).length
            }

          </h2>

        </div>

      </div>

      {/* SEARCH + FILTER */}

      <div className="flex gap-4 mb-8">

        <input

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          placeholder="Search by customer, phone, order id"

          className="border p-4 rounded-2xl flex-1"

        />

        <select

          value={filter}

          onChange={(e) =>
            setFilter(
              e.target.value
            )
          }

          className="border p-4 rounded-2xl"

        >

          <option>
            All
          </option>

          <option>
            Pending
          </option>

          <option>
            Packed
          </option>

          <option>
            Shipped
          </option>

          <option>
            Delivered
          </option>

          <option>
            Cancelled
          </option>

        </select>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-[30px] overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-5 text-left">

                Order #

              </th>

              <th className="p-5 text-left">

                Customer

              </th>

              <th className="p-5 text-left">

                Phone

              </th>

              <th className="p-5 text-left">

                Date

              </th>

              <th className="p-5 text-left">

                Total

              </th>

              <th className="p-5 text-left">

                Payment

              </th>

              <th className="p-5 text-left">

                Items

                </th>

              <th className="p-5 text-left">

                Status

              </th>

              <th className="p-5 text-left">

                Action

              </th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order) => (

              <tr

                key={order.id}

                className="border-b"

              >

                <td className="p-5">

                  #{order.id}

                </td>

                <td className="p-5">

                  {order.customer_name}

                </td>

                <td className="p-5">

                  {order.phone}

                </td>

                <td className="p-5">

                  {

                    order.created_at

                      ? new Date(
                          order.created_at
                        ).toLocaleDateString()

                      : '-'

                  }

                </td>

                <td className="p-5">

                  ₹{order.total_amount}

                </td>

                <td className="p-5">

  {order.payment_method}

</td>

<td className="p-5">

  {parseItems(order.items).map(

    (item, index) => (

      <div

        key={index}

        className="mb-3"

      >

        <p className="font-semibold">

          {item.title}

        </p>

        <p className="text-sm text-gray-500">

          Qty: {item.quantity}

        </p>

        <p className="text-sm text-gray-500">

          Size: {item.selectedSize}

        </p>

      </div>

    )

  )}

</td>

<td className="p-5">

  <select

    value={order.status}

    onChange={(e) =>
      updateStatus(
        order.id,
        e.target.value
      )
    }

    className="border rounded-xl p-2"

  >

    <option>
      Pending
    </option>

    <option>
      Packed
    </option>

    <option>
      Shipped
    </option>

    <option>
      Delivered
    </option>

    <option>
      Cancelled
    </option>

  </select>

</td>

<td className="p-5">

  <button

    onClick={() =>
      setSelectedOrder(
        order
      )
    }

    className="text-blue-500"

  >

    View

  </button>

</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ORDER MODAL */}

      {selectedOrder && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[700px] rounded-[30px] p-8">

            <div className="flex justify-between mb-6">

              <h2 className="text-3xl font-bold">

                Order #{selectedOrder.id}

              </h2>

              <button

                onClick={() =>
                  setSelectedOrder(null)
                }

              >

                ✕

              </button>

            </div>

            <div className="space-y-3">

              <p>

                <strong>Name:</strong>{' '}

                {selectedOrder.customer_name}

              </p>

              <p>

                <strong>Phone:</strong>{' '}

                {selectedOrder.phone}

              </p>

              <p>

                <strong>Address:</strong>{' '}

                {selectedOrder.address}

              </p>

              <p>

                <strong>City:</strong>{' '}

                {selectedOrder.city}

              </p>

              <p>

                <strong>State:</strong>{' '}

                {selectedOrder.state}

              </p>

              <p>

                <strong>Pincode:</strong>{' '}

                {selectedOrder.pincode}

              </p>

              <p>

                <strong>Payment:</strong>{' '}

                {selectedOrder.payment_method}

              </p>

              <p>

                <strong>Total:</strong>{' '}

                ₹{selectedOrder.total_amount}

              </p>

            <div>

  <strong>Items:</strong>

  <div className="bg-gray-100 p-4 rounded-xl mt-2">

    {parseItems(selectedOrder.items).map((item, index) => (

      <div

        key={index}

        className="border-b pb-3 mb-3"

      >

        <p className="font-semibold">

          {item.title}

        </p>

        <p>

          Quantity: {item.quantity}

        </p>

        <p>

          Size: {item.selectedSize}

        </p>

        <p>

          Price: ₹{item.price}

        </p>

        <p>

          Subtotal: ₹{

            item.price *
            item.quantity

          }

        </p>

      </div>

    ))}

  </div>

</div>

            </div>

          </div>

        </div>

      )}

    </AdminLayout>

  )

}