import { Link } from 'react-router-dom'

import {
  Minus,
  Plus,
  Trash2
} from 'lucide-react'

import useCartStore from '../store/cartStore'

export default function Cart() {

  const {

    cart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity

  } = useCartStore()

  const subtotal = cart.reduce(

    (acc, item) =>

      acc + item.price * item.quantity,

    0

  )

  const shipping = subtotal > 1999
    ? 0
    : 99

  const total = subtotal + shipping

  if (cart.length === 0) {

    return (

      <div className="min-h-[70vh] flex flex-col items-center justify-center">

        <h1 className="text-4xl font-black">

          Your Cart Is Empty

        </h1>

        <p className="text-gray-500 mt-4">

          Discover handcrafted pieces you'll love.

        </p>

        <Link
          to="/shop"
          className="mt-8 bg-black text-white px-8 py-4 rounded-full"
        >

          Continue Shopping

        </Link>

      </div>

    )
  }

  return (

    <div className="max-w-[1500px] mx-auto px-6 py-12">

      <h1 className="text-5xl font-black mb-12">

        Shopping Bag

      </h1>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

        {/* ITEMS */}

        <div className="space-y-6">

          {cart.map((item) => (

            <div

              key={item.id}

              className="bg-white rounded-[30px] p-5 flex gap-5"

            >

              <img
                src={item.image_url}
                alt={item.title}
                className="w-32 h-40 object-cover rounded-2xl"
              />

              <div className="flex-1">

                <h2 className="text-xl font-semibold">

                  {item.title}

                </h2>

                <p className="text-gray-500 mt-2">

                  ₹{item.price}

                </p>

                <div className="flex items-center gap-3 mt-5">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="w-10 h-10 rounded-full border flex items-center justify-center"
                  >

                    <Minus size={16} />

                  </button>

                  <span className="font-semibold">

                    {item.quantity}

                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="w-10 h-10 rounded-full border flex items-center justify-center"
                  >

                    <Plus size={16} />

                  </button>

                </div>

              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >

                <Trash2 size={20} />

              </button>

            </div>

          ))}

        </div>

        {/* SUMMARY */}

        <div>

          <div className="bg-white rounded-[30px] p-8 sticky top-32">

            <h2 className="text-2xl font-bold mb-8">

              Order Summary

            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span>Subtotal</span>

                <span>

                  ₹{subtotal}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Shipping</span>

                <span>

                  ₹{shipping}

                </span>

              </div>

              <div className="border-t pt-5 flex justify-between text-xl font-bold">

                <span>Total</span>

                <span>

                  ₹{total}

                </span>

              </div>

            </div>

            <Link
  to="/checkout"
  className="block w-full mt-8 bg-black text-white py-4 rounded-full text-lg font-semibold text-center"
>

  Proceed To Checkout

</Link>

          </div>

        </div>

      </div>

    </div>

  )
}