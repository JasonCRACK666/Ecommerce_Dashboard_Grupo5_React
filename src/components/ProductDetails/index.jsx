import { Fragment } from 'react'
const ProductDetails = ({
  title,
  colors,
  originalPrice,
  finalPrice,
  brand,
  category,
  discountRate
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className='d-flex gap-2 mb-1'>
        <p className='fw-bold my-2'>Marca:</p>
        <p className='my-2'> {brand.name}</p>
        <img
          className='border border-dark border-1 rounded-circle object-fit-cover'
          src={brand.logo}
          style={{
            width: '40px',
            aspectRatio: 1 / 1
          }}
        />
      </div>
      <div className='d-flex gap-2 mb-2'>
        <p className='fw-bold mb-0'>Categoría:</p>
        <p className='text-capitalize mb-0'>{category.name}</p>
      </div>
      <p className='fw-bold'>Colores:</p>
      <div className='d-flex  align-items-end gap-2'>
        {colors.map(color => (
          <div
            key={color.id}
            className='w-1'
            style={{
              border: '1px solid',
              borderRadius: '100px',
              width: '60px',
              height: '60px',
              backgroundColor: color.hex
            }}
          ></div>
        ))}
      </div>
      <div className='d-flex align-items-end gap-2'>
        {!discountRate ? (
          <Fragment>
            <p className=' fw-bold fs-1 m-4'>S/{finalPrice}</p>
          </Fragment>
        ) : (
          <Fragment>
            <p className=' fw-bold fs-1 m-4'>S/{finalPrice}</p>
            <span
              style={{
                border: '0.75vw solid',
                borderColor: ' #000000 transparent transparent #000000',
                transform: 'rotate(-45deg)'
              }}
            ></span>
            <p className='mb-1'>{discountRate}%</p>
            <p className='text-decoration-line-through text-secondary fs-1 m-4'>
              S/{originalPrice}
            </p>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
