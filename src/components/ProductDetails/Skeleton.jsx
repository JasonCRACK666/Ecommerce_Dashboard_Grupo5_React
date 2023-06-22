const ProductDetailsSkeleton = () => {
  return (
    <div className='align-items-center' aria-hidden='true'>
      <h1 className='placeholder-glow'>
        <span className='placeholder col-12'></span>
      </h1>
      <p className=' d-flex placeholder-glow'>
        <span className='placeholder col-2 m-1'></span>
        <span className='placeholder col-1 m-1'></span>
        <span
          className='placeholder col-1'
          style={{ width: '35px', height: '35px', borderRadius: '50%' }}
        ></span>
      </p>
      <p className='placeholder-glow'>
        <span className='placeholder col-2 m-1'></span>
        <span className='placeholder col-1'></span>
      </p>
      <p className='placeholder-glow'>
        <span className='placeholder col-1'></span>
      </p>
      <p className='placeholder-glow'>
        <span
          className='placeholder w-1 placeholder col-1 m-1'
          style={{
            border: '1px solid',
            borderRadius: '100px',
            width: '60px',
            height: '60px'
          }}
        ></span>
        <span
          className='placeholder w-1 placeholder col-1 m-1'
          style={{
            border: '1px solid',
            borderRadius: '100px',
            width: '60px',
            height: '60px'
          }}
        ></span>
        <span
          className='placeholder w-1 placeholder col-1 m-1'
          style={{
            border: '1px solid',
            borderRadius: '100px',
            width: '60px',
            height: '60px'
          }}
        ></span>
      </p>

      <p className='placeholder-glow'>
        <span className='placeholder col-5 p-4 m-1'></span>
        <span className='placeholder col-5 p-4'></span>
      </p>
    </div>
  )
}
export default ProductDetailsSkeleton
