import { useState } from 'react'

import { CgScrollV } from 'react-icons/cg'

const PreviewImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].imageUrl)

  const handleSelectedImage = imageUrl => {
    setSelectedImage(imageUrl)
  }

  return (
    <div className='row' style={{ height: '550px' }}>
      <div
        className='col-4 d-flex flex-column gap-4 overflow-y-scroll position-relative'
        style={{
          height: '550px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <CgScrollV
          className='position-absolute top-0 end-0 z-1 text-light mt-2 me-2'
          style={{
            fontSize: '3.5rem',
            filter: 'drop-shadow(0px 1px 3px rgb(0 0 0 / 0.3))'
          }}
        />

        {images.map(image => (
          <img
            key={image.id}
            style={{ width: '100%', height: '165px' }}
            className={`rounded object-fit-cover border border-3 ${
              selectedImage === image.imageUrl && 'border-primary'
            }`}
            src={image.imageUrl}
            alt=''
            onClick={() => handleSelectedImage(image.imageUrl)}
          />
        ))}
      </div>
      <div className='col-8'>
        <img
          style={{ width: '100%', height: '100%' }}
          className='rounded object-fit-cover border border-2 border-primary'
          src={selectedImage}
          alt=''
        />
      </div>
    </div>
  )
}

export default PreviewImages
