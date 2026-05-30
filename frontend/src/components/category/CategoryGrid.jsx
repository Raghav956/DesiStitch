import ProductCard from '../product/ProductCard'

export default function CategoryGrid({

  products

}) {

  return (

    <section className="py-16">

      <div className="max-w-[1500px] mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

         {products.length === 0 ? (

  <div className="col-span-full text-center py-20">

    <h3 className="text-2xl font-bold">

      No Products Found

    </h3>

    <p className="text-gray-500 mt-3">

      New arrivals coming soon.

    </p>

  </div>

) : (

  products.map((product) => (

    <ProductCard
      key={product.id}
      product={product}
    />

  ))

)}

        </div>

      </div>

    </section>

  )
}