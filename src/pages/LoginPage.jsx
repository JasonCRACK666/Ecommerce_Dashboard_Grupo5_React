import { useNavigate, Link } from 'react-router-dom'

import { useAuthStore } from '../store/useAuthStore'

import { useMutation } from '@tanstack/react-query'

import { signIn } from '../services/authService'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidation } from '../validations/loginValidation'

import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'

const LoginPage = () => {
  const { setToken } = useAuthStore()
  const navigate = useNavigate()

  const { mutate: mutateLogin, isLoading } = useMutation({
    mutationFn: signIn,
    onSuccess: ({ token }) => {
      localStorage.setItem('token', token)
      setToken(token)
      navigate('/')
    },
    onError: error => {
      console.log(error)
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginValidation)
  })

  const handleSubmitLogin = handleSubmit(data => {
    mutateLogin(data)
  })

  return (
    <div className='card w-25'>
      <div className='card-body'>
        <h2 className='card-title text-center'>Iniciar Sesión</h2>
        <form
          className='form-horizontal mb-2'
          noValidate
          onSubmit={handleSubmitLogin}
        >
          <TextField
            id='email'
            label='Correo electrónico'
            register={register}
            name='email'
            type='email'
            error={errors.email}
          />

          <PasswordField
            id='password'
            register={register}
            name='password'
            error={errors.password}
          />

          <button
            className='btn btn-primary w-100'
            disabled={isLoading}
            type='submit'
          >
            {isLoading ? (
              <>
                <span>Ingresando...</span>
                <span
                  className='spinner-border spinner-border-sm'
                  aria-hidden='true'
                />
              </>
            ) : (
              <span>Ingresar</span>
            )}
          </button>
        </form>
        <div className='card-text'>
          No se ha registrado? Puede registrarse{' '}
          <Link className='link-offset-1' to='/auth/signup'>
            Aquí
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
