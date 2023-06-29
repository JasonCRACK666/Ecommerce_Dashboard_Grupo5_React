import { useState } from 'react'

import { BsCardImage } from 'react-icons/bs'

const EditImage = ({
  register,
  name,
  setValue,
  defaultValue,
  className,
  setDataInEdit,
  styleImg = {}
}) => {
  const [image, setImage] = useState(defaultValue)
  const [showSelectImage, setShowSelectImage] = useState(false)

  const handleChangeImage = e => {
    const imageFile = e.target.files[0]

    if (imageFile) {
      setValue(name, imageFile)
      setImage(URL.createObjectURL(imageFile))
      setDataInEdit(prevEdits => [...prevEdits, name])
    } else {
      setValue(name, null)
      setImage(defaultValue)
      setDataInEdit(prevEdits => prevEdits.filter(edit => edit !== name))
    }
  }

  return (
    <div
      className='position-relative'
      onMouseEnter={() => setShowSelectImage(true)}
      onMouseLeave={() => setShowSelectImage(false)}
    >
      <img className={className} src={image} alt={name} style={styleImg} />

      {showSelectImage && (
        <label
          className='position-absolute top-50 start-50 translate-middle p-2 bg-primary rounded-circle'
          style={{ cursor: 'pointer' }}
          htmlFor={name}
        >
          <BsCardImage className='fs-3 text-light' />
        </label>
      )}

      <input
        id={name}
        type='file'
        style={{ display: 'none' }}
        accept='image/png, image/jpg'
        {...register(name, { onChange: handleChangeImage })}
      />
    </div>
  )
}

export default EditImage
