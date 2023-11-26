'use client'
import { styles } from '@/utils/styles'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

type Props = {}

const partners = [
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/one.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/two.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/three.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/four.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/five.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/one.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/two.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/three.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/four.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/partner/five.png',
  },
]

const Partners = (props: Props) => {
  return (
    <div className="py-10">
      <h1 className={`${styles.heading} text-center font-montserrat`}>
        Our Partner&apos;s
      </h1>
      <div className="flex w-full justify-center pt-3">
        <div className="h-[2px] w-[50px] bg-[#64ff4b]" />
      </div>
      <Marquee className="my-10 w-full">
        {partners.map((i, index) => (
          <Image
            src={i.url}
            alt=""
            width={100}
            height={100}
            key={index}
            className="mx-14 h-[120px] w-[120px] cursor-pointer object-contain grayscale-[100%] transition-opacity hover:grayscale-0"
          />
        ))}
      </Marquee>
    </div>
  )
}

export default Partners
