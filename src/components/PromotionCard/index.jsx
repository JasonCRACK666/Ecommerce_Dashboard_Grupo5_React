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
    <div className='card m-4' style={cardStyle}>
      <div className='row g-0'>
        <div className='col-md-7'>
          <div className='card-body bg-white'>
            <h5 className='card-title fs-4'>{title}</h5>
            <div className='card-text'>
              <p className='fw-bold fst-italic d-inline-block me-3 fs-5'>
                S/.{finalPrice}
              </p>
              {discountRate && (
                <p className='text-decoration-line-through text-secondary d-inline-block fs-6'>
                  S/.{originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='col-md-5'>
          <img
            src={image}
            className='card-img-top'
            alt='Imagen de promoción'
            style={{
              maxHeight: '140px',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PromotionCard
