export default function ProductGallery({ product }) {

  return (

    <div className="space-y-4">

      <img
        src={product.image_url}
        alt={product.title}
        className="w-full rounded-[30px] object-cover"
      />

    </div>

  )
}