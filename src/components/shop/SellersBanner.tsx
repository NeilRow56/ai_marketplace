'use client'
import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const SellersBanner = (props: Props) => {
  const router = useRouter()

  return (
    <div className="sellers-banner flex h-[30vh] w-full items-center justify-center rounded-xl md:m-2 2xl:m-auto 2xl:w-[80%]">
      <div className="text-center">
        <h1 className={`${styles.heading} font-montserrat !text-indigo-950`}>
          Start selling with us
        </h1>
        <br />
        <br />
        <Button
          className="font-Inter mb-3 rounded-md bg-black p-6 text-xl text-white"
          onClick={() => router.push('/create-shop')}
        >
          <span>Get Started</span>
        </Button>
      </div>
    </div>
  )
}

export default SellersBanner
