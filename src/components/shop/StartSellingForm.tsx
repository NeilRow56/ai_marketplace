'use client'

import React, { useState } from 'react'
import { styles } from '@/utils/styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Input, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  StartSellingValidation,
  TStartSellingValidation,
} from '@/lib/validations/startSelling'

type Props = {}

const StartSellingForm = (props: Props) => {
  const { user } = useUser()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TStartSellingValidation>({
    resolver: zodResolver(StartSellingValidation),
    defaultValues: {
      name: '',
      description: '',
      shopProductsType: '',
      avatar: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof StartSellingValidation>) => {
    // Todo submit to server
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    reset()
  }

  return (
    <div className="w-full p-3">
      <h1
        className={`${styles.heading} text-center font-montserrat text-[#16c252] md:text-6xl`}
      >
        Start selling with us
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto w-full gap-2 px-3"
      >
        <div className="my-5 w-full">
          <label className={`${styles.label} mb-2 block`}>Shop Name</label>
          <Input
            {...register('name')}
            type="name"
            label="Becodemy"
            size="sm"
            variant="bordered"
          />
          {errors.name && (
            <p className="text-red-500">{`${errors.name.message}`}</p>
          )}
        </div>
        <div className="my-5 w-full">
          <label className={`${styles.label} mb-2 block`}>
            Shop Description (Max 120 letters)
          </label>
          <Input
            {...register('description')}
            type="text"
            label="lorem ipsum"
            size="sm"
            variant="bordered"
            maxLength={120}
          />
          {errors.description && (
            <p className="text-red-500">{`${errors.description.message}`}</p>
          )}
        </div>
        <div className="my-5 w-full">
          <label className={`${styles.label} mb-2 block`}>
            What you want to sell with us?
          </label>
          <Textarea
            {...register('shopProductsType')}
            variant="bordered"
            placeholder="Chatgpt,Midjoureney Prompts..."
            className="col-span-12 md:col-span-6 md:mb-0"
          />
          {errors.shopProductsType && (
            <p className="text-red-500">{`${errors.shopProductsType.message}`}</p>
          )}
          <br />
          <Button
            className="font-Inter mb-3 h-[45px] w-full border border-[#16c252] bg-transparent font-[600] text-[#16c252] transition-opacity duration-300 hover:bg-[#16c252] hover:text-black"
            type="submit"
            disabled={isSubmitting}
            disableAnimation={isSubmitting}
          >
            Create Shop
          </Button>
        </div>
      </form>
    </div>
  )
}

export default StartSellingForm
