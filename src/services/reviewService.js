import axios from 'axios'

import { getAuthToken } from '../utils/getAuthToken'

const API_REVIEW_URL = 'http://localhost:8080/api/reviews'

const reviewEndpoint = axios.create({
  baseURL: API_REVIEW_URL
})

const reviewEndpointWithAuthToken = axios.create({
  baseURL: API_REVIEW_URL,
  headers: {
    Authorization: getAuthToken()
  }
})

export const getAllProductReviews = async productId => {
  const res = await reviewEndpoint.get(`/product/${productId}`)
  return res.data.data
}

export const createReview = async ({ productId, reviewData }) => {
  const res = await reviewEndpointWithAuthToken.post(
    `/product/${productId}`,
    reviewData
  )

  return res.data
}
