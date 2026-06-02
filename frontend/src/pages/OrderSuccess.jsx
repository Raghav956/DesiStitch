import { Link, useParams } from 'react-router-dom'

export default function OrderSuccess() {

  const { id } = useParams()

  return (

    <div className="max-w-4xl mx-auto px-6 py-24">

      <div className="bg-white rounded-[40px] p-12 text-center border">

        <div className="text-7xl mb-6">

          🎉

        </div>

        <h1 className="text-5xl font-black">

          Order Confirmed

        </h1>

        <p className="text-gray-600 mt-6 text-lg">

          Thank you for shopping with

          {' '}

          <strong>

            Desi Stitch

          </strong>

        </p>

        <p className="mt-4">

          Your order number is

        </p>

        <p className="text-3xl font-black mt-2">

          #{id}

        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <Link

            to="/my-orders"

            className="
              bg-black
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
            "

          >

            View My Orders

          </Link>

          <Link

            to="/shop"

            className="
              border
              px-8
              py-4
              rounded-full
              font-semibold
            "

          >

            Continue Shopping

          </Link>

        </div>

      </div>

    </div>

  )

}