import { useAuthStore } from '../../store/useAuthStore'

import MenuCategories from '../MenuCategories'
import MenuBrands from '../MenuBrands'
import NavbarButton from '../NavbarButton'
import UserMenuOptions from '../UserMenuOptions'

import { BsCart4 } from 'react-icons/bs'

const Navbar = () => {
  const isAuth = useAuthStore(state => state.isAuth)

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <BsCart4 className='fs-3 m-1 text-light' />
          <a className='navbar-brand'>TECH HOUSE</a>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='navbar-nav me-auto mb-2 mb-lg-0 gap-2'>
              <MenuCategories className='col-3' />
              <MenuBrands className='col-3' />
            </div>

            <div className='d-flex'>
              <form className='d-flex align-items-center'>
                <input
                  className='form-control me-2'
                  placeholder='Buscar'
                  aria-label='Search'
                  style={{ height: '40px', width: '300px' }}
                />
              </form>

              {isAuth ? (
                <UserMenuOptions />
              ) : (
                <div className='d-flex'>
                  <NavbarButton
                    title='Iniciar Sesión'
                    navigator='/auth/login'
                  />
                  <NavbarButton title='Registrar' navigator='/auth/signup' />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
