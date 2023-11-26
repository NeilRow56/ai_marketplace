import Header from '@/components/nav/Header'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <>
      <Header activeItem={3} />
      <div>Contact Us - active Item index 3</div>
    </>
  )
}

export default Contact
