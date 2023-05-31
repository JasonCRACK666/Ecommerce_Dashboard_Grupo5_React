import { redirect } from 'react-router-dom'

import { useAuthStore } from '../store/useAuthStore'

export const useRedirectIfAuthenticated = async () => {
  const { isAuth } = useAuthStore.getState()

  if (isAuth) {
    return redirect('/')
  }

  return null
}
