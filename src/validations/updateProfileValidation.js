import * as z from 'zod'

export const updateProfileValidation = z.object({
  banner: z
    .custom(value => value.size, { message: 'Debe ser una imagen' })
    .or(z.any().transform(() => null))
    .nullish(),
  avatar: z
    .custom(value => value.size, { message: 'Debe ser una imagen' })
    .or(z.any().transform(() => null))
    .nullish(),
  username: z
    .string()
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' })
    .nullish(),
  firstName: z
    .string()
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' })
    .nullish(),
  lastName: z
    .string()
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' })
    .nullish(),
  email: z
    .string()
    .email({ message: 'El correo electrónico es invalido' })
    .nullish(),
  about: z
    .string()
    .min(8, { message: 'Mínimo 8 caracteres' })
    .or(
      z
        .string()
        .length(0)
        .transform(() => null)
    )
    .nullish()
})
