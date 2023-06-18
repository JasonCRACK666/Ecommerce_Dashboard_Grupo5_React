const RadiosGroup = ({ options, name, label, register, style }) => {
  return (
    <div className='form-group mb-3'>
      <label className='form-label'>{label}</label>
      <div className={`d-flex gap-2 ${style}`}>
        {options.map((option, index) => (
          <div className='form-check' key={index}>
            <label className='form-check-label'>
              <input
                className='form-check-input'
                type='radio'
                value={option.value}
                {...register(name)}
              />
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadiosGroup
