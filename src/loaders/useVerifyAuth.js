import { useAuthStore } from '../store/useAuthStore'
import { useAlertsStore } from '../store/useAlertsStore'

import { getMe } from '../services/authService'

import { getAuthToken } from '../utils/getAuthToken'

export const useVerifyAuth = async () => {
  const { logOut } = useAuthStore.getState()

  const authToken = getAuthToken()

  if (!authToken) {
    logOut()
    return null
  }

  try {
    const { setUser, token, setToken } = useAuthStore.getState()

    const userData = await getMe()

    setUser(userData)
    setToken(token)
  } catch (err) {
    const { setAlert } = useAlertsStore.getState()
    logOut()
    setAlert({ message: err.message, timeout: 6000, type: 'danger' })
    return null
  }

  return null
}
