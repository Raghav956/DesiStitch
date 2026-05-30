export default function CategoryHero({

  category

}) {

  if (!category) return null

  return (

    <section className="relative h-[45vh] overflow-hidden">

      <img
        src={category.image_url}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div>

          <p className="uppercase tracking-[5px] text-white/80 text-sm">

            Desi Stitch

          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-4">

            {category.name}

          </h1>

        </div>

      </div>

    </section>

  )
}