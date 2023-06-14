import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'

import { useRedirectIfAuthenticated } from './loaders/useRedirectIfAuthenticated'
import { useActivateUserAccount } from './loaders/useActivateUserAccount'
import { useVerifyAuth } from './loaders/useVerifyAuth'

import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ActivationPage from './pages/ActivationPage'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'

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
    loader: useVerifyAuth,
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/product/:productId',
        element: <ProductDetailPage />
      }
    ]
  }
])

export default router
