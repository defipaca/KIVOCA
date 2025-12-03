import HeroSection from '@/components/HeroSection'
import PropertyGrid from '@/components/PropertyGrid'
import AboutSection from '@/components/AboutSection'
import WaitlistForm from '@/components/WaitlistForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PropertyGrid />
      <AboutSection />
      <WaitlistForm />
      <Footer />
    </main>
  )
}

