import { Link } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getAllCategories } from '../../services/categoryService'

const MenuCategories = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories
  })

  if (isLoading) return <div>Loading..</div>

  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Categorías
      </button>

      <ul className='dropdown-menu'>
        {data.map(category => (
          <li key={category.id}>
            <Link className='dropdown-item' to={'/'}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuCategories
