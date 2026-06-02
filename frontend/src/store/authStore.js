import { create } from 'zustand'

const useAuthStore = create((set) => ({

  user: JSON.parse(
    localStorage.getItem(
      'desistitch_user'
    ) || 'null'
  ),

  token: localStorage.getItem(
    'desistitch_token'
  ),

  login: (user, token) => {

    localStorage.setItem(
      'desistitch_user',
      JSON.stringify(user)
    )

    localStorage.setItem(
      'desistitch_token',
      token
    )

    set({
      user,
      token
    })

  },

  logout: () => {

    localStorage.removeItem(
      'desistitch_user'
    )

    localStorage.removeItem(
      'desistitch_token'
    )

    set({
      user: null,
      token: null
    })

  }

}))

export default useAuthStore