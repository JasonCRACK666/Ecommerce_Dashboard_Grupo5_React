import axios from 'axios'

import { getAuthToken } from '../utils/getAuthToken'

const API_AUTH_URL = 'http://localhost:8080/api/auth'

const authEndpoint = axios.create({
  baseURL: API_AUTH_URL
})

const authEndpointWithAuthToken = axios.create({
  baseURL: API_AUTH_URL,
  headers: {
    Authorization: getAuthToken()
  }
})

export const signIn = async loginData => {
  const res = await authEndpoint.post('/login', loginData)
  return res.data
}

export const signUp = async signUpData => {
  const res = await authEndpoint.post('/register', signUpData)
  return res.data
}

export const activateAccount = async activationCode => {
  const res = await authEndpoint.post('/activate', { activationCode })
  return res.data
}

export const getMe = async () => {
  const res = await authEndpointWithAuthToken.get('/me')
  return res.data
}
