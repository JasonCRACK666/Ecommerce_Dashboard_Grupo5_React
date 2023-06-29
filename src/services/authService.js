import axios from 'axios'

const API_AUTH_URL = 'http://localhost:8080/api/auth'

const authEndpoint = axios.create({
  baseURL: API_AUTH_URL
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

export const getMe = async token => {
  const res = await authEndpoint.get('/me', {
    headers: {
      Authorization: token
    }
  })
  return res.data
}
