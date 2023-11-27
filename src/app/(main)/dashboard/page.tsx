import Header from '@/components/nav/Header'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="banner">
        <Header activeItem={5} isSellerExist />
        <div className="flex w-full items-center justify-center bg-green-500 pt-8 text-center">
          <h2>Dashboard Page</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
