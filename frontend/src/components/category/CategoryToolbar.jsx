export default function CategoryToolbar({

  count

}) {

  return (

    <div className="border-y border-gray-200 bg-white">

      <div className="max-w-[1500px] mx-auto px-6 py-5 flex items-center justify-between">

        <p className="text-sm text-gray-500">

          {count} Products

        </p>

        <select
          className="outline-none bg-transparent"
        >

          <option>
            Featured
          </option>

          <option>
            Price Low → High
          </option>

          <option>
            Price High → Low
          </option>

          <option>
            Newest
          </option>

        </select>

      </div>

    </div>

  )
}