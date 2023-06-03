import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'

import { useRedirectIfAuthenticated } from './loaders/useRedirectIfAuthenticated'
import { useActivateUserAccount } from './loaders/useActivateUserAccount'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ActivationPage from './pages/ActivationPage'

const router = createBrowserRouter([
  {
    path: '/auth',
    loader: useRedirectIfAuthenticated,
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      },
      {
        loader: useActivateUserAccount,
        path: 'activation/:activationCode',
        element: <ActivationPage />
      }
    ]
  },
  {
    path: '/',
    element: <HomePage />
  }
])

export default router
