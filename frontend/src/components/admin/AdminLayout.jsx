import { Link } from 'react-router-dom'

export default function AdminLayout({

  children

}) {

  return (

    <div className="min-h-screen bg-[#faf8f4] flex">

      <aside className="w-[280px] bg-white border-r">

        <div className="p-8">

          <h1 className="text-2xl font-black">

            DESI STITCH

          </h1>

          <p className="text-gray-500 text-sm mt-1">

            Admin Panel

          </p>

        </div>

        <nav className="px-4 space-y-2">

          <Link
            to="/admin"
            className="block p-4 rounded-2xl hover:bg-gray-100"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="block p-4 rounded-2xl hover:bg-gray-100"
          >
            Products
          </Link>

          <Link
            to="/admin/categories"
            className="block p-4 rounded-2xl hover:bg-gray-100"
          >
            Categories
          </Link>

          <Link
            to="/admin/collections"
            className="block p-4 rounded-2xl hover:bg-gray-100"
          >
            Collections
          </Link>

          <Link
            to="/admin/orders"
            className="block p-4 rounded-2xl hover:bg-gray-100"
          >
            Orders
          </Link>

          <Link

  to="/admin/messages"

  className="block p-4 rounded-2xl hover:bg-gray-100"

>

  Messages

</Link>

<Link

  to="/admin/newsletter"

  className="block p-4 rounded-2xl hover:bg-gray-100"

>

  Newsletter

</Link>

        </nav>

        <div className="mt-10 px-4">

          <button

            onClick={() => {

              localStorage.removeItem(
                'admin_token'
              )

              window.location.href =
                '/admin/login'

            }}

            className="w-full bg-red-500 text-white py-3 rounded-2xl"

          >

            Logout

          </button>

        </div>

      </aside>

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>

  )

}