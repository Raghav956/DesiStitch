import { create } from 'zustand'

const useWishlistStore = create((set, get) => ({

  wishlist: JSON.parse(

    localStorage.getItem(
      'wishlist'
    ) || '[]'

  ),

  addToWishlist: (product) => {

    const exists = get().wishlist.find(

      (item) => item.id === product.id

    )

    if (exists) {

      return

    }

    const updated = [

      ...get().wishlist,

      product

    ]

    localStorage.setItem(

      'wishlist',

      JSON.stringify(updated)

    )

    set({

      wishlist: updated

    })

  },

  removeFromWishlist: (id) => {

    const updated = get().wishlist.filter(

      (item) => item.id !== id

    )

    localStorage.setItem(

      'wishlist',

      JSON.stringify(updated)

    )

    set({

      wishlist: updated

    })

  },

  isInWishlist: (id) =>

    get().wishlist.some(

      (item) => item.id === id

    )

}))

export default useWishlistStore