import useCartStore from '../store/cartStore'

export default function Cart() {

  const { cart, removeFromCart } = useCartStore()

  const total = cart.reduce(

    (acc, item) =>

      acc + item.price * item.quantity,

    0
  )

  return (

    <div className="min-h-screen bg-cream pb-40">

      <div className="p-4">

        <h1 className="text-4xl font-bold">
          Your Cart
        </h1>

      </div>

      <div className="space-y-4 px-4">

        {cart.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-3xl p-4 flex gap-4"
          >

            <img
              src={item.image_url}
              className="w-28 h-28 object-cover rounded-2xl"
            />

            <div className="flex-1">

              <h2 className="font-semibold text-lg">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-1">
                ₹{item.price}
              </p>

              <p className="mt-2 text-sm">
                Quantity: {item.quantity}
              </p>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="mt-3 text-red-500 text-sm"
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">

        <div className="flex items-center justify-between mb-4">

          <div>

            <p className="text-sm text-gray-500">
              Total
            </p>

            <h2 className="text-2xl font-bold">
              ₹{total}
            </h2>

          </div>

          <button className="bg-black text-white px-8 py-4 rounded-2xl">
            Checkout
          </button>

        </div>

      </div>

    </div>

  )
}