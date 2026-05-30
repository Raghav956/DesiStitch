import { Link } from 'react-router-dom'

export default function CollectionCard({ collection }) {

  return (

    <Link
      to={`/collections/${collection.slug}`}
      className="group block"
    >

      <div className="overflow-hidden rounded-[32px]">

        <img
          src={collection.banner}
          alt={collection.title}
          className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
        />

      </div>

      <div className="mt-6">

        <h2 className="text-3xl font-bold">

          {collection.title}

        </h2>

        <p className="text-gray-600 mt-3">

          {collection.subtitle}

        </p>

      </div>

    </Link>

  )
}