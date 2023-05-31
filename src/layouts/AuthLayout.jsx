import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Outlet />
    </div>
  )
}

export default AuthLayout
