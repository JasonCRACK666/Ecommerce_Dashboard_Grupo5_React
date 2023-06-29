import { FaStar } from 'react-icons/fa'

import imgAvatarDefault from '../../assets/default-avatar.jpg'

const ReviewItem = ({ username, avatar, score, comment, createdAt }) => {
  const scoreStar = 5 - score

  return (
    <div className='card p-2'>
      <div className='row card-body'>
        <div className='col-md-1 pl-0'>
          <img
            src={avatar ?? imgAvatarDefault}
            alt={username}
            className='rounded-circle w-100'
            style={{
              aspectRatio: 1 / 1
            }}
          />
        </div>
        <div className='col-md-11 p-0'>
          <div className=''>
            <h6 className='card-title fw-bold mb-0'>{username}</h6>
            <p className='mb-0'>{new Date(createdAt).toLocaleDateString()}</p>
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

export default ReviewItem
