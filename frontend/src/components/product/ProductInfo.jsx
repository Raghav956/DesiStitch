import { useState } from 'react'

import toast from 'react-hot-toast'

import useCartStore from '../../store/cartStore'
import { Heart } from 'lucide-react'

import useWishlistStore from '../../store/wishlistStore'
export default function ProductInfo({

  product

}) {



  const { addToCart } = useCartStore()

  const {

  addToWishlist,

  removeFromWishlist,

  isInWishlist

} = useWishlistStore()

const wished = isInWishlist(
  product.id
)

  const [size, setSize] = useState('M')

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  const handleAddToCart = () => {

  const added = addToCart({

    ...product,

    selectedSize: size

  })

  if (added) {

    toast.success(
      'Added to cart'
    )

  } else {

    toast.error(
      'Maximum stock reached'
    )

  }

}

  return (

    <div>

      <p className="uppercase tracking-[4px] text-sm text-gray-500">

        Desi Stitch

      </p>

      <h1 className="text-4xl md:text-5xl font-black mt-3">

        {product.title}

      </h1>

      <p className="text-3xl font-bold mt-6">

        ₹{product.price}
      </p>

      <p className="mt-2 text-sm text-gray-500">

  {product.stock > 0

    ? `${product.stock} pieces available`

    : 'Out of stock'}

</p>

      <p className="text-gray-600 mt-6 leading-relaxed">

        {product.description}
      </p>

      {/* SIZES */}

      <div className="mt-10">

        <h3 className="font-semibold mb-4">

          Select Size

        </h3>

        <div className="flex gap-3">

          {sizes.map((item) => (

            <button
              key={item}
              onClick={() => setSize(item)}
              className={`w-12 h-12 rounded-full border ${
                size === item
                  ? 'bg-black text-white'
                  : ''
              }`}
            >

              {item}

            </button>

          ))}

        </div>

      </div>

      <button

  onClick={() => {

    if (wished) {

      removeFromWishlist(
        product.id
      )

      toast.success(
        'Removed from wishlist'
      )

    } else {

      addToWishlist(
        product
      )

      toast.success(
        'Added to wishlist'
      )

    }

  }}

  className="
    w-full
    mt-10
    border
    py-4
    rounded-full
    text-lg
    font-semibold
    flex
    items-center
    justify-center
    gap-2
  "

>

  <Heart

    size={20}

    fill={
      wished
        ? 'currentColor'
        : 'none'
    }

  />

  {wished

    ? 'Remove From Wishlist'

    : 'Add To Wishlist'}

</button>

      {/* ADD TO CART */}

      {product.stock > 0 ? (

  <button

    onClick={handleAddToCart}

    className="w-full mt-4 bg-black text-white py-4 rounded-full text-lg font-semibold hover:scale-[1.02] transition"

  >

    Add To Cart

  </button>

) : (

  <button

    disabled

    className="w-full mt-4 bg-gray-400 text-white py-4 rounded-full text-lg font-semibold cursor-not-allowed"

  >

    Out Of Stock

  </button>

)}

    </div>

  )
}