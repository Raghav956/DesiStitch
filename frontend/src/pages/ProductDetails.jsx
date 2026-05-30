import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import ProductGallery from '../components/product/ProductGallery'

import ProductInfo from '../components/product/ProductInfo'

export default function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {

    fetchProduct()

  }, [id])

  const fetchProduct = async () => {

    try {

      const response = await api.get(
        `/products/${id}`
      )

      setProduct(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  if (!product) {

    return (

      <div className="py-40 text-center">

        Loading...

      </div>

    )
  }

  return (

    <div className="max-w-[1500px] mx-auto px-6 py-16">

      <div className="grid lg:grid-cols-2 gap-16">

        <ProductGallery
          product={product}
        />

        <ProductInfo
          product={product}
        />

      </div>

    </div>

  )
}