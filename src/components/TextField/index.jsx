const TextField = ({ id, type = 'text', label, name, error, register }) => {
  return (
    <div className='form-group mb-3'>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>

      <input
        className={`form-control ${Boolean(error) && 'is-invalid'}`}
        {...register(name)}
        id={id}
        name={name}
        type={type}
      />

      {error && <div className='text-danger'>{error.message}</div>}
    </div>
  )
}

export default TextField
