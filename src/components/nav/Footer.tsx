'use client'
import { styles } from '@/utils/styles'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="mb-5 flex w-full items-center justify-between">
        <div>
          <Link href={'/'}>
            <h1 className="font-Inter cursor-pointer text-3xl">
              <span className="text-[#64ff4c]">Bec</span>odemy
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex flex-wrap items-center">
            <li>
              <Link
                href="/"
                className={`${styles.label} px-4 transition duration-200 hover:text-[#64ff4b]`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className={`${styles.label} px-4 transition duration-200 hover:text-[#64ff4b]`}
              >
                MarketPlace
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${styles.label} px-4 transition duration-200 hover:text-[#64ff4b]`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={`${styles.paragraph} text-center`}>
        Copyright © 2023 Becodemy . All Rights Reserved
      </p>
      <br />
      <br />
    </div>
  )
}

export default Footer
