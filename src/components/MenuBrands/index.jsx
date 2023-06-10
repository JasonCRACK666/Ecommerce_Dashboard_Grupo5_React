import { useQuery } from '@tanstack/react-query'
import { getAllBrands } from '../../services/brandService'

const MenuBrands = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['brands'],
    queryFn: getAllBrands
  })
  if (isLoading) return <div>Loading..</div>
  else if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='dropdown'>
      <button
        className='btn dropdown-toggle'
        type='button'
        id='dropdownMenu2'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Marcas
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
        {data.map(brands => (
          <li key={brands.id}>{brands.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBrands
