import Link from 'next/link'
import React from 'react'

type Props = {
  activeItem: number
}

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
  {
    title: 'Policy',
    href: '/policy',
  },
]

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-0 ">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`xl-px-8 font-Inter inline-block py-5 text-[18px] font-[500] md:px-4 md:py-0 ${
              activeItem === index && 'text-[#6dff4b]'
            }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  )
}

export default Navigation
