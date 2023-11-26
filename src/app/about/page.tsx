import Header from '@/components/nav/Header'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <Header activeItem={1} />
      <div>About Us - active Item index 1</div>
    </>
  )
}

export default About
