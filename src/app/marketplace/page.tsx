import Header from '@/components/nav/Header'
import React from 'react'

type Props = {}

const Marketplace = (props: Props) => {
  return (
    <>
      <Header activeItem={2} />
      <div>Marketplace - active Item index 2</div>
    </>
  )
}

export default Marketplace
