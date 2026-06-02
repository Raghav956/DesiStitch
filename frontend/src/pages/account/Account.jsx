import useAuthStore from '../../store/authStore'

export default function Account() {

  const { user } = useAuthStore()

  return (

    <div className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-12">

        My Account

      </h1>

      <div className="bg-white rounded-[30px] p-10 border">

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <p className="text-sm text-gray-500">

              Name

            </p>

            <p className="text-xl font-semibold mt-2">

              {user?.name}

            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">

              Email

            </p>

            <p className="text-xl font-semibold mt-2">

              {user?.email}

            </p>

          </div>

        </div>

      </div>

    </div>

  )

}