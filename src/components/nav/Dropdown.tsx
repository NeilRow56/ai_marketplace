import { useClerk, useUser } from '@clerk/nextjs'
import { styles } from '@/utils/styles'
import { User } from '@clerk/nextjs/server'
import React from 'react'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import Link from 'next/link'
import { GrDocumentStore } from 'react-icons/gr'
import { AiOutlineLogout } from 'react-icons/ai'
import { TbSwitchVertical } from 'react-icons/tb'
import { useRouter } from 'next/navigation'

type Props = {
  setOpen: (open: boolean) => void
  handleProfile: () => void
  isSellerExist?: boolean
}

const DropDown = ({ setOpen, handleProfile, isSellerExist }: Props) => {
  const { signOut } = useClerk()
  const router = useRouter()
  const handleLogOut = async () => {
    await signOut()
    router.push('/sign-in')
  }
  const { isLoaded, user } = useUser()
  return (
    <Dropdown placeholder="bottom-start" className="bg-white">
      <DropdownTrigger>
        <Avatar
          src={user?.imageUrl}
          alt=""
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          onClick={() => {
            handleProfile()
            setOpen(false)
          }}
        >
          <div className="flex w-full items-center">
            <Avatar
              src={user?.imageUrl}
              alt=""
              className="h-[30px] w-[30px] cursor-pointer"
            />
            <span className={`${styles.label} pl-2 text-[16px] text-black`}>
              My Profile
            </span>
          </div>
        </DropdownItem>
        <DropdownItem>
          <Link href={'/my-orders'} className="flex w-full items-center">
            <GrDocumentStore className="ml-2 text-[22px] text-black" />
            <span className={`${styles.label} pl-2 text-[16px] text-black`}>
              My Orders
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem className={`${!isSellerExist && 'hidden'}`}>
          <Link href={'/my-shop'} className="flex w-full items-center">
            <TbSwitchVertical className="ml-2 text-2xl text-black" />
            <span className={`${styles.label} pl-2 text-[16px] text-black`}>
              Switching to Seller
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem onClick={handleLogOut}>
          <div className="flex w-full items-center">
            <AiOutlineLogout className="ml-2 text-2xl text-black" />
            <span className={`${styles.label} pl-2 text-[16px] text-black`}>
              Log out
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDown
