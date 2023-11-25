import Header from '@/components/Header'
import PromptCard from '@/components/prompts/PromptCard'
import About from '@/components/route/About'
import Hero from '@/components/route/Hero'
import { styles } from '@/utils/styles'
import Image from 'next/image'

export default function Home() {
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
          <h1 className={`${styles.heading} font-montserrat p-2`}>
            Latest Prompts
          </h1>
          <div className="mt-5 flex w-full flex-wrap">
            <PromptCard />
          </div>
        </div>
      </div>
    </div>
  )
}
