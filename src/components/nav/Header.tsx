'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { UserProfile, useUser } from '@clerk/nextjs'
import { FaBars } from 'react-icons/fa'
import Navigation from './Navigation'

import { RxCross1 } from 'react-icons/rx'
import DropDown from './Dropdown'

type Props = {
  activeItem: number

  isSellerExist: boolean | undefined
}

const Header = ({ activeItem, isSellerExist }: Props) => {
  const { user, isLoaded } = useUser()

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeProfile, setActiveProfile] = useState(false)

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

  const handleProfile = () => {
    setActiveProfile(!activeProfile)
  }

  return (
    <>
      <div
        className={` min-h-[60px] w-full border-b border-b-[#ffffff32] p-5 transition-opacity ${
          active && 'top-o fixed left-0 z-[99] bg-[#000]'
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
          <div className="ml-10 flex items-center">
            <AiOutlineSearch className="mr-5 cursor-pointer text-[25px]" />
            {user ? (
              <div>
                <DropDown
                  setOpen={setOpen}
                  handleProfile={handleProfile}
                  isSellerExist={isSellerExist}
                />
              </div>
            ) : (
              <Link href="/sign-in" className="flex gap-2">
                <CgProfile className="cursor-pointer text-[25px]" />
                Sign In
              </Link>
            )}
          </div>
        </div>
        {/* To do */}
        {activeProfile && (
          <div className="fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center overflow-hidden bg-[#00000068]">
            <div className="relative h-[90vh] w-min overflow-y-scroll rounded-xl bg-white shadow">
              <UserProfile />
              <RxCross1
                className="absolute right-10 top-10 cursor-pointer text-2xl text-black"
                onClick={handleProfile}
              />
            </div>
          </div>
        )}
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
                  {/* Todo */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
