import { useNavigate, Link } from 'react-router-dom'

import { useAlertsStore } from '../store/useAlertsStore'

import { useMutation } from '@tanstack/react-query'

import { signUp } from '../services/authService'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { signUpValidation } from '../validations/signUpValidation'

import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'
import Button from '../components/Button'

const SignUpPage = () => {
  const navigate = useNavigate()
  const { setAlert } = useAlertsStore()

  const { mutate: mutateSignUp, isLoading } = useMutation({
    mutationFn: signUp,
    onSuccess: ({ message }) => {
      navigate('/auth/login')
      setAlert({
        message,
        timeout: 6000,
        type: 'success'
      })
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
    resolver: zodResolver(signUpValidation)
  })

  const handleSubmitSignUp = handleSubmit(data => {
    mutateSignUp(data)
  })

  return (
    <div className='card w-50'>
      <div className='card-body'>
        <h2 className='card-title text-center'>Regístrate</h2>
        <form
          className='form-horizontal mb-2'
          noValidate
          onSubmit={handleSubmitSignUp}
        >
          <div className='row'>
            <div className='col-md-6'>
              <TextField
                id='firstName'
                register={register}
                name='firstName'
                label='Nombres'
                error={errors.firstName}
              />
            </div>
            <div className='col-md-6'>
              <TextField
                id='lastName'
                register={register}
                name='lastName'
                label='Apellidos'
                error={errors.lastName}
              />
            </div>
            <div className='col-12'>
              <TextField
                id='username'
                register={register}
                name='username'
                label='Nombre de usuario'
                error={errors.username}
              />
            </div>
            <div className='col-md-6'>
              <TextField
                id='email'
                register={register}
                name='email'
                label='Correo electrónico'
                error={errors.email}
              />
            </div>
            <div className='col-md-6'>
              <TextField
                id='dni'
                register={register}
                name='dni'
                label='DNI'
                type='number'
                error={errors.dni}
              />
            </div>
            <div className='col-12'>
              <PasswordField
                id='password'
                register={register}
                name='password'
                error={errors.password}
              />
            </div>
          </div>
          <Button
            loading={isLoading}
            loadingMessage='Registrando...'
            className='btn-primary w-100'
          >
            Registrarse
          </Button>
        </form>
        <div className='card-text'>
          Ya esta registrado? Puede ingresar a su cuenta{' '}
          <Link className='link-offset-1' to='/auth/login'>
            Aquí
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
