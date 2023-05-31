import * as z from 'zod'

export const loginValidation = z.object({
  email: z
    .string({ required_error: 'El correo electrónico es requerido' })
    .email({ message: 'Correo electrónico invalido' }),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .min(1, { message: 'La contraseña es requerida' })
})
