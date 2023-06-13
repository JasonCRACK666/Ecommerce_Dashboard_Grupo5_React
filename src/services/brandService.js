import axios from 'axios'

const brandEndpoint = axios.create({
  baseURL: 'http://localhost:8080/api/brands'
})

export const getAllBrands = async () => {
  const res = await brandEndpoint.get('')
  return res.data.data
}
