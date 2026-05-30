import { Link } from 'react-router-dom'

import {
  Heart,
  ShoppingBag
} from 'lucide-react'

import useCartStore from '../../store/cartStore'
import toast from 'react-hot-toast'

export default function ProductCard({

  product

}) {

  const { addToCart } = useCartStore()

  const handleAddToCart = (e) => {

    e.preventDefault()

    addToCart(product)
    toast.success(
    'Added to cart'
  )
  }

  return (

    <Link
      to={`/product/${product.id}`}
      className="group block"
    >

      <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        {/* IMAGE */}

        <div className="relative overflow-hidden">

          <img
            src={product.image_url}
            alt={product.title}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
          />

          {/* WISHLIST */}

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >

            <Heart
              size={18}
              strokeWidth={1.7}
            />

          </button>

        </div>

        {/* CONTENT */}

        <div className="p-5">

          <p className="text-xs uppercase tracking-[3px] text-gray-500">

            Desi Stitch

          </p>

          <h3 className="text-lg font-semibold mt-2 line-clamp-1">

            {product.title}

          </h3>

          <div className="mt-3 flex items-center justify-between">

            <p className="text-xl font-bold">

              ₹{product.price}

            </p>

            <button

              onClick={handleAddToCart}

              className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition"

            >

              <ShoppingBag size={16} />

            </button>

          </div>

        </div>

      </div>

    </Link>

  )
}