'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Navigation from './nav/Navigation'

type Props = {
  activeItem: number
}

const Header = ({ activeItem }: Props) => {
  const [active, setActive] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }
  return (
    <div
      className={` min-h-[60px] w-full border-b border-b-[#ffffff32] p-5 transition-opacity ${
        active && 'top-o fixed left-0 z-[99] bg-[#000000]'
      }`}
    >
      <div className="mx-auto hidden items-center justify-between md:flex md:w-[90%]">
        <div>
          <Link href={'/'}>
            <h1 className=" font-Inter cursor-pointer text-3xl">
              <span className="text-[#64ff4C]">Bec</span>odemy
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
      </div>
    </div>
  )
}

export default Header
