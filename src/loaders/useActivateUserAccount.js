import { activateAccount } from '../services/authService'

export const useActivateUserAccount = async ({ params }) => {
  const { activationCode } = params

  try {
    const res = await activateAccount(activationCode)

    return {
      message: res.message,
      isError: false
    }
  } catch (err) {
    return { message: err.message.data.message, isError: true }
  }
}
