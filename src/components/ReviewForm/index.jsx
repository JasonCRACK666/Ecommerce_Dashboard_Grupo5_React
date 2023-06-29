import { useAuthStore } from '../../store/useAuthStore'
import { useAlertsStore } from '../../store/useAlertsStore'

import { useMutation } from '@tanstack/react-query'

import { createReview } from '../../services/reviewService'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { createReviewValidation } from '../../validations/createReviewValidation'

import SimpleSelectField from '../SimpleSelectField'
import TextareaField from '../TextareaField'
import Button from '../Button'

import { SCORE_OPTIONS } from '../../utils/constants'

import imgAvatarDefault from '../../assets/default-avatar.jpg'

const ReviewForm = ({ productId }) => {
  const { isAuth, user } = useAuthStore()
  const { setAlert } = useAlertsStore()

  const avatar = isAuth ? user.avatar : imgAvatarDefault

  const createReviewMutation = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      setAlert({
        message: 'Se ha publicado tu reseña correctamente',
        timeout: 5000,
        type: 'success'
      })
    },
    onError: error => {
      setAlert({
        message: error.response.data.message ?? error.message,
        timeout: 5000,
        type: 'danger'
      })
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createReviewValidation)
  })

  const handleSubmitCreateReview = productId =>
    handleSubmit(reviewData => {
      createReviewMutation.mutate({ productId, reviewData })
    })

  return (
    <div className='row'>
      <div className='col-xs-2 col-1'>
        <img
          src={avatar ?? imgAvatarDefault}
          className='rounded-circle w-100'
          style={{ aspectRatio: 1 / 1 }}
        />
      </div>
      <form
        className='col-xs-10 col-11'
        onSubmit={handleSubmitCreateReview(productId)}
      >
        <SimpleSelectField
          id='rating'
          label='Calificación'
          name='score'
          register={register}
          error={errors.score}
          options={SCORE_OPTIONS}
        />

        <TextareaField
          id='comment'
          error={errors.comment}
          label='Comentario'
          name='comment'
          register={register}
        />

        <Button
          loading={createReviewMutation.isLoading}
          loadingMessage='Publicando...'
          className='btn-primary'
        >
          Publicar
        </Button>
      </form>
    </div>
  )
}

export default ReviewForm
