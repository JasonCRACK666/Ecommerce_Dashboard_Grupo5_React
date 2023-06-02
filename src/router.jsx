import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'

import { useRedirectIfAuthenticated } from './loaders/useRedirectIfAuthenticated'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

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
      }
    ]
  },
  {
    path: '/',
    element: <HomePage />
  }
])

export default router
