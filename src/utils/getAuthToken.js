import { useAuthStore } from '../store/useAuthStore'

export const getAuthToken = () => {
  const { token: tokenFromAuthStore } = useAuthStore.getState()

  const tokenFromLocalStorage = localStorage.getItem('token')

  return tokenFromAuthStore === null
    ? tokenFromLocalStorage === null
      ? null
      : `Bearer ${tokenFromLocalStorage}`
    : `Bearer ${tokenFromAuthStore}`
}
