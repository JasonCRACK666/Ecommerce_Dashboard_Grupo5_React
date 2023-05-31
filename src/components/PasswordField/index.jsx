import { useState } from 'react'

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const PasswordField = ({ id, name, error, register }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  return (
    <div className='form-group mb-3'>
      <label className='form-label' htmlFor={id}>
        Contraseña
      </label>
      <div className='input-group'>
        <input
          className={`form-control ${Boolean(error) && 'is-invalid'}`}
          {...register(name)}
          id={id}
          type={showPassword ? 'text' : 'password'}
        />
        <button
          className='btn btn-outline-secondary fs-5 d-flex align-items-center'
          type='button'
          onClick={() => handleToggleShowPassword()}
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>

      {error && <div className='text-danger'>{error.message}</div>}
    </div>
  )
}

export default PasswordField
