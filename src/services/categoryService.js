import axios from 'axios'

const categoriesEndpoint = axios.create({
  baseURL: 'http://localhost:8080/api/categories'
})

export const getAllCategories = async () => {
  const res = await categoriesEndpoint.get('')
  return res.data.data
}
