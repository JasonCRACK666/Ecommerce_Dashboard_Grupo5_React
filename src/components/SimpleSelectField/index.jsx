const SimpleSelectField = ({ id, label, error, options, name, register }) => {
  return (
    <div className='form-group mb-3'>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>

      <select
        id={id}
        {...register(name)}
        className={`form-select ${Boolean(error) && 'is-invalid'}`}
      >
        {options.map((option, index) => (
          <option className='text-capitalize' value={option.value} key={index}>
            {option.name}
          </option>
        ))}
      </select>

      {error && <div className='text-danger'>{error.message}</div>}
    </div>
  )
}

export default SimpleSelectField
