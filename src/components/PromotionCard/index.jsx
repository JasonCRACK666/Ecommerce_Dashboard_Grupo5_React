const PromotionCard = ({
  title,
  image,
  finalPrice,
  originalPrice,
  discountRate,
  width
}) => {
  const cardStyle = {
    width: width || '50rem'
  }
  return (
    <div className='card bg-secondary m-5 ' style={cardStyle}>
      <img src={image} className='rounded' alt='Imagen de promoción' />

      <div className='card-body bg-white'>
        <h5 className='card-title'>{title}</h5>
        <div>
          <p className='card-text fw-bold fst-italic d-inline-block me-3'>
            S/.{finalPrice}
          </p>
          {discountRate && (
            <p className='text-decoration-line-through text-secondary d-inline-block'>
              S/.{originalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PromotionCard
