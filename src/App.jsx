import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturedWork from './components/FeaturedWork'
import Services from './components/Services'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Process from './components/Process'
import Tools from './components/Tools'
import About from './components/About'
import Categories from './components/Categories'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedWork />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Tools />
        <About />
        <Categories />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
