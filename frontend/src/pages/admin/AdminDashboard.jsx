import AdminLayout from '../../components/admin/AdminLayout'

export default function AdminDashboard() {

  return (

    <AdminLayout>

      <h1 className="text-5xl font-black">

        Dashboard

      </h1>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Products

          </p>

          <h2 className="text-4xl font-black mt-2">

            0

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Categories

          </p>

          <h2 className="text-4xl font-black mt-2">

            0

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Collections

          </p>

          <h2 className="text-4xl font-black mt-2">

            0

          </h2>

        </div>

        <div className="bg-white p-8 rounded-[30px]">

          <p className="text-gray-500">

            Orders

          </p>

          <h2 className="text-4xl font-black mt-2">

            0

          </h2>

        </div>

      </div>

    </AdminLayout>

  )
}