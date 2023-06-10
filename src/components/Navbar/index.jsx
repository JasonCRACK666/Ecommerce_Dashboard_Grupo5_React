import { BsCart4 } from 'react-icons/bs'
import MenuCategories from '../MenuCategories'
import MenuBrands from '../MenuBrands'
import NavbarButton from '../NavbarButton'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid justify-content-space-between'>
          <BsCart4 className='fs-3 m-1' />
          <a className='navbar-brand'>TECH HOUSE</a>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='col-6 d-flex'>
              <MenuCategories className='col-3' />
              <MenuBrands className='col-3' />
            </div>

            <div className='col-6 d-flex'>
              <form className='d-flex align-items-center'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Buscar'
                  aria-label='Search'
                  style={{ fontSize: '10px', height: '40px', width: '300px' }}
                />
              </form>
              <div className='col-6 d-flex'>
                <NavbarButton title='Iniciar Sesion' navigator='/auth/login' />
                <NavbarButton title='Registrar' navigator='/auth/signup' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
