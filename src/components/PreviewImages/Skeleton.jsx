const PreviewImagesSkeleton = () => {
  return (
    <div className='row' style={{ height: '550px' }}>
      <div
        className='col-4 d-flex flex-column gap-4'
        style={{
          height: '550px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <span
          className='placeholder rounded w-100'
          style={{ height: '165px' }}
        ></span>
        <span
          className='placeholder rounded w-100'
          style={{ height: '165px' }}
        ></span>
        <span
          className='placeholder rounded w-100'
          style={{ height: '165px' }}
        ></span>
      </div>
      <div className='col-8'>
        <span className='placeholder rounded w-100 h-100'></span>
      </div>
    </div>
  )
}

export default PreviewImagesSkeleton
