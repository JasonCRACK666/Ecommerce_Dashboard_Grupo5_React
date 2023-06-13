import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <section
      className='vh-100'
      style={{
        backgroundImage:
          'url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif")',
        backgroundSize: 'cover',
        backgroundPosition: '100% 20%'
      }}
    >
      <div className='text-center'>
        <div>
          <h1 className='fw-bolder display-1'>404</h1>
          <h3>Oops!</h3>
          <p className='m-4'>
            La página que estás buscando no existe o no se encuentra disponible.
          </p>
          <Link
            to={'/'}
            className='text-decoration-none text-bg-warning p-3 rounded-3 fw-bold'
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ErrorPage
