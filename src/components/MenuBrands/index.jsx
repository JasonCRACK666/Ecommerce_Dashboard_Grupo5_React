import { Link } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getAllBrands } from '../../services/brandService'

const MenuBrands = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['brands'],
    queryFn: getAllBrands,
    refetchOnWindowFocus: false
  })

  if (isLoading) return null

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
            <Link
              className='dropdown-item'
              to={{
                pathname: '/search',
                search: '?brand=' + brand.name
              }}
            >
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBrands
