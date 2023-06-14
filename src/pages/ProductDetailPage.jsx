import { useParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getProduct } from '../services/productService'

const ProductDetailPage = () => {
  const { productId } = useParams()

  const { isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    refetchOnWindowFocus: false,
    onSuccess: data => {
      console.log(data)
    }
  })

  if (isLoading)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>loading...</div>
          <div className='col-6'>loading...</div>
        </div>
      </div>
    )

  if (error)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>{error.response.data.message}</div>
          <div className='col-6'>{error.message}</div>
        </div>
      </div>
    )

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>{/* Esta parte lo hace Emerzon */}</div>
        <div className='col-6'>{/* Aquí va la parte de Eddie */}</div>
      </div>
    </div>
  )
}

export default ProductDetailPage
