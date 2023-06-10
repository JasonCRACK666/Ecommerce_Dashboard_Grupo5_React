import { FaStar } from "react-icons/fa";

const CardProductItem = ({images, title,originalPrice, discountRate, finalPrice, averageScore ,countReviews}) => {
  const residuaryStar= 5 - averageScore
  const yellow = 'text-warning'
  const white = 'text-light'
  return(
    <div className="card m-5" style={{width: '18rem'}}>
      <img src={images} className="card-img-top" alt="productItem" />
      <div className="card-body bg-dark">
        <h4 className="card-title text-light">{title}</h4>
        <div className='row'>
        <p className='col-3 justify-content-center align-items-center text-light'>S/{finalPrice}</p>
        {!discountRate && <p className='col-3 text-decoration-line-through text-secondary'>S/{originalPrice}</p>}
        </div>
        <div>

    </div>
        <div className='row'>
        {[...Array(averageScore)].map((_, index) => (
        <FaStar key={index} className={`col-2 ${yellow}`}/>
      ))}
      {[...Array(residuaryStar)].map((_, index) => (
        <FaStar key={index} className={`col-2 ${white}`}/>
      ))}
        <p className='col-2 text-light'>({countReviews})</p>
        </div>
      </div>
      
    </div>
  )
}
export default CardProductItem