import { create } from 'zustand'

const useCartStore = create((set) => ({

  cart: [],

 addToCart: (product) => {

  let added = false

  set((state) => {

    const existing = state.cart.find(
      (item) => item.id === product.id
    )

    if (existing) {

      if (
        existing.quantity >= product.stock
      ) {

        return state
      }

      added = true

      return {

        cart: state.cart.map((item) =>

          item.id === product.id

            ? {

                ...item,

                quantity:
                  item.quantity + 1

              }

            : item

        )

      }

    }

    added = true

    return {

      cart: [

        ...state.cart,

        {

          ...product,

          quantity: 1

        }

      ]

    }

  })

  return added

},

 increaseQuantity: (id) =>
  set((state) => ({

    cart: state.cart.map((item) => {

      if (item.id !== id) {

        return item

      }

      if (

        item.quantity >= item.stock

      ) {

        return item

      }

      return {

        ...item,

        quantity:

          item.quantity + 1

      }

    })

  })),

  decreaseQuantity: (id) =>
    set((state) => ({

      cart: state.cart
        .map((item) =>

          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)

    })),
    clearCart: () =>

  set({

    cart: []

  }),

  removeFromCart: (id) =>
    set((state) => ({

      cart: state.cart.filter(
        (item) => item.id !== id
      )

    })),

}))

export default useCartStore