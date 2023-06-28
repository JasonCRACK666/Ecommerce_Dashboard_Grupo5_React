import { useEffect } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'

const ProfileLayout = () => {
  const isAuth = useAuthStore(state => state.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/')
      return
    }
  }, [isAuth, navigate])

  return (
    <div className='container py-4'>
      <div className='row'>
        <section className='col-md-3'>
          <ul className='list-group list-group-flush card rounded-3'>
            <NavLink
              to='/profile'
              className='list-group-item list-group-item-action'
            >
              Perfil
            </NavLink>
          </ul>
        </section>

        <section className='col-md-9'>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default ProfileLayout
