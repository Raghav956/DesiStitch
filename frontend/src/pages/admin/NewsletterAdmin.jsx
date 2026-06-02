import { useEffect, useState } from 'react'

import api from '../../services/api'

import AdminLayout from '../../components/admin/AdminLayout'

import toast from 'react-hot-toast'

export default function NewsletterAdmin() {

  const [subscribers, setSubscribers] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchSubscribers()

  }, [])

  const fetchSubscribers = async () => {

    try {

      const response = await api.get(
        '/newsletter'
      )

      setSubscribers(
        response.data
      )

    } catch (error) {

      console.log(error)

      toast.error(
        'Failed to load subscribers'
      )

    } finally {

      setLoading(false)

    }

  }

  const copyEmails = () => {

    const emails = subscribers

      .map((item) => item.email)

      .join('\n')

    navigator.clipboard.writeText(
      emails
    )

    toast.success(
      'Emails copied'
    )

  }

  return (

    <AdminLayout>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black">

            Newsletter

          </h1>

          <p className="text-gray-500 mt-2">

            Manage newsletter subscribers

          </p>

        </div>

        <button

          onClick={copyEmails}

          className="
            bg-black
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
          "

        >

          Copy Emails

        </button>

      </div>

      <div className="bg-white rounded-[30px] overflow-hidden">

        {loading ? (

          <div className="p-10">

            Loading...

          </div>

        ) : subscribers.length === 0 ? (

          <div className="p-10">

            No subscribers yet

          </div>

        ) : (

          <>

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">

                Total Subscribers: {subscribers.length}

              </h2>

            </div>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-5">

                    Email

                  </th>

                  <th className="text-left p-5">

                    Joined On

                  </th>

                </tr>

              </thead>

              <tbody>

                {subscribers.map(

                  (subscriber) => (

                    <tr

                      key={subscriber.id}

                      className="border-b"

                    >

                      <td className="p-5">

                        {subscriber.email}

                      </td>

                      <td className="p-5">

                        {

                          new Date(

                            subscriber.created_at

                          ).toLocaleString(
                            'en-IN'
                          )

                        }

                      </td>

                    </tr>

                  )

                )}

              </tbody>

            </table>

          </>

        )}

      </div>

    </AdminLayout>

  )

}