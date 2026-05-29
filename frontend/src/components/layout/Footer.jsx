import { Link } from 'react-router-dom'

import { FaInstagram } from 'react-icons/fa'

import { MessageCircle } from 'lucide-react'

export default function Footer() {

  return (

    <footer className="bg-[#f8f4ee] border-t border-gray-200 mt-20">

      <div className="max-w-site mx-auto px-6 py-20">

        {/* TOP GRID */}

        <div className="grid md:grid-cols-4 gap-14">

          {/* BRAND */}

          <div>

            <h2 className="text-3xl font-black tracking-tight">

              DESI STITCH

            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">

              Handcrafted fashion inspired by timeless Indian silhouettes and modern elegance.

            </p>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-4 mt-8">

              {/* INSTAGRAM */}

              <a
                href="https://instagram.com/desistitchbyshivika"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
              >

               <FaInstagram size={20} />

              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
              >

                <MessageCircle size={20} />

              </a>

            </div>

          </div>

          {/* SHOP */}

          <div>

            <h3 className="font-bold text-lg mb-6">

              Shop

            </h3>

            <div className="space-y-4 text-gray-600">

              <Link
                to="/collections"
                className="block hover:text-black transition"
              >

                Collections

              </Link>

              <Link
                to="/shop"
                className="block hover:text-black transition"
              >

                Shop All

              </Link>

              <Link
                to="/category/1"
                className="block hover:text-black transition"
              >

                Kurtis

              </Link>

              <Link
                to="/category/2"
                className="block hover:text-black transition"
              >

                Tops

              </Link>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="font-bold text-lg mb-6">

              Company

            </h3>

            <div className="space-y-4 text-gray-600">

              <button className="hover:text-black transition">

                About Us

              </button>

              <button className="hover:text-black transition">

                Contact

              </button>

              <button className="hover:text-black transition">

                Shipping Policy

              </button>

              <button className="hover:text-black transition">

                Privacy Policy

              </button>

            </div>

          </div>

          {/* NEWSLETTER */}

          <div>

            <h3 className="font-bold text-lg mb-6">

              Stay Updated

            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">

              Subscribe for new collections, handcrafted stories, and exclusive launches.

            </p>

            <div className="flex border rounded-full overflow-hidden bg-white">

              <input
                placeholder="Your email"
                className="flex-1 px-5 py-4 outline-none bg-transparent"
              />

              <button className="px-6 font-semibold hover:bg-black hover:text-white transition">

                Join

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>

            © 2026 Desi Stitch by Shivika. All rights reserved.

          </p>

          <div className="flex items-center gap-6">

            <p>
              Made with 💛 in India
            </p>

          </div>

        </div>

      </div>

    </footer>

  )
}