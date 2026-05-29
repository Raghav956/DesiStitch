export default function NewsletterSection() {

  return (

    <section className="py-24 bg-cream overflow-hidden">

      <div className="max-w-site mx-auto px-6">

        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-sm text-gray-500">

            Stay Connected

          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-none mt-5">

            Join The
            <br />
            Desi Stitch Journal

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">

            Discover new collections, handcrafted stories, styling inspiration, and exclusive launches.

          </p>

        </div>

        {/* NEWSLETTER */}

        <div className="max-w-2xl mx-auto mt-12">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              placeholder="Enter your email"
              className="flex-1 bg-white px-6 py-5 rounded-full outline-none text-lg"
            />

            <button className="bg-black text-white px-10 py-5 rounded-full font-semibold hover:scale-105 transition">

              Join Now

            </button>

          </div>

        </div>

        {/* INSTAGRAM GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              className="h-[320px] w-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              className="h-[320px] w-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              className="h-[320px] w-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              className="h-[320px] w-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

        </div>

      </div>

    </section>

  )
}