import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import CollectionHero from '../components/collection/CollectionHero'

import CollectionToolbar from '../components/collection/CollectionToolbar'

import CollectionGrid from '../components/collection/CollectionGrid'

export default function CollectionDetails() {

  const { slug } = useParams()

  const [collection, setCollection] = useState(null)

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchCollection()

    fetchProducts()

  }, [slug])

  const fetchCollection = async () => {

    try {

      const response = await api.get(
        `/collections/${slug}`
      )

      setCollection(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  const fetchProducts = async () => {

    try {

      const response = await api.get(
        `/collections/${slug}/products`
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  if (!collection) {

    return (

      <div className="py-40 text-center">

        Loading...

      </div>

    )
  }

  return (

    <div>

      <CollectionHero
        collection={collection}
      />

      <CollectionToolbar
        productCount={products.length}
      />

      <CollectionGrid
        products={products}
      />
  console.log("Collection:", collection)
    </div>
  
  )

}