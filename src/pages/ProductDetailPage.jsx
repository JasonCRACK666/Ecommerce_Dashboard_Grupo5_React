import { useEffect } from 'react'

import { useAlertsStore } from '../store/useAlertsStore'

import { useParams, Link, useSearchParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getProduct } from '../services/productService'

import PreviewImages from '../components/PreviewImages'
import PreviewImagesSkeleton from '../components/PreviewImages/Skeleton'
import ProductDetails from '../components/ProductDetails'
import ProductDetailsSkeleton from '../components/ProductDetails/Skeleton'
import ProductDetailsTabSkeleton from '../components/ProductDetailsTab/skeleton'
import ProductDetailsTab from '../components/ProductDetailsTab'
import ReviewForm from '../components/ReviewForm'
import ReviewList from '../components/ReviewList'

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

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

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
          <ProductDetailsTabSkeleton />
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

      <section className='mt-3'>
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
            <ProductDetailsTab
              title={product.title}
              brand={product.brand}
              category={product.category}
              colors={product.colors}
              description={product.description}
            />
          </div>
        )}

        {isActiveTabReviews() && (
          <div className='d-flex flex-column gap-3 p-2'>
            <ReviewForm productId={product.id} />
            <ReviewList productId={product.id} />
          </div>
        )}
      </section>
    </div>
  )
}

export default ProductDetailPage
