const ProductDetailsTabSkeleton = () => {
  return (
    <div className='align-items-center' aria-hidden='true'>
      <p className='placeholder-glow'>
        <span className='placeholder col-12'></span>
        <span className='placeholder col-12 placeholder-lg'></span>
      </p>
      <p className='placeholder-glow'>
        <span className='placeholder col-4'></span>
        <span className='placeholder col-7'></span>
      </p>
      <p className='placeholder-glow'>
        <span className='placeholder col-4'></span>
        <span className='placeholder col-7'></span>
      </p>
      <p className='placeholder-glow'>
        <span className='placeholder col-8'></span>
        <span
          className='placeholder w-1 placeholder col-1 m-1'
          style={{
            border: '2px solid',
            borderRadius: '100px',
            width: '40px',
            height: '40px'
          }}
        ></span>
        <span
          className='placeholder w-1 placeholder col-1 m-1'
          style={{
            border: '2px solid',
            borderRadius: '100px',
            width: '40px',
            height: '40px'
          }}
        ></span>
        <span
          className='placeholder w-1 placeholder col-1 m-1'
          style={{
            border: '2px solid',
            borderRadius: '100px',
            width: '40px',
            height: '40px'
          }}
        ></span>
      </p>
      <p className='placeholder-glow'>
        <span className='placeholder col-6'></span>
        <span
          className='placeholder col-12 '
          style={{
            margin: '10px',
            width: '300px',
            height: '300px'
          }}
        ></span>
      </p>
    </div>
  )
}
export default ProductDetailsTabSkeleton
