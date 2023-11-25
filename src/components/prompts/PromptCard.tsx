import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Avatar, Card, CardBody, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

type Props = {}

const PromptCard = (props: Props) => {
  return (
    <Card
      radius="lg"
      className="m-3 max-h-[410px] w-full bg-[#130f23] p-4 md:w-[31%] 2xl:w-[23%]"
    >
      <div className="relative">
        <Image
          src="https://pixner.net/aikeu/assets/images/category/fourteen.png"
          alt=""
          className="!max-h-[200px] w-full object-cover"
          width={300}
          height={300}
        />
        <div className="absolute bottom-2 left-2">
          <div className="flex w-max items-center rounded-xl bg-black p-[10px] text-white transition-opacity duration-300 hover:bg-[#16252] hover:text-black">
            <Image
              src="https://pixner.net/aikeu/assets/images/category/chat.png"
              width={25}
              height={25}
              alt=""
            />
            <span className={`${styles.label} pl-2 text-white`}>Chatgpt</span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between py-2">
        <h3 className={`${styles.label} text-[18px] text-white`}>
          Animal Prompts
        </h3>
        <p className={`${styles.paragraph} text-[#64ff4C] `}>£25.00</p>
      </div>
      <Divider className="my-3 bg-[#ffffff18]" />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <span className={`${styles.label} pl-3 text-[#64ff4C]`}>
            Shop name
          </span>
        </div>
        <Ratings rating={3} />
      </div>
      <br />
      <Link href={`/prompt/1`} className="w-full">
        <div
          className={`${styles.button} font-Inter mb-3 w-full border border-[#16c252] bg-transparent !px-3 !py-2 text-center font-[600] text-white transition-opacity duration-300 hover:bg-[#16c252] hover:text-black`}
        >
          Get Prompts
        </div>
      </Link>
    </Card>
  )
}

export default PromptCard
