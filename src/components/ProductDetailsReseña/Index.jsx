import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const ProductDetailsReseña = ({
  id,
  username,
  avatar,
  score,
  comment,
  createAt
}) => {
  const scoreStar = 5 - score

  return (
    <div className='card p-2'>
      <div className='row card-body'>
        <div className='col-md-1 pl-0'>
          <Link to={`/product/${id}`}>
            <img
              src={avatar}
              alt={username}
              className='rounded-circle w-100'
              style={{
                aspectRatio: 1 / 1
              }}
            />
          </Link>
        </div>
        <div className='col-md-11 p-0'>
          <div className=''>
            <h6 className='card-title fw-bold mb-0'>{username}</h6>
            <p className='mb-0'>{createAt.toLocaleDateString()}</p>
            <div className='mb-2'>
              {[...Array(score)].map((_, index) => (
                <FaStar key={index} className='text-warning fs-5' />
              ))}
              {[...Array(scoreStar)].map((_, index) => (
                <FaStar key={index} className='text-dark ' />
              ))}
            </div>
            <p className='text-start lh-1'>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsReseña
