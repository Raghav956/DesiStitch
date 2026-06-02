export default function BrandStory() {

  return (

    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-site mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}

        <div className="relative">

          <div className="overflow-hidden rounded-luxury">

            <div className="overflow-hidden rounded-luxury">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="h-[700px] w-full object-cover"
  >
    <source
      src="https://res.cloudinary.com/dj3myhk7b/video/upload/q_auto/f_auto/v1780295724/20168290-hd_1920_1080_25fps_gz79lf.mp4"
      type="video/mp4"
    />
  </video>
</div>

          </div>

          {/* FLOATING CARD */}

          <div className="absolute bottom-8 left-8 bg-white shadow-luxury rounded-[30px] p-6 max-w-[280px]">

            <p className="uppercase tracking-[4px] text-xs text-gray-500">

              Handcrafted

            </p>

            <h3 className="text-2xl font-bold mt-3">

              Designed
              <br />
              With Intention

            </h3>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="uppercase tracking-[5px] text-sm text-gray-500">

            Our Story

          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-[1.05] mt-5">

            Modern Indian
            <br />
            Craftsmanship

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">

            Desi Stitch by Shivika was born from a love for timeless Indian textiles and modern silhouettes.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">

            Every piece is thoughtfully designed to blend handcrafted tradition with effortless contemporary fashion.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">

            Inspired by the elegance of khadi and everyday comfort, our collections celebrate individuality, craftsmanship, and slow fashion.
          </p>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>

              <h3 className="text-4xl font-black">

                100%

              </h3>

              <p className="text-gray-500 mt-2">

                Handmade Feel

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black">

                500+

              </h3>

              <p className="text-gray-500 mt-2">

                Happy Customers

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black">

                24/7

              </h3>

              <p className="text-gray-500 mt-2">

                Support

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}