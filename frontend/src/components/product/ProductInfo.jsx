import { useState } from 'react'

import toast from 'react-hot-toast'

import useCartStore from '../../store/cartStore'

export default function ProductInfo({

  product

}) {

  const { addToCart } = useCartStore()

  const [size, setSize] = useState('M')

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  const handleAddToCart = () => {

    addToCart({
      ...product,
      selectedSize: size
    })

    toast.success('Added to cart')
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

      {/* ADD TO CART */}

      <button
        onClick={handleAddToCart}
        className="w-full mt-10 bg-black text-white py-4 rounded-full text-lg font-semibold hover:scale-[1.02] transition"
      >

        Add To Cart

      </button>

    </div>

  )
}