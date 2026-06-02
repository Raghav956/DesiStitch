import { useState } from 'react'
import { useRef } from 'react'

import {
  Volume2,
  VolumeX
} from 'lucide-react'
import toast from 'react-hot-toast'

import api from '../../services/api'
export default function NewsletterSection() {
  const [reel1Muted, setReel1Muted] = useState(true)
  const [email, setEmail] = useState('')
  const user = JSON.parse(
  localStorage.getItem('desistitch_user')
)
const reel1Ref = useRef(null)
const [reel2Muted, setReel2Muted] = useState(true)

const reel2Ref = useRef(null)
  const handleSubscribe = async () => {

  const subscribeEmail = user
    ? user.email
    : email

  if (!subscribeEmail.trim()) {

    toast.error(
      'Please enter your email'
    )

    return

  }

  try {

    await api.post(
      '/newsletter/',
      {
        email: subscribeEmail
      }
    )

    toast.success(
      'Welcome to Desi Stitch 🌿'
    )

    if (!user) {

      setEmail('')

    }

  } catch (error) {

    toast.error(

      error.response?.data?.detail ||

      'Subscription failed'

    )

  }

}
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

  value={
    user
      ? user.email
      : email
  }

  disabled={!!user}

  onChange={(e) =>
    setEmail(
      e.target.value
    )
  }

  placeholder="Enter your email"

  className="
    flex-1
    bg-white
    px-6
    py-5
    rounded-full
    outline-none
    text-lg
  "

/>



            <button

  onClick={handleSubscribe}

  className="
    bg-black
    text-white
    px-10
    py-5
    rounded-full
    font-semibold
    hover:scale-105
    transition
  "

>

  {
    user
      ? 'Join Newsletter'
      : 'Join Now'
  }

</button>

          </div>

        </div>

        {/* INSTAGRAM GRID */}

        {/* INSTAGRAM SHOWCASE */}

<div className="mt-24">

  <div className="text-center mb-12">

    <p className="uppercase tracking-[5px] text-sm text-gray-500">

      Follow Our Journey

    </p>

    <h3 className="text-3xl md:text-5xl font-black mt-4">

      @desi_stitch_by_shivika

    </h3>

    <p className="mt-4 text-gray-600">

      Discover handcrafted stories, behind-the-scenes moments, styling inspiration and new launches.

    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {/* PHOTO 1 */}

    <a

      href="https://www.instagram.com/p/DXyjWnmkXV8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

      target="_blank"

      rel="noreferrer"

      className="group overflow-hidden rounded-[30px]"

    >

      <img

        src="https://res.cloudinary.com/dj3myhk7b/image/upload/q_auto/f_auto/v1780303264/Make_this_Mother_s_Day_extra_special_with_coordinated_looks_that_celebrate_your_unique_bond_tw_dajgay.jpg"

        className="h-[320px] w-full object-cover group-hover:scale-105 transition duration-700"

      />

    </a>

    {/* REEL 1 */}

   <a

  href="https://www.instagram.com/reel/DQWEQsNEZhB/"

  target="_blank"

  rel="noreferrer"

  className="group relative overflow-hidden rounded-[30px]"

>

  {/* VIDEO */}

  <video

    ref={reel1Ref}

    src="https://res.cloudinary.com/dj3myhk7b/video/upload/q_auto/f_auto/v1780303264/wxkq583rgf67vhf5xtek.mp4"

    autoPlay

    muted={reel1Muted}

    loop

    playsInline

    className="
      h-[320px]
      w-full
      object-cover
      group-hover:scale-105
      transition
      duration-700
    "

  />

  {/* REEL BADGE */}

  <div className="absolute top-4 left-4">

    <div
      className="
        bg-black/70
        backdrop-blur-sm
        text-white
        px-3
        py-1.5
        rounded-full
        text-xs
        font-medium
      "
    >

      Reel

    </div>

  </div>

  {/* SOUND BUTTON */}

  <button

    onClick={(e) => {

      e.preventDefault()

      e.stopPropagation()

      const newMuted = !reel1Muted

      setReel1Muted(newMuted)

      reel1Ref.current.muted = newMuted

    }}

    className="
      absolute
      top-4
      right-4
      bg-black/70
      backdrop-blur-sm
      text-white
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
    "

  >

    {

      reel1Muted

        ? <VolumeX size={16} />

        : <Volume2 size={16} />

    }

  </button>

</a>

    {/* PHOTO 2 */}

    <a

      href="https://www.instagram.com/p/C0RoTGPyedb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

      target="_blank"

      rel="noreferrer"

      className="group overflow-hidden rounded-[30px]"

    >

      <img

        src="https://res.cloudinary.com/dj3myhk7b/image/upload/q_auto/f_auto/v1780304097/Our_Bestseller_Brocade_Jacket_with_Lacework_brocade_collection_style_love_fashion_india_nvf7yn.jpg"

        className="h-[320px] w-full object-cover group-hover:scale-105 transition duration-700"

      />

    </a>

    {/* REEL 2 */}

  <a

  href="https://www.instagram.com/reel/DJrTDalSmSn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

  target="_blank"

  rel="noreferrer"

  className="group relative overflow-hidden rounded-[30px]"

>

  <video

    ref={reel2Ref}

    src="https://res.cloudinary.com/dj3myhk7b/video/upload/q_auto/f_auto/v1780303264/Working_on_a_customer_s_custom_order_Can_t_wait_to_share_the_final_piece._embroidery_love_mxurh2.mp4"

    autoPlay

    muted={reel2Muted}

    loop

    playsInline

    className="
      h-[320px]
      w-full
      object-cover
      group-hover:scale-105
      transition
      duration-700
    "

  />

  {/* REEL BADGE */}

  <div className="absolute top-4 left-4">

    <div
      className="
        bg-black/70
        backdrop-blur-sm
        text-white
        px-3
        py-1.5
        rounded-full
        text-xs
        font-medium
      "
    >

      Reel

    </div>

  </div>

  {/* SOUND BUTTON */}

  <button

    onClick={(e) => {

      e.preventDefault()

      e.stopPropagation()

      const newMuted = !reel2Muted

      setReel2Muted(newMuted)

      reel2Ref.current.muted = newMuted

    }}

    className="
      absolute
      top-4
      right-4
      bg-black/70
      backdrop-blur-sm
      text-white
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
    "

  >

    {

      reel2Muted

        ? <VolumeX size={16} />

        : <Volume2 size={16} />

    }

  </button>

</a>

  </div>

  <div className="text-center mt-10">

    <a

      href="https://www.instagram.com/desi_stitch_by_shivika"

      target="_blank"

      rel="noreferrer"

      className="
        inline-flex
        items-center
        bg-black
        text-white
        px-8
        py-4
        rounded-full
        font-semibold
        hover:scale-105
        transition
      "

    >

      Follow on Instagram

    </a>

  </div>

</div>

      </div>

    </section>

  )
}