export default function CollectionHero({

  collection

}) {

  if (!collection) return null

  const isVideo =

    collection.banner

      ?.toLowerCase()

      .includes('.mp4')

  return (

    <section className="relative h-[60vh] overflow-hidden">

      {isVideo ? (

        <video

          autoPlay

          muted

          loop

          playsInline

          className="absolute inset-0 w-full h-full object-cover"

        >

          <source

            src={collection.banner}

            type="video/mp4"

          />

        </video>

      ) : (

        <img

          src={collection.banner}

          alt={collection.title}

          className="absolute inset-0 w-full h-full object-cover"

        />

      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div>

          <p className="uppercase tracking-[5px] text-white/80 text-sm">

            Desi Stitch Collection

          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-4">

            {collection.title}

          </h1>

          <p className="text-white/90 mt-6 max-w-2xl">

            {collection.subtitle}

          </p>

        </div>

      </div>

    </section>

  )

}