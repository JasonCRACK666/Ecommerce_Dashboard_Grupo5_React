import axios from 'axios'

const colorEndpoint = axios.create({
  baseURL: 'http://localhost:8080/api/colors'
})

export const getAllColors = async () => {
  const res = await colorEndpoint.get('')
  return res.data.data
}
