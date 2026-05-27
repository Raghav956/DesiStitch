import useCartStore from '../store/cartStore'
import { Link } from 'react-router-dom'
export default function ProductCard({ product }) {

  const { addToCart } = useCartStore()

  return (

    <Link
  to={`/product/${product.id}`}
  className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
>

      <div className="overflow-hidden">

        <img
          src={product.image_url}
          className="w-full aspect-[3/4] object-cover hover:scale-105 transition duration-500"
        />

      </div>

      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {product.title}
        </h3>

        <p className="text-gray-500 mt-1">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-black text-white py-3 rounded-2xl"
        >
          Add To Cart
        </button>

      </div>

    </Link>

  )
}