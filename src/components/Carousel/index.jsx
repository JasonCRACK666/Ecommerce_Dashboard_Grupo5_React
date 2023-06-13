function Carousel() {
  const img1 =
    'https://www.magitech.pe/media/wysiwyg/banners/home/X14-ALIENWARE-BANNER.jpg'
  const img2 =
    'https://www.magitech.pe/media/wysiwyg/banners/home/CYBER-LAPTOPS-BASI.jpg'
  const img3 =
    'https://www.magitech.pe/media/wysiwyg/banners/home/Lenovo-ThinkBook-Plus-IML-DUAL-SCREENS-un-producto.jpg'
  const img4 =
    'https://www.magitech.pe/media/wysiwyg/banners/home/alienwere-aurora-r10-gaming-y-monitor-alien-de-34.jpg'
  const img5 =
    'https://cdn.shopify.com/s/files/1/0590/2830/8127/files/BANNER-DESKTOP-CYBER-WOW-GENERICO.jpg?v=1681685699'
  const img6 =
    'http://cdn.shopify.com/s/files/1/0590/2830/8127/files/BANNER-DESKTOP-DIA-DEL-PADRE-PERU_2000x518.jpg?v=1685999352'
  return (
    <div id='carouselExampleFade' className='carousel slide carousel-fade'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={img1} className='d-block w-100 h-75' alt='...'></img>
        </div>
        <div className='carousel-item'>
          <img src={img2} className='d-block w-100 ' alt='...'></img>
        </div>
        <div className='carousel-item'>
          <img src={img3} className='d-block w-100 ' alt='...'></img>
        </div>
        <div className='carousel-item'>
          <img src={img4} className='d-block w-100 ' alt='...'></img>
        </div>
        <div className='carousel-item'>
          <img src={img5} className='d-block w-100' alt='...'></img>
        </div>
        <div className='carousel-item'>
          <img src={img6} className='d-block w-100' alt='...'></img>
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carousel
