import * as z from 'zod'

export const StartSellingValidation = z.object({
  name: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(30, { message: 'Maximum 30 caracters.' }),
  description: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(30, { message: 'Maximum 30 caracters.' }),
  shopProductsType: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(1000, { message: 'Maximum 1000 caracters.' }),
  avatar: z
    .string()
    .min(0, { message: 'Minimum 0 character.' })
    .max(10000, { message: 'Maximum 10000 caracters.' }),
})

export type TStartSellingValidation = z.infer<typeof StartSellingValidation>
