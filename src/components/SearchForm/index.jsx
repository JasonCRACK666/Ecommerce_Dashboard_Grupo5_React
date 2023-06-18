import { getAllCategories } from '../../services/categoryService'
import { getAllBrands } from '../../services/brandService'

import TextField from '../../components/TextField'
import FetchedSelectField from '../../components/FetchedSelectField'
import SimpleSelectField from '../../components/SimpleSelectField'
import RadiosGroup from '../../components/RadiosGroup'
import SelectMultipleColors from '../../components/SelectMultipleColors'
import RangeField from '../../components/RangeField'
import Button from '../../components/Button'

import { ORDER_BY, SORT_BY } from '../../utils/constants'

const SearchForm = ({
  handleSubmit,
  register,
  setValue,
  errors,
  isLoading
}) => {
  return (
    <div className='col-md-3'>
      <article className='card'>
        <form className='card-body' onSubmit={handleSubmit}>
          <TextField
            id='query'
            label='Titulo'
            name='q'
            register={register}
            error={errors.q}
          />

          <SimpleSelectField
            id='sortBy'
            label='Ordenar por'
            error={errors.sortBy}
            name='sortBy'
            register={register}
            options={SORT_BY}
          />

          <RadiosGroup
            name='order'
            label='Orden'
            register={register}
            options={ORDER_BY}
            style='flex-column'
          />

          <FetchedSelectField
            id='category'
            error={errors.category}
            label='Categoría'
            name='category'
            register={register}
            queryFn={getAllCategories}
            queryKey='categories'
          />

          <FetchedSelectField
            id='brand'
            error={errors.brands}
            label='Marcas'
            name='brand'
            register={register}
            queryFn={getAllBrands}
            queryKey='brands'
          />

          <SelectMultipleColors
            label='Colores'
            name='colors'
            setValue={setValue}
          />

          <RangeField
            id='limitPrice'
            label='Limite de precio'
            name='limitPrice'
            max={20000}
            min={0}
            step={1000}
            register={register}
          />

          <div className='form-check mt-3'>
            <label className='form-check-label'>
              <input
                className='form-check-input'
                type='checkbox'
                {...register('inOffer')}
              />
              ¿En oferta?
            </label>
          </div>

          <Button
            loading={isLoading}
            loadingMessage='Buscando...'
            styles='w-100 btn-primary mt-2'
          >
            Buscar
          </Button>
        </form>
      </article>
    </div>
  )
}

export default SearchForm
