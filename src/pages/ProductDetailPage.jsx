import { useAlertsStore } from '../store/useAlertsStore'

import { useParams, Link, useSearchParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getProduct } from '../services/productService'

import PreviewImages from '../components/PreviewImages'
import PreviewImagesSkeleton from '../components/PreviewImages/Skeleton'
import ProductDetails from '../components/ProductDetails'
import ProductDetailsSkeleton from '../components/ProductDetails/Skeleton'

const ProductDetailPage = () => {
  const { setAlert } = useAlertsStore()

  const { productId } = useParams()
  const [queries] = useSearchParams()

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
      <div className='container py-4'>
        <div className='row'>
          <div className='col-6'>
            <PreviewImagesSkeleton />
          </div>
          <div className='col-6'>
            <ProductDetailsSkeleton />
          </div>
        </div>
        <section>
          {/* Aquí va el loading que va ha hacer Osmer, cuando empiecen su parte borren este comentario */}
        </section>
      </div>
    )

  if (error)
    return (
      <div className='container py-4'>
        <div className='d-flex justify-content-center py-4 fs-4 text-danger'>
          {error.response.data.message}
        </div>
      </div>
    )

  return (
    <div className='container py-4'>
      <section className='row'>
        <div className='col-6'>
          <PreviewImages images={product.images} />
        </div>
        <div className='col-6'>
          <ProductDetails
            title={product.title}
            brand={product.brand}
            category={product.category}
            colors={product.colors}
            originalPrice={product.originalPrice}
            finalPrice={product.finalPrice}
            discountRate={product.discountRate}
          />
        </div>
      </section>

      <section className='mt-10'>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <Link
              className={`nav-link ${isActiveTabDetail() && 'active'}`}
              to={'?tab=detail'}
            >
              Detalle
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${isActiveTabReviews() && 'active'}`}
              to={'?tab=reviews'}
            >
              Reseñas
            </Link>
          </li>
        </ul>

        {isActiveTabDetail() && (
          <div>
            {/* Aquí va la parte de Osmer, cuando empiecen su parte borren este comentario */}
          </div>
        )}

        {isActiveTabReviews() && <div>Reseñas</div>}
      </section>
    </div>
  )
}

export default ProductDetailPage
