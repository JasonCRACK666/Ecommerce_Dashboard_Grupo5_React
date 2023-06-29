const EditTextareaField = ({
  id,
  defaultValue,
  label,
  name,
  error,
  register,
  onChange = () => {},
  rows = 3
}) => {
  return (
    <div className='form-group mb-3'>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className={`form-control ${Boolean(error) && 'is-invalid'}`}
        style={{ resize: 'none' }}
        rows={rows}
        {...register(name, { onChange })}
        defaultValue={defaultValue}
      ></textarea>

      {error && <div className='text-danger'>{error.message}</div>}
    </div>
  )
}

export default EditTextareaField
