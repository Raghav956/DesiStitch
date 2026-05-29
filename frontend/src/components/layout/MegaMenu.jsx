import { motion } from 'framer-motion'

export default function MegaMenu({

  menu
}) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 10
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      exit={{
        opacity: 0,
        y: 10
      }}

      transition={{
        duration: 0.2
      }}

      className="w-full bg-white border-t border-gray-100 shadow-2xl"
    >

      <div className="max-w-site mx-auto grid grid-cols-4 gap-12 px-8 py-12">

        {/* LEFT LINKS */}

        <div className="col-span-2 grid grid-cols-2 gap-12">

          {menu.sections.map((section) => (

            <div key={section.heading}>

              <h3 className="uppercase tracking-[3px] text-sm font-bold mb-6">

                {section.heading}

              </h3>

              <div className="space-y-4">

                {section.links.map((link) => (

                  <button
                    key={link}
                    className="block text-left text-gray-700 hover:text-black transition"
                  >

                    {link}

                  </button>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT IMAGES */}

        <div className="col-span-2 grid grid-cols-2 gap-6">

          {menu.featured.map((item) => (

            <div
              key={item.title}
              className="relative overflow-hidden rounded-luxury group"
            >

              <img
                src={item.image}
                className="h-[380px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 flex items-end p-6">

                <div>

                  <h2 className="text-white text-2xl font-bold">

                    {item.title}

                  </h2>

                  <button className="mt-3 text-white border-b border-white">

                    Shop Now

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </motion.div>

  )
}