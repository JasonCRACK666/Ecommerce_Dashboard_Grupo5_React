import Carousel from '../components/Carousel'
import PromotionCard from '../components/PromotionCard'

const HomePage = () => {
  return (
    <div className='container py-4 vstack gap-3'>
      <Carousel />
      <div className='row'>
        <div className='col-xs-12 col-6'>
          <PromotionCard
            finalPrice={5259}
            discountRate={15}
            image='https://www.infotec.com.pe/70209-large_default/celular-apple-iphone-14-plus-mq3x3lla-5g-ios-256gb-6gb-midnight.jpg'
            originalPrice={6186}
            title='CELULAR APPLE IPHONE 14 PLUS (MQ3X3LL/A)'
          />
        </div>
        <div className='col-xs-12 col-6'>
          <PromotionCard
            finalPrice={1442.62}
            discountRate={10}
            image='https://abncolor.com/wp-content/uploads/2019/11/lenovo-core-i7.png'
            originalPrice={1643.49}
            title='COMPUTADORA LENOVO CORE I7 PARA DISEÑO Y JUEGOS'
          />
        </div>
      </div>

      <PromotionCard
        finalPrice={1338}
        discountRate={null}
        image='https://electronicstore.com.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/portatil-asus-e410m-celeron-ssd128gb-memoria-4gb-de-14-blue.jpg'
        originalPrice={1338}
        title='LAPTOP ASUS E410M - CEL N4020 - RAM 4GB - SSD 128GB - WIN10 - PANTALLA 14" BLUE'
      />
    </div>
  )
}

export default HomePage
