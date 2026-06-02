import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Hero() {

  const media = [

    {
      type: 'video',
      src: 'https://res.cloudinary.com/dj3myhk7b/video/upload/v1780230945/13741021_3840_2160_30fps_iul02e.mp4'
    },

    {
      type: 'image',
      src: 'https://res.cloudinary.com/dj3myhk7b/image/upload/v1780230936/pexels-fahadputhawala-30289962_i6mfdr.jpg'
    },

    {
      type: 'image',
      src: 'https://res.cloudinary.com/dj3myhk7b/image/upload/v1780230936/pexels-fahadputhawala-30276548_fj5aoh.jpg'
    }

  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>

        prev === media.length - 1
          ? 0
          : prev + 1

      )

    }, 7000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="relative h-[90vh] overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        {media[current].type === 'video' ? (

          <video

            autoPlay

            muted

            loop

            playsInline

            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "

          >

            <source

              src={media[current].src}

              type="video/mp4"

            />

          </video>

        ) : (

          <img

            src={media[current].src}

            alt="Desi Stitch"

            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "

          />

        )}

      </div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/35" />

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

      {/* INDICATORS */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {media.map((_, index) => (

          <button

            key={index}

            onClick={() => setCurrent(index)}

            className={`

              w-3

              h-3

              rounded-full

              transition

              ${current === index
                ? 'bg-white'
                : 'bg-white/40'}

            `}

          />

        ))}

      </div>

    </section>

  )

}