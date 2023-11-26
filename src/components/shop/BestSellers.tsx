'use client'

import { styles } from '@/utils/styles'
import React, { useState } from 'react'
import SellerCard from './SellerCard'

type Props = {}

const BestSellers = (props: Props) => {
  const [loading, setloading] = useState(true)
  return (
    <div className="mb-10 cursor-pointer">
      <h1 className={`${styles.heading} mb-5 p-2 font-montserrat`}>
        Top Sellers
      </h1>
      <div className="flex flex-wrap">
        <SellerCard loading={loading} />
        <SellerCard loading={loading} />
        <SellerCard loading={loading} />
        <SellerCard loading={loading} />
      </div>
    </div>
  )
}

export default BestSellers
