export default function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden rounded-b-[40px]">

      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-6">

        <div className="max-w-md">

          <p className="uppercase tracking-[4px] text-white text-sm mb-3">
            Handcrafted Fashion
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Khadi Styles For Modern India
          </h1>

          <p className="mt-5 text-white/90 text-lg">
            Elegant handcrafted collections designed with love by Shivika.
          </p>

          <button className="mt-7 bg-mustard text-black px-7 py-4 rounded-full font-semibold">
            Explore Collection
          </button>

        </div>

      </div>

    </section>
  )
}