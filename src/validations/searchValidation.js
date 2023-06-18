import * as z from 'zod'

import { ORDER_BY_ENUM, SORT_BY_ENUM } from '../utils/constants'

export const searchValidation = z.object({
  q: z.string().nullish(),
  sortBy: z.enum(SORT_BY_ENUM).nullish(),
  order: z.enum(ORDER_BY_ENUM).nullish(),
  category: z.string().nullish(),
  brand: z.string().nullish(),
  colors: z.string().array().default([]),
  limitPrice: z.number().nonnegative().nullish(),
  inOffer: z.boolean().default(false)
})
