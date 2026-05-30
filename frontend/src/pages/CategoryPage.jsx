import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import CategoryHero from '../components/category/CategoryHero'

import CategoryToolbar from '../components/category/CategoryToolbar'

import CategoryGrid from '../components/category/CategoryGrid'

export default function CategoryPage() {

  const { id } = useParams()

  const [category, setCategory] = useState(null)

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchCategory()

    fetchProducts()

  }, [id])

  const fetchCategory = async () => {

    try {

      const response = await api.get(
        `/categories/${id}`
      )

      setCategory(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  const fetchProducts = async () => {

    try {

      const response = await api.get(
        `/categories/${id}/products`
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  if (!category) {

    return (

      <div className="py-40 text-center">

        Loading...

      </div>

    )
  }

  return (

    <div>

      <CategoryHero
        category={category}
      />

      <CategoryToolbar
        count={products.length}
      />

      <CategoryGrid
        products={products}
      />

    </div>

  )
}