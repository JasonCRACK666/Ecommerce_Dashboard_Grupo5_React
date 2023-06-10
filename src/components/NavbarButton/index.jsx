import { useNavigate } from 'react-router-dom'

const NavbarButton = ({ title, navigator }) => {
  const navigate = useNavigate()

  return (
    <div>
      <button
        className='btn btn-primary m-2'
        onClick={() => navigate(navigator)}
      >
        {title}
      </button>
    </div>
  )
}

export default NavbarButton
