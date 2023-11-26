'use client'
import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Future = (props: Props) => {
  return (
    <div className="relative grid w-full p-4 py-8 md:grid-cols-2 md:p-[unset]">
      <div className="col-span-1">
        <Image
          src={'https://pixner.net/aikeu/assets/images/tools-thumb.png'}
          width={800}
          height={500}
          alt=""
          className="md:ml-[-50px] md:w-[90%] 2xl:ml-[-90px]"
        />
      </div>
      <div className="col-span-1 flex w-full items-center justify-center">
        <div className="2xl:w-[60%]">
          <Button
            className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}
          >
            Future
          </Button>
          <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
            Unleashing The Glorious Future Of Ai generated Images
          </h5>
          <p className={`${styles.paragraph} pb-5`}>
            One of the most prominent techniques in AI image generation is the
            use of Generative Adversarial Networks
          </p>
        </div>
      </div>
    </div>
  )
}

export default Future
