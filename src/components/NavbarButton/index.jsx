import { Link } from 'react-router-dom'

const NavbarButton = ({ title, navigator }) => {
  return (
    <div>
      <button className='btn btn-outline-dark m-2' type='submit'>
        <Link className='text-decoration-none text-secondary' to={navigator}>
          {title}
        </Link>
      </button>
    </div>
  )
}

export default NavbarButton
