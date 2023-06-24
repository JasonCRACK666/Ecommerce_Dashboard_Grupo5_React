const ProductDetailsTabSkeleton = () => {
  return (
    <div className='align-items-center gap-2 p-3' aria-hidden='true'>
      <p className='placeholder-glow'>
        <span className='placeholder col-12'></span>
        <span className='placeholder col-12 placeholder-lg'></span>
      </p>

      <p className='placeholder-glow'>
        <span className='placeholder col-12'></span>
        <span className='placeholder col-12 placeholder-lg'></span>
      </p>

      <p className='placeholder-glow xd-flex flex-column gap-2'>
        <span className='placeholder col-12'></span>
        <span className='placeholder col-12 placeholder-lg'></span>
      </p>

      <div className='placeholder-glow d-flex flex-column gap-2 mb-3'>
        <span className='placeholder col-8'></span>
        <div className='d-flex gap-2'>
          <span
            className='placeholder w-1 placeholder col-1 rounded-circle'
            style={{
              width: '40px',
              height: '40px'
            }}
          ></span>
          <span
            className='placeholder w-1 placeholder col-1 rounded-circle'
            style={{
              width: '40px',
              height: '40px'
            }}
          ></span>
          <span
            className='placeholder w-1 placeholder col-1 rounded-circle'
            style={{
              width: '40px',
              height: '40px'
            }}
          ></span>
        </div>
      </div>
      <div className='placeholder-glow d-flex flex-column gap-2'>
        <span className='placeholder col-6'></span>
        <span
          className='placeholder col-12'
          style={{
            height: '100px'
          }}
        ></span>
      </div>
    </div>
  )
}
export default ProductDetailsTabSkeleton
