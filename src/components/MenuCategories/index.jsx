import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../services/categoryService'

const MenuCategories = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories
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
        Categorías
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
        {data.map(categories => (
          <li key={categories.id}>{categories.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MenuCategories
