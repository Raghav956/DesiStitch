export default function CollectionToolbar({

  productCount

}) {

  return (

    <div className="border-y border-gray-200 bg-white">

      <div className="max-w-[1500px] mx-auto px-6 py-5 flex items-center justify-between">

        <div>

          <button className="font-medium">

            Filters

          </button>

        </div>

        <div className="flex items-center gap-8">

          <p className="text-sm text-gray-500">

            {productCount} Products

          </p>

          <select className="outline-none bg-transparent">

            <option>
              Featured
            </option>

            <option>
              Price: Low to High
            </option>

            <option>
              Price: High to Low
            </option>

            <option>
              Newest
            </option>

          </select>

        </div>

      </div>

    </div>

  )
}