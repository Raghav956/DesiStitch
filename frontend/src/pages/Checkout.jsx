import { useState } from 'react'

import useCartStore from '../store/cartStore'
import api from '../services/api'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'








export default function Checkout() {
const navigate = useNavigate()

  const {

  cart,

  clearCart

} = useCartStore()

  const [formData, setFormData] = useState({

    name: '',

    phone: '',

    address: '',

    city: '',

    state: '',

    pincode: '',

    payment_method: 'COD'

  })


  if (cart.length === 0) {

  return (

    <div className="min-h-[70vh] flex flex-col items-center justify-center">

      <h1 className="text-4xl font-black">

        Your Cart Is Empty

      </h1>

      <p className="text-gray-500 mt-4">

        Add products before checkout.

      </p>

    </div>

  )

}

  const subtotal = cart.reduce(

    (acc, item) =>

      acc + item.price * item.quantity,

    0

  )

  const shipping =
  cart.length === 0
    ? 0
    : subtotal > 1999
      ? 0
      : 99

  const total = subtotal + shipping

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    })
  }

 const handlePlaceOrder = async () => {

const user = JSON.parse(

  localStorage.getItem(
    'desistitch_user'
  )

)

  if (cart.length === 0) {

    toast.error(
      'Your cart is empty'
    )

    return
  }

  if (
    !formData.name ||
    !formData.phone ||
    !formData.address ||
    !formData.city ||
    !formData.state ||
    !formData.pincode
  ) {

    toast.error(
      'Please fill all fields'
    )

    return
  }

  try {

    const response =await api.post('/orders', {

    user_id: user?.id,

      customer_name: formData.name,

      phone: formData.phone,

      address: formData.address,

      city: formData.city,

      state: formData.state,

      pincode: formData.pincode,

      payment_method: formData.payment_method,

      total_amount: total,

      items: JSON.stringify(cart)

    })

   toast.success(
  'Order placed successfully'
)

clearCart()

navigate(

  `/order-success/${

    response.data.id

  }`

) 

  } catch (error) {

    toast.error(
      'Failed to place order'
    )

  }

}

  return (

    <div className="max-w-[1500px] mx-auto px-6 py-12">

      <h1 className="text-5xl font-black mb-12">

        Checkout

      </h1>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

        {/* FORM */}

        <div className="space-y-5">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4 h-32"
          />

          <div className="grid md:grid-cols-3 gap-4">

            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border rounded-2xl p-4"
            />

            <input
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="border rounded-2xl p-4"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="border rounded-2xl p-4"
            />

          </div>

          {/* PAYMENT */}

          <div className="bg-white rounded-[30px] p-6">

            <h3 className="font-bold text-xl mb-4">

              Payment Method

            </h3>

            <label className="flex gap-3">

              <input
                type="radio"
                value="COD"
                checked={
                  formData.payment_method === 'COD'
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    payment_method:
                      e.target.value
                  })
                }
              />

              Cash On Delivery

            </label>

            <label className="flex gap-3 mt-4">

              <input
                type="radio"
                value="UPI"
                checked={
                  formData.payment_method === 'UPI'
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    payment_method:
                      e.target.value
                  })
                }
              />

              UPI / Razorpay

            </label>

          </div>

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

                <span>₹{subtotal}</span>

              </div>

              <div className="flex justify-between">

                <span>Shipping</span>

                <span>₹{shipping}</span>

              </div>

              <div className="border-t pt-5 flex justify-between text-xl font-bold">

                <span>Total</span>

                <span>₹{total}</span>

              </div>

            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8 bg-black text-white py-4 rounded-full text-lg font-semibold"
            >

              Place Order

            </button>

          </div>

        </div>

      </div>

    </div>

  )
}