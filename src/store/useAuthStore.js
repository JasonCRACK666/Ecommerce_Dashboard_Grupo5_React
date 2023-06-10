import { create } from 'zustand'

import { devtools } from 'zustand/middleware'

export const useAuthStore = create()(
  devtools(set => ({
    token: localStorage.getItem('token'),
    user: null,
    isAuth: false,
    setUser: user => set(state => ({ ...state, user, isAuth: true })),
    setIsAuth: isAuth => set(state => ({ ...state, isAuth })),
    setToken: token => set(state => ({ ...state, token })),
    logOut: () => set(() => ({ token: null, user: null, isAuth: false }))
  }))
)
