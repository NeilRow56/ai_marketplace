'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'

import { Image } from '@nextui-org/react'

type Props = {}

const rowOneImages = [
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/large-slider/one.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/large-slider/two.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/large-slider/three.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/large-slider/four.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/large-slider/five.png',
  },
]

const rowTwoImages = [
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/small-slider/one.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/small-slider/two.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/small-slider/three.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/small-slider/four.png',
  },
  {
    url: 'https://pixner.net/aikeu/assets/images/banner/small-slider/five.png',
  },
]

const Hero = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-center md:min-h-screen">
      <div>
        <h1 className="py-5 text-center font-Montserrat text-4xl font-[700] sm:mt-20 xl:text-7xl xl:leading-[80px] 2xl:text-8xl 2xl:leading-[100px]">
          Make <span className="text-[#64ff4b]">AI Image</span> <br />
          With your <br />
          Imagination
        </h1>
        <div className="md:mt-5">
          <Image
            src="../../../line.png"
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        <div className="relative mb-5 flex w-full md:mb-20">
          <div className="mt-10 rotate-[-4deg] md:mt-[6.5rem]">
            <Marquee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="m-2 w-[200px] rounded-[20px] md:m-4 md:w-[500px]"
                  width={500}
                  height={300}
                />
              ))}
            </Marquee>
            <Marquee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="m-2 w-[200px] rounded-[20px] md:m-4 md:w-[500px]"
                  width={500}
                  height={300}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
