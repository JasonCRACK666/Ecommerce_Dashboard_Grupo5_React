const ProductDetailstab = ({ title, brand, category, colors, description }) => {
  return (
    <div className='align-items-center p-3'>
      <p className='fw-bold'>Nombre del producto: </p>
      <p>{title}</p>
      <div className='d-flex column'>
        <div className='d-flex'>
          <p className='fw-bold me-2'>Marca :</p>
          <p>{brand.name}</p>
        </div>
      </div>
      <div className='d-flex column'>
        <div className='d-flex'>
          <p className='fw-bold'>categoria : </p>
          <p>{category.name}</p>
        </div>
      </div>
      <p className='fw-bold'>Colores :</p>
      <div className='d-flex  align-items-end gap-2'>
        {colors.map(color => (
          <div
            key={color}
            className='w-1'
            style={{
              border: '2px solid',
              borderRadius: '100px',
              width: '40px',
              height: '40px',
              backgroundColor: color.hex
            }}
          ></div>
        ))}
      </div>
      <div className='mt-3'>
        <p className='fw-bold'>Descripcion : </p>
        <p className='fw-medium'>{description}</p>
      </div>
    </div>
  )
}

export default ProductDetailstab