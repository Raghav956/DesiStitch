import { Link } from 'react-router-dom'

export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">

      <div className="flex items-center justify-between px-4 py-4">

        <Link to="/">

          <div>

            <h1 className="text-2xl font-bold">
              Desi Stitch
            </h1>

            <p className="text-xs text-gray-500">
              by Shivika
            </p>

          </div>

        </Link>

        <div className="flex items-center gap-5">

          <Link to="/shop">
            Shop
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>

      </div>

    </nav>

  )
}