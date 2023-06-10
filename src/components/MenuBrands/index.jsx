import { Link } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getAllBrands } from '../../services/brandService'

const MenuBrands = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['brands'],
    queryFn: getAllBrands,
    refetchOnWindowFocus: false
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Marcas
      </button>
      <ul className='dropdown-menu'>
        {data.map(brand => (
          <li key={brand.id}>
            <Link className='dropdown-item' to={'/'}>
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBrands
