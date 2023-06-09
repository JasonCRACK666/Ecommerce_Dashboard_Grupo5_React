import '../CardProductItem/CardProductItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaStar } from "react-icons/fa";

const CardProductItem = ({srcImg, productName,originalPrice, discountRate, finalPrice, value}) => {
  return(
    <div className="card m-5">
      <img src={srcImg} className="card-img-top" alt="productItem" />
      <div className="card-body bg-dark">
        <h4 className="card-title text-light">{productName}</h4>
        <div className='row'>
        <p className='col-3 justify-content-center align-items-center text-light'>S/{finalPrice}</p>
        {!discountRate && <p className='col-3 text-decoration-line-through text-secondary'>S/{originalPrice}</p>}
        </div>
        <div className='row'>
        <FaStar className='col-2 text-warning' />
        <FaStar className='col-2  text-warning' />
        <FaStar className='col-2  text-warning' />
        <FaStar className='col-2  text-warning' />
        <FaStar className='col-2 text-secondary' />
        <p className='col-2 text-light'>({value})</p>
        </div>
      </div>
      
    </div>
  )
}
export default CardProductItem