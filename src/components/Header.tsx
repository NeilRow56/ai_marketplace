'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import Navigation from './nav/Navigation'

type Props = {
  activeItem: number
}

const Header = ({ activeItem }: Props) => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement

    if (target.id === 'screen') {
      setOpen(!open)
    }
  }
  return (
    <div
      className={` min-h-[60px] w-full border-b border-b-[#ffffff32] p-5 transition-opacity ${
        active && 'top-o fixed left-0 z-[99] bg-[#000000]'
      }`}
    >
      <div className="mx-auto hidden items-center justify-between md:flex md:w-[100%] xl:w-[90%]">
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
        <div className="xl:ml10 ml-6 flex items-center">
          <AiOutlineSearch className="mr-5 cursor-pointer text-[25px]" />
          {/* To Do - Authentication */}
          <Link href="/sign-in">
            <CgProfile size={25} className="cursor-pointer" />
          </Link>
        </div>
      </div>
      {/* To do */}
      {/* For mobile screen */}
      <div className="flex w-full items-center justify-between md:hidden">
        <div className="">
          <Link href="/">
            <h1 className=" font-Inter cursor-pointer text-3xl">
              <span className="text-[#64ff4C]">Bec</span>odemy
            </h1>
          </Link>
        </div>
        <div>
          <FaBars
            className="cursor-pointer text-2xl"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div
            className="fixed left-0 top-0 z-[99999] h-screen w-full bg-[unset] md:hidden"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed right-0 top-0 z-[9999] h-screen w-[60%] bg-black">
              <div className="mt-20 flex flex-col p-5">
                <Navigation activeItem={activeItem} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
