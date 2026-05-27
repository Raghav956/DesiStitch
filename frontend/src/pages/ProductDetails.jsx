import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import useCartStore from '../store/cartStore'

export default function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  const { addToCart } = useCartStore()

  useEffect(() => {

    fetchProduct()

  }, [])

  const fetchProduct = async () => {

    const response = await api.get(`/products/${id}`)

    setProduct(response.data)
  }

  if (!product) {

    return (
      <div className="p-10">
        Loading...
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-cream">

      <div className="h-[60vh]">

        <img
          src={product.image_url}
          className="w-full h-full object-cover"
        />

      </div>

      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10 p-6">

        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="text-gray-500 mt-4 leading-relaxed">
          {product.description}
        </p>

        <p className="text-3xl font-bold mt-6">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-8 bg-black text-white py-4 rounded-2xl"
        >
          Add To Cart
        </button>

      </div>

    </div>

  )
}