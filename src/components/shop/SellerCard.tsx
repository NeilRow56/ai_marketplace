import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Avatar, Card, Skeleton } from '@nextui-org/react'
import React from 'react'

type Props = {
  item?: any
  loading: boolean
}

const SellerCard = ({ item, loading }: Props) => {
  return (
    <Card className="m-3 flex w-full flex-col items-center border border-[#ffffff22] bg-[#100d21] py-4 text-white md:w-[31%] 2xl:w-[23%]">
      {/* <>
        <Skeleton className="h-[80px] w-[80px] rounded-full" />
        <br />
        <Skeleton className="h-[20px] w-[90%] rounded-xl" />
        <br />
        <Skeleton className="h-[20px] w-[90%] rounded-xl" />
      </> */}

      <>
        <Avatar
          src="https://pixner.net/aikeu/assets/images/blog-details/a-one.png"
          className="h-[80px] w-[80px]"
        />
        <span className={`${styles.label} py-2 text-xl`}>@ShopName</span>
        <div className="flex items-center">
          <span className={`${styles.label} pr-2`}>4/5</span>
          <Ratings rating={4.5} />
        </div>
        <span className={`${styles.label} py-2`}>Total Sales: 45</span>
      </>
    </Card>
  )
}

export default SellerCard
