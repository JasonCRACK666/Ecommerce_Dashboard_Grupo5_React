import axios from 'axios'

const productEndpoint = axios.create({
  baseURL: 'http://localhost:8080/api/products'
})

export const getProduct = async productId => {
  const res = await productEndpoint.get(`/${productId}`)
  return res.data
}
