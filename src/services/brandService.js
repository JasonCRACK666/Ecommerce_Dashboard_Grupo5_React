import axios from "axios"

const brandApi = axios.create({
    baseURL: 'http://localhost:8080/api/brands'
})

export const getAllBrands = async() => {
    const res = await brandApi.get('')
    return res.data.data
}