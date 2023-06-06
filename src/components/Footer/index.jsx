import { BsCart4 } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <footer>
        <div className='row p-5 bg-dark text-white'>
          <div className='col-xs-12 col-xs-6 col-lg-4'>
            <p className='text-center fw-bold  fs-1'>
              <BsCart4 /> TECH HOUSE
            </p>
            <p className='h7 font-monospace text-start text-secondary'>
              Somos una empresa enfocada en la venta de productos de tecnología
              como lo son los celulares, las laptops, las tables y asi mucho
              más, nosotros lo que buscamos con nuestra empresa es que las
              personas estén más cerca de adquirir algo nuevo para ellos con
              solo darle click a un botón. Por otro lado, Buscamos mejorar la
              compra de productos en línea, garantizando una buena experiencia a
              nuestros usuarios.
            </p>
          </div>
          <div className='col-xs-10 col-xs-5 col-lg-2'>
            <p className='h5 mb-3 fw-bold'>Marcas Populares</p>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                SAMSUNG
              </a>
            </div>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                HP
              </a>
            </div>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                LENOVO
              </a>
            </div>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                DELL
              </a>
            </div>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                ASUS
              </a>
            </div>
          </div>
          <div className='col-xs-10 col-xs-5 col-lg-2'>
            <p className='h5 mb-3 fw-bold'>Visita</p>
            <div className='mb-2'>
              <p className='text-secondary text-lg-start'>
                AV. España 2739, Trujillo
              </p>
              <p className='text-secondary text-lg-start'>
                AV. Borgoño 361, Trujillo
              </p>
            </div>
          </div>
          <div className='col-xs-10 col-xs-5 col-lg-2'>
            <p className='h5 mb-3 fw-bold'>Redes sociales</p>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                <FaFacebook className='fs-4' /> Facebook
              </a>
            </div>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                <FaInstagram className='fs-4' /> Instagram
              </a>
            </div>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                <FaTwitterSquare className='fs-4' /> Twitter
              </a>
            </div>
          </div>
          <div className='col-xs-10 col-xs-5 col-lg-2'>
            <p className='h5 mb-3 fw-bold'>Legal</p>
            <div className='mb-2'>
              <a className='text-secondary text-decoration-none' href='#'>
                Terminos de Privacidad
              </a>
            </div>
          </div>
          <div className='col-xs-12'>
            <p className='text-white text-center'>
              <FaRegCopyright /> Tech House - 2023
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
