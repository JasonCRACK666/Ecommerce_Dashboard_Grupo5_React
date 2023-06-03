import { activateAccount } from '../services/authService'

export const useActivateUserAccount = ({ params }) => {
  const { activationCode } = params

  return activateAccount(activationCode)
    .then(res => ({ message: res.message, isError: false }))
    .catch(err => ({ message: err.response.data.message, isError: true }))
}
