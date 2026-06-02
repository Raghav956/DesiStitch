import useWishlistStore from '../store/wishlistStore'

import ProductCard from '../components/product/ProductCard'

export default function Wishlist() {

  const { wishlist } =
    useWishlistStore()

  return (

    <div className="max-w-site mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-12">

        Wishlist

      </h1>

      {wishlist.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-3xl font-bold">

            Your Wishlist Is Empty

          </h2>

        </div>

      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {wishlist.map((product) => (

            <ProductCard

              key={product.id}

              product={product}

            />

          ))}

        </div>

      )}

    </div>

  )

}