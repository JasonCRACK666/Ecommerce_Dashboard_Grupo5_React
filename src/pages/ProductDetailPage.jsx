import { useAlertsStore } from '../store/useAlertsStore'

import { useParams, Link, useSearchParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getProduct } from '../services/productService'

const ProductDetailPage = () => {
  const { setAlert } = useAlertsStore()

  const { productId } = useParams()
  const [queries, setQueries] = useSearchParams()

  const {
    data: product,
    isLoading,
    error
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    refetchOnWindowFocus: false,
    onError: error => {
      setAlert({
        message: error.response.data.message,
        timeout: 6000,
        type: 'danger'
      })
    }
  })

  const isActiveTabDetail = () =>
    queries.get('tab') === 'detail' || !queries.get('tab')

  const isActiveTabReviews = () => queries.get('tab') === 'reviews'

  if (isLoading)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            {/* Aquí va el loading que va ha hacer Emerzon */}
          </div>
          <div className='col-6'>
            {/* Aquí va el loading que va ha hacer Eddie, cuando empiecen su parte borren este comentario */}
          </div>
        </div>
        <section>
          {/* Aquí va el loading que va ha hacer Osmer, cuando empiecen su parte borren este comentario */}
        </section>
      </div>
    )

  if (error)
    return (
      <div className='container'>
        <div className='d-flex justify-content-center py-4 fs-4 text-danger'>
          {error.response.data.message}
        </div>
      </div>
    )

  return (
    <div className='container'>
      <section className='row'>
        <div className='col-6'>{/* Esta parte lo hace Emerzon */}</div>
        <div className='col-6'>
          {/* Aquí va la parte de Eddie, cuando empiecen su parte borren este comentario */}
        </div>
      </section>

      <section>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <Link
              className={`nav-link ${isActiveTabDetail() && 'active'}`}
              onClick={() => setQueries({ tab: 'detail' })}
            >
              Detalle
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${isActiveTabReviews() && 'active'}`}
              onClick={() => setQueries({ tab: 'review' })}
            >
              Reseñas
            </Link>
          </li>
        </ul>

        {isActiveTabDetail && (
          <div>
            {/* Aquí va la parte de Osmer, cuando empiecen su parte borren este comentario */}
          </div>
        )}

        {isActiveTabReviews && <div>Reseñas</div>}
      </section>
    </div>
  )
}

export default ProductDetailPage
