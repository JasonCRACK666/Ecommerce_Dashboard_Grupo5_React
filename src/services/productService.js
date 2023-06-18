import axios from 'axios'

const productEndpoint = axios.create({
  baseURL: 'http://localhost:8080/api/products'
})

export const getProduct = async productId => {
  const res = await productEndpoint.get(`/${productId}`)
  return res.data
}

export const searchProducts = async searchParams => {
  const res = await productEndpoint.get('/search', {
    params: searchParams
  })

  return res.data.data
}

export const getAllComputers = async () => {
  const res = await productEndpoint.get('/search', {
    params: {
      size: 4,
      category: 'computadoras'
    }
  })

  return res.data.data
}

export const getAllLaptops = async () => {
  const res = await productEndpoint.get('/search', {
    params: {
      size: 4,
      category: 'laptops'
    }
  })

  return res.data.data
}

export const getAllPhonesInOffer = async () => {
  const res = await productEndpoint.get('/search', {
    params: {
      size: 4,
      category: 'celulares',
      inOffer: 'true'
    }
  })

  return res.data.data
}
