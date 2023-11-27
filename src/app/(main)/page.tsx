import Header from '@/components/nav/Header'
import Footer from '@/components/nav/Footer'
import PromptCard from '@/components/prompts/PromptCard'
import About from '@/components/route/About'
import Future from '@/components/route/Future'
import Hero from '@/components/route/Hero'
import Partners from '@/components/route/Partners'
import BestSellers from '@/components/shop/BestSellers'
import SellersBanner from '@/components/shop/SellersBanner'
import { styles } from '@/utils/styles'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function Home() {
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId } = auth()

  if (userId) {
    // Query DB for user specific information or display assets only to logged in users
    redirect('/dashboard')
  }

  // Get the User object when you need access to the user's information

  // Use `user` to render user details or create UI elements
  return (
    <div className="">
      <div className="banner">
        <Header activeItem={0} />
        <Hero />
      </div>
      <Image
        src={'https://pixner.net/aikeu/assets/images/footer/shape-two.png'}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="m-auto w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%]">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 font-montserrat`}>
            Latest Prompts
          </h1>
          <div className="mt-5 flex w-full flex-wrap">
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
          <br />
          <BestSellers />
          <Future />
          <Partners />
          <SellersBanner />
          <br />
          <br />
          <Divider />
          <Footer />
        </div>
      </div>
    </div>
  )
}
