export default function AnnouncementBar() {

  const messages = [

    '✨ Free Shipping Above ₹1999',

    '🌼 Handmade Khadi Collections',

    '🚚 Cash On Delivery Available',

    '💛 Designed by Shivika',

    '🎉 New Block Print Collection Live'

  ]

  return (

    <div className="bg-black text-white overflow-hidden">

      <div className="relative flex overflow-hidden">

        <div className="animate-marquee whitespace-nowrap py-2 text-xs md:text-sm font-medium tracking-wide">

          {messages.map((message, index) => (

            <span
              key={index}
              className="mx-10"
            >

              {message}

            </span>

          ))}

          {messages.map((message, index) => (

            <span
              key={`duplicate-${index}`}
              className="mx-10"
            >

              {message}

            </span>

          ))}

        </div>

      </div>

    </div>

  )

}