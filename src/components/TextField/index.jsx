const TextField = ({
  id,
  type = 'text',
  defaultValue,
  label,
  name,
  error,
  register,
  onChange
}) => {
  return (
    <div className='form-group mb-3'>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>

      <input
        className={`form-control ${Boolean(error) && 'is-invalid'}`}
        id={id}
        defaultValue={defaultValue}
        name={name}
        type={type}
        {...register(
          name,
          onChange
            ? { valueAsNumber: type === 'number', onChange }
            : { valueAsNumber: type === 'number' }
        )}
      />

      {error && <div className='text-danger'>{error.message}</div>}
    </div>
  )
}

export default TextField
