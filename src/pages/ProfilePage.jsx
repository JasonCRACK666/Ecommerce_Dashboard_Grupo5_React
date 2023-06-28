import { useState } from 'react'

import { useAlertsStore } from '../store/useAlertsStore'

import { useQuery, useMutation } from '@tanstack/react-query'

import { getProfile, updateProfile } from '../services/accountService'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfileValidation } from '../validations/updateProfileValidation'

import EditImage from '../components/EditImage'
import TextField from '../components/TextField'
import TextareaField from '../components/TextareaField'
import Button from '../components/Button'

import { FaUserAlt } from 'react-icons/fa'

import { getAuthToken } from '../utils/getAuthToken'
import { AVATAR_DEFAULT, BANNER_DEFAULT } from '../utils/constants'

const ProfilePage = () => {
  const [profileDataInEdit, setProfileDataInEdit] = useState([])

  const { setAlert } = useAlertsStore()

  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    refetchOnWindowFocus: false
  })

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      setAlert({
        message: 'Se ha actualizado su cuenta correctamente',
        type: 'success',
        timeout: 5000
      })

      setProfileDataInEdit([])
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
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(updateProfileValidation)
  })

  const handleSubmitUpdateProfile = oldProfileData =>
    handleSubmit(newProfileData => {
      if (profileDataInEdit.length === 0) return

      const profileFormData = new FormData()

      if (newProfileData.avatar)
        profileFormData.append('avatar', newProfileData.avatar)

      if (newProfileData.banner)
        profileFormData.append('banner', newProfileData.banner)

      if (newProfileData.username !== oldProfileData.username)
        profileFormData.append('username', newProfileData.username)

      if (newProfileData.firstName !== oldProfileData.firstName)
        profileFormData.append('firstName', newProfileData.firstName)

      if (newProfileData.lastName !== oldProfileData.lastName)
        profileFormData.append('lastName', newProfileData.lastName)

      if (newProfileData.email !== oldProfileData.email)
        profileFormData.append('email', newProfileData.email)

      if (newProfileData.about !== oldProfileData.about)
        profileFormData.append('about', newProfileData.about)

      updateProfileMutation.mutate({
        profileId: oldProfileData.id,
        profileFormData,
        token: getAuthToken()
      })
    })

  const handleChangeProfileData = value => e => {
    if (e.target.value !== value) {
      if (!profileDataInEdit.includes(e.target.name))
        setProfileDataInEdit(prevValues => [...prevValues, e.target.name])

      return
    }

    if (profileDataInEdit.includes(e.target.name))
      setProfileDataInEdit(prevValues =>
        prevValues.filter(prevValue => prevValue !== e.target.name)
      )
  }

  return (
    <div>
      <div className='d-flex gap-2 align-items-center mb-2'>
        <FaUserAlt className='fs-1' />
        <h1>Perfil</h1>
      </div>
      <div className='card'>
        {profileQuery.isLoading ? (
          <>
            <div className='d-flex justify-content-center'>
              <div
                className='spinner-border spinner-border-sm'
                style={{ width: '3rem', height: '3rem' }}
                role='status'
              >
                <span className='visually-hidden'>Loading...</span>
              </div>
            </div>
          </>
        ) : profileQuery.error ? (
          <div className='text-danger'>
            {profileQuery.error.response.data.message}
          </div>
        ) : profileQuery.data ? (
          <form onSubmit={handleSubmitUpdateProfile(profileQuery.data)}>
            <EditImage
              className='card-img-top object-fit-cover'
              styleImg={{ height: '200px', objectPosition: 'bottom' }}
              name='banner'
              register={register}
              setValue={setValue}
              defaultValue={profileQuery.data.banner ?? BANNER_DEFAULT}
              setDataInEdit={setProfileDataInEdit}
            />

            <div className='card-body'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-3'>
                    <EditImage
                      className='w-100 rounded-circle object-fit-cover'
                      styleImg={{ aspectRatio: 1 / 1 }}
                      name='avatar'
                      register={register}
                      setValue={setValue}
                      defaultValue={profileQuery.data.avatar ?? AVATAR_DEFAULT}
                      setDataInEdit={setProfileDataInEdit}
                    />
                  </div>
                  <div className='col-md-9'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <TextField
                          id='username'
                          label='Nombre de usuario'
                          defaultValue={profileQuery.data.username}
                          register={register}
                          name='username'
                          error={errors.username}
                          onChange={handleChangeProfileData(
                            profileQuery.data.username
                          )}
                        />
                        <TextField
                          id='firstName'
                          label='Nombre(s)'
                          defaultValue={profileQuery.data.firstName}
                          name='firstName'
                          register={register}
                          error={errors.firstName}
                          onChange={handleChangeProfileData(
                            profileQuery.data.firstName
                          )}
                        />
                      </div>
                      <div className='col-md-6'>
                        <TextField
                          id='email'
                          label='Correo electrónico'
                          defaultValue={profileQuery.data.email}
                          name='email'
                          register={register}
                          error={errors.email}
                          type='email'
                          onChange={handleChangeProfileData(
                            profileQuery.data.email
                          )}
                        />
                        <TextField
                          id='lastName'
                          label='Apellidos'
                          defaultValue={profileQuery.data.lastName}
                          name='lastName'
                          register={register}
                          error={errors.lastName}
                          onChange={handleChangeProfileData(
                            profileQuery.data.lastName
                          )}
                        />
                      </div>

                      <TextareaField
                        id='about'
                        label='Información'
                        defaultValue={profileQuery.data.about}
                        name='about'
                        register={register}
                        error={errors.about}
                        onChange={handleChangeProfileData(
                          profileQuery.data.about
                        )}
                      />

                      <Button
                        disabled={profileDataInEdit.length === 0}
                        loading={updateProfileMutation.isLoading}
                        loadingMessage='Actualizando...'
                        styles='btn-info mt-2'
                      >
                        Actualizar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  )
}

export default ProfilePage
