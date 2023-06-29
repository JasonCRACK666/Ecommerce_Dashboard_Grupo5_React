import * as z from 'zod'

export const createReviewValidation = z.object({
  score: z
    .string()
    .length(1)
    .transform(value => Number(value))
    .pipe(z.number().positive().int().lte(5, { message: 'Máximo 5 puntos' })),
  comment: z
    .string()
    .min(5, { message: 'Mínimo 5 caracteres' })
    .max(250, { message: 'Máximo 250 caracteres' })
    .or(
      z
        .string()
        .length(0)
        .transform(() => null)
    )
    .nullish()
})
