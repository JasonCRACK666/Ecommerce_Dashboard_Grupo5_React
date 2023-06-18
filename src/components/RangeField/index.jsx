import { useState } from 'react'

const RangeField = ({ label, id, name, register, min, max, step }) => {
  const [selectedPrice, setSelectedPrice] = useState(0)

  const handleChangeRange = e => {
    setSelectedPrice(Number(e.target.value))
  }

  return (
    <div className='form-group mb-3'>
      <label className='form-label' htmlFor={id}>
        {label} ({selectedPrice === 0 ? 'Sin rango' : 'S/.' + selectedPrice})
      </label>
      <input
        id={id}
        {...register(name, { valueAsNumber: true })}
        className='form-range'
        onChange={handleChangeRange}
        type='range'
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}

export default RangeField
