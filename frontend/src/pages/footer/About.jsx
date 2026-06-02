import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { isVideo } from '../../utils/media'
export default function About() {

    const [collections, setCollections] = useState([])

useEffect(() => {

  fetchCollections()

}, [])

const fetchCollections = async () => {

  try {

    const response = await api.get(
      '/collections'
    )

    setCollections(
      response.data
    )

  } catch (error) {

    console.log(error)

  }

}

const ikkat = collections.find(
  (c) => c.slug === 'ikkat-collection'
)

const blockPrint = collections.find(
  (c) => c.slug === 'block-print-collection'
)
  return (

    <div>

      {/* HERO */}

      <section className="bg-[#f8f4ee] py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-sm text-gray-500">

            About Desi Stitch

          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-none">

            Where Tradition
            <br />
            Meets Modern Elegance

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed">

            Desi Stitch celebrates handcrafted Indian textiles through
            timeless silhouettes, thoughtful design, and a deep respect
            for the artisans behind every creation.

          </p>

        </div>

      </section>

      {/* STORY */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <img

            src="https://res.cloudinary.com/dj3myhk7b/image/upload/v1780335733/WhatsApp_Image_2026-06-01_at_22.35.01_izukxw.jpg"

            alt="Desi Stitch"

            className="rounded-[30px] h-[600px] w-full object-cover"

          />

          <div>

            <p className="uppercase tracking-[4px] text-sm text-gray-500">

              Our Story

            </p>

            <h2 className="text-4xl font-black mt-4">

              A Small Dream
              <br />
              Brought To Life

            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed">

              Desi Stitch By Shivika is dedicated to celebrating the rich heritage of Indian craftsmanship through our exquisite collection of hand block printed and ikkat dresses and kurtas. Each piece is thoughtfully designed to not only showcase vibrant patterns and colors but also to support the talented artisans behind these timeless techniques. 


            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">

              We believe in sustainability and ethical fashion, ensuring that our creations have a positive impact on the environment and the communities we work with. By choosing Desi Stitch, you're not just wearing a beautiful garment; you're also contributing to the preservation of traditional crafts and empowering artisans across India.

            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">

              From handcrafted fabrics to thoughtfully designed
              silhouettes, every piece reflects our love for
              Indian artistry and modern fashion.

            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="bg-[#f8f4ee] py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500">

              What We Believe

            </p>

            <h2 className="text-5xl font-black mt-4">

              Crafted With Purpose

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-10 rounded-[30px]">

              <h3 className="text-2xl font-bold">

                Craftsmanship

              </h3>

              <p className="mt-4 text-gray-600">

                Celebrating traditional Indian textile techniques
                and the artisans who keep them alive.

              </p>

            </div>

            <div className="bg-white p-10 rounded-[30px]">

              <h3 className="text-2xl font-bold">

                Authenticity

              </h3>

              <p className="mt-4 text-gray-600">

                Every collection is inspired by genuine Indian
                craftsmanship and timeless design.

              </p>

            </div>

            <div className="bg-white p-10 rounded-[30px]">

              <h3 className="text-2xl font-bold">

                Quality

              </h3>

              <p className="mt-4 text-gray-600">

                Designed to be loved, worn, and cherished for years.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COLLECTIONS */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500">

              Explore

            </p>

            <h2 className="text-5xl font-black mt-4">

              Our Collections

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <Link

              to="/collections/ikkat-collection"

              className="group relative overflow-hidden rounded-[30px]"

            >

            {ikkat && (

  isVideo(ikkat.banner)

    ? (

      <video

        autoPlay
        muted
        loop
        playsInline

        className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"

      >

        <source

          src={ikkat.banner}

          type="video/mp4"

        />

      </video>

    )

    : (

      <img

        src={ikkat.banner}

        className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"

      />

    )

)}

              <div className="absolute inset-0 bg-black/30 flex items-end p-8">

                <h3 className="text-white text-4xl font-bold">

                  Ikkat Collection

                </h3>

              </div>

            </Link>

            <Link

              to="/collections/block-print-collection"

              className="group relative overflow-hidden rounded-[30px]"

            >

              {blockPrint && (

  isVideo(blockPrint.banner)

    ? (

      <video

        autoPlay
        muted
        loop
        playsInline

        className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"

      >

        <source

          src={blockPrint.banner}

          type="video/mp4"

        />

      </video>

    )

    : (

      <img

        src={blockPrint.banner}

        className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"

      />

    )

)}

              <div className="absolute inset-0 bg-black/30 flex items-end p-8">

                <h3 className="text-white text-4xl font-bold">

                  Block Print Collection

                </h3>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black">

            Discover Handcrafted Elegance

          </h2>

          <p className="mt-6 text-white/80">

            Explore collections inspired by India's rich textile heritage.

          </p>

          <Link

            to="/collections"

            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold"

          >

            Explore Collections

          </Link>

        </div>

      </section>

    </div>

  )

}