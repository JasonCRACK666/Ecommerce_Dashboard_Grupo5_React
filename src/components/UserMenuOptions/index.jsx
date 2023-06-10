import { Link } from 'react-router-dom'

import { useAuthStore } from '../../store/useAuthStore'

import { FaUserAlt } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

const UserMenuOptions = () => {
  const { logOut } = useAuthStore()
  const user = useAuthStore(state => state.user)

  const DEFAULT_AVATAR =
    'https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg'

  return (
    <div className='btn-group dropstart'>
      <img
        src={user.avatar ?? DEFAULT_AVATAR}
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
            to={'/'}
            style={{ fontSize: '1.1rem' }}
          >
            <FaUserAlt />
            <span>Cuenta</span>
          </Link>
        </li>
        <li>
          <button
            className='dropdown-item d-flex align-items-center gap-2'
            style={{ fontSize: '1.1rem' }}
            onClick={() => logOut()}
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
