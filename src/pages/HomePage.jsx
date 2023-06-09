import CardProductItem from "../components/CardProductItem"
const HomePage = () => {
  return (
    <div>
      <CardProductItem
      srcImg={"https://compuusa.com.pe/8883-large_default/motherboard-gigabyte-b560m-ds3h-svl-ddr4.jpg"}
      productName='MotherBoard'
      finalPrice='90'
      originalPrice='100'
      discountRate={false}
      value={4}
      />
    </div>
  )
}

export default HomePage
