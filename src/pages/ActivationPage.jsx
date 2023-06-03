import { useLoaderData, Link } from 'react-router-dom'

const ActivationPage = () => {
  const { message, isError } = useLoaderData()

  if (isError)
    return (
      <div className='card w-50'>
        <div className='card-body'>
          <div className='card-title text-center text-red'>{message}</div>
        </div>
      </div>
    )

  return (
    <div className='card w-50'>
      <div className='card-body'>
        <h1 className='card-title text-center'>{message}</h1>
        <div className='d-flex justify-content-center'>
          <Link to='/auth/login' className='btn btn-primary'>
            Ingresar a tu cuenta
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ActivationPage
