import { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { searchProducts } from '../services/productService'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { searchValidation } from '../validations/searchValidation'

import CardProductItem from '../components/CardProductItem'
import SearchForm from '../components/SearchForm'

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    data: products,
    isLoading,
    isRefetching,
    error,
    refetch
  } = useQuery({
    queryKey: ['searchProducts', searchParams],
    queryFn: () => searchProducts(searchParams),
    refetchOnWindowFocus: false,
    cacheTime: 0
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(searchValidation),
    defaultValues: {
      colors: []
    }
  })

  useEffect(() => {
    refetch()
  }, [refetch, searchParams])

  const handleSubmitSearchProducts = handleSubmit(
    ({ sortBy, order, category, brand, limitPrice, ...res }) => {
      let searchData = {}

      if (sortBy) searchData.sortBy = sortBy

      if (order) searchData.order = order

      if (category && category !== '') searchData.category = category

      if (brand && brand !== '') searchData.brand = brand

      if (limitPrice && limitPrice !== 0) searchData.limitPrice = limitPrice

      setSearchParams({ ...searchData, ...res })
    }
  )

  return (
    <div className='container py-4'>
      <section className='row'>
        <SearchForm
          handleSubmit={handleSubmitSearchProducts}
          isLoading={isRefetching}
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <div className='col-md-9'>
          <div className='row row-gap-4'>
            {isLoading ? (
              <div className='col-12 d-flex justify-content-center'>
                <div
                  className='spinner-border'
                  style={{ width: '3rem', height: '3rem' }}
                >
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className='col-12'>{error.message}</div>
            ) : products ? (
              products.map(product => (
                <article className='col-md-4' key={product.id}>
                  <CardProductItem
                    id={product.id}
                    title={product.title}
                    averageScore={product.averageScore}
                    countReviews={product.countReviews}
                    discountRate={product.discountRate}
                    finalPrice={product.finalPrice}
                    image={product.image.imageUrl}
                    originalPrice={product.originalPrice}
                  />
                </article>
              ))
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchPage
