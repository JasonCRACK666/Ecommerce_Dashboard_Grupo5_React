import { useQuery } from '@tanstack/react-query'

import { getAllProductReviews } from '../../services/reviewService'

import ReviewItem from '../ReviewItem'

const ReviewList = ({ productId }) => {
  const {
    data: reviews,
    isLoading,
    error
  } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => getAllProductReviews(productId),
    refetchOnWindowFocus: false
  })

  if (isLoading)
    return (
      <div className='d-flex justify-content-center'>
        <div
          className='spinner-border spinner-border-sm'
          style={{ width: '3rem', height: '3rem' }}
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )

  if (error)
    return (
      <div className='text-danger text-center fs-3'>
        {error.response.data.message ?? error.message}
      </div>
    )

  if (reviews.length === 0)
    return <div className='text-center fs-4 my-1'>No hay ninguna reseña</div>

  return (
    <div className='vstack gap-3'>
      {reviews.map(review => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </div>
  )
}

export default ReviewList
