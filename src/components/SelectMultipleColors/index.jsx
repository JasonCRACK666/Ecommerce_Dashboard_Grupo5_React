import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { getAllColors } from '../../services/colorService'

const SelectMultipleColors = ({ label, setValue, name }) => {
  const [selectedColors, setSelectedColors] = useState([])

  const { data: colors, isLoading } = useQuery({
    queryKey: ['colors'],
    queryFn: getAllColors,
    refetchOnWindowFocus: false
  })

  const handleSelectColor = colorName => {
    if (!selectedColors.includes(colorName)) {
      setSelectedColors([...selectedColors, colorName])
      setValue(name, [...selectedColors, colorName])
      return
    }

    setSelectedColors(selectedColors.filter(color => color !== colorName))
    setValue(
      name,
      selectedColors.filter(color => color !== colorName)
    )
  }

  return (
    <div className='form-group mb-3'>
      <label className='form-label'>{label}</label>
      <div className='d-flex flex-wrap gap-2'>
        {isLoading
          ? [...Array(4)].map((_, index) => (
              <div
                className='spinner-grow text-secondary'
                style={{ width: '2.5rem', height: '2.5rem' }}
                key={index}
              >
                <span className='visually-hidden'>Loading...</span>
              </div>
            ))
          : colors
          ? colors.map(color => (
              <div
                onClick={() => handleSelectColor(color.name)}
                key={color.id}
                className={`rounded-circle border ${
                  selectedColors.includes(color.name)
                    ? 'border-primary border-4'
                    : 'border-dark'
                }`}
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                data-bs-title={color.name}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: color.hex
                }}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default SelectMultipleColors
