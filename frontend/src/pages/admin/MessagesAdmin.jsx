import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

export default function MessagesAdmin() {

  const [messages, setMessages] = useState([])

  useEffect(() => {

    fetchMessages()

  }, [])

  const fetchMessages = async () => {

    try {

      const response = await api.get(
        '/messages'
      )

      setMessages(
        response.data
      )

    } catch {

      toast.error(
        'Failed to load messages'
      )

    }

  }

  return (

    <AdminLayout>

      <h1 className="text-5xl font-black mb-10">

        Messages

      </h1>

      <div className="bg-white rounded-[30px] overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-5 text-left">

                Name

              </th>

              <th className="p-5 text-left">

                Email

              </th>

              <th className="p-5 text-left">

                Phone

              </th>

              <th className="p-5 text-left">

                Message

              </th>

              <th className="p-5 text-left">

                Date

              </th>

            </tr>

          </thead>

          <tbody>

            {messages.map((message) => (

              <tr

                key={message.id}

                className="border-b"

              >

                <td className="p-5">

                  {message.name}

                </td>

                <td className="p-5">

                  {message.email}

                </td>

                <td className="p-5">

                  {message.phone}

                </td>

                <td className="p-5 max-w-md">

                  {message.message}

                </td>

                <td className="p-5">

                  {new Date(

                    message.created_at

                  ).toLocaleString(

                    'en-IN'

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  )

}