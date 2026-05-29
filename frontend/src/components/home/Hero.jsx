import { Link } from 'react-router-dom'

export default function Hero() {

  return (

    <section className="relative h-[90vh] overflow-hidden">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/25" />

      {/* CONTENT */}

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-site mx-auto px-6 w-full">

          <div className="max-w-2xl text-white">

            <p className="uppercase tracking-[6px] text-sm md:text-base text-white/80">

              Desi Stitch by Shivika

            </p>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] mt-6">

              Handcrafted
              <br />
              Khadi Fashion

            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">

              Elegant handcrafted silhouettes inspired by timeless Indian craftsmanship.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/collections"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >

                Shop Collections

              </Link>

              <Link
                to="/shop"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >

                Explore Products

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}