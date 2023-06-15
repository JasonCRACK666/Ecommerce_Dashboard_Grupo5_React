import { useQuery } from '@tanstack/react-query'

import CardProductItem from '../CardProductItem'

const ProductSection = ({ title, queryFn, queryKey }) => {
  const {
    isLoading,
    error,
    data: products
  } = useQuery({
    queryKey: [queryKey],
    queryFn,
    refetchOnWindowFocus: false
  })

  return (
    <div>
      <h3 className='fs-4'>{title}</h3>
      <div className='row'>
        {isLoading ? (
          [...Array(4)].map((_, index) => (
            <div className='col-md-3' key={index}>
              <div className='card' aria-hidden='true'>
                <img
                  src='https://img.freepik.com/vector-premium/cargando-vector-logotipo_535345-661.jpg?w=2000'
                  className='card-img-top'
                  alt='loadingImage'
                />
                <div className='card-body'>
                  <h5 className='card-title placeholder-glow'>
                    <span className='placeholder col-12'></span>
                    <span className='placeholder col-12'></span>
                    <span className='placeholder col-12'></span>
                    <span className='placeholder col-12'></span>
                  </h5>
                  <p className='card-text placeholder-glow'>
                    <span className='placeholder col-8'></span>
                  </p>
                  <div className='d-flex justify-content-center'>
                    <span className='placeholder col-8'></span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : error ? (
          <div className='col-12'>{error.message}</div>
        ) : products ? (
          <div className='col-md-3'>
            {products.map(product => (
              <CardProductItem
                key={product.id}
                title={product.title}
                averageScore={product.averageScore}
                countReviews={product.countReviews}
                discountRate={product.discountRate}
                finalPrice={product.finalPrice}
                image={product.image.imageUrl}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProductSection
