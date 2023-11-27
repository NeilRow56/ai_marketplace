import Header from '@/components/nav/Header'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="banner">
        <Header activeItem={5} />
      </div>
    </div>
  )
}

export default Dashboard
