import { useQuery } from '@tanstack/react-query'

const FetchedSelectField = ({
  queryFn,
  queryKey,
  label,
  id,
  name,
  register,
  error
}) => {
  const { data: options } = useQuery({
    queryFn,
    queryKey: [queryKey],
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })

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
        <option value={''}>-- Sin seleccionar --</option>

        {options &&
          options.map(option => (
            <option
              className='text-capitalize'
              value={option.name}
              key={option.id}
            >
              {option.name}
            </option>
          ))}
      </select>

      {error && <div className='text-danger'>{error.message}</div>}
    </div>
  )
}

export default FetchedSelectField
