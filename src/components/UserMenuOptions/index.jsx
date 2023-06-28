import { Link } from 'react-router-dom'

import { useAuthStore } from '../../store/useAuthStore'

import { FaUserAlt } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

import imgDefaultAvatar from '../../assets/default-avatar.jpg'

const UserMenuOptions = () => {
  const { logOut } = useAuthStore()
  const user = useAuthStore(state => state.user)

  const handleLogOut = () => {
    logOut()
    localStorage.removeItem('token')
  }

  return (
    <div className='btn-group dropstart'>
      <img
        src={user.avatar ?? imgDefaultAvatar}
        alt=''
        className='rounded-circle'
        style={{ width: '40px' }}
        data-bs-toggle='dropdown'
        aria-expanded='false'
      />
      <ul className='dropdown-menu'>
        <li>
          <Link
            className='dropdown-item d-flex align-items-center gap-2'
            to={'/profile'}
            style={{ fontSize: '1.1rem' }}
          >
            <FaUserAlt />
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <button
            className='dropdown-item d-flex align-items-center gap-2'
            style={{ fontSize: '1.1rem' }}
            onClick={() => handleLogOut()}
          >
            <FiLogOut />
            <span>Cerrar sesión</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default UserMenuOptions
