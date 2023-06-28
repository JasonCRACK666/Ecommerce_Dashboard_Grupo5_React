import axios from 'axios'

import { getAuthToken } from '../utils/getAuthToken'

const API_ACCOUNT_URL = 'http://localhost:8080/api/account'

const accountEndpoint = axios.create({
  baseURL: API_ACCOUNT_URL
})

const accountEndpointWithAuthToken = axios.create({
  baseURL: API_ACCOUNT_URL,
  headers: {
    Authorization: getAuthToken()
  }
})

export const getProfile = async () => {
  const res = await accountEndpointWithAuthToken.get('')
  return res.data
}

export const updateProfile = async ({ profileId, profileFormData, token }) => {
  const res = await accountEndpoint.patch(`/${profileId}`, profileFormData, {
    headers: {
      Authorization: token
    }
  })

  return res.data
}
