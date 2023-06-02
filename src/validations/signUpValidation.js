import * as z from 'zod'

export const signUpValidation = z.object({
  username: z
    .string({ required_error: 'El nombre de usuario es requerido' })
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' }),
  firstName: z
    .string({ required_error: 'Su nombre/s es requerido/s' })
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' }),
  lastName: z
    .string({ required_error: 'Sus apellidos son requeridos' })
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' }),
  email: z
    .string({ required_error: 'El correo electrónico es requerido' })
    .email({ message: 'El correo electrónico es invalido' }),
  dni: z
    .number({
      required_error: 'Su DNI es requerido',
      invalid_type_error: 'El DNI es requerido'
    })
    .int({ message: 'Es un número entero' })
    .positive({ message: 'Es un número positivo' })
    .gte(10000000, { message: 'El DNI es de 8 dígitos' })
    .lte(99999999, { message: 'El DNI es de 8 dígitos' }),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .regex(
      /^(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[^\s]{8,}$/,
      {
        message:
          'La contraseña require mínimo: 1 minúscula, 1 mayúscula, 1 carácter especial y 1 número'
      }
    )
    .min(1, { message: 'La contraseña es requerida' })
    .max(15, { message: 'Máximo 15 caracteres' })
})
