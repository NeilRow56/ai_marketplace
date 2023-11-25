import Header from '@/components/Header'
import Hero from '@/components/route/Hero'

export default function Home() {
  return (
    <div>
      <div className="banner">
        <Header activeItem={0} />
        <Hero />
      </div>
    </div>
  )
}
