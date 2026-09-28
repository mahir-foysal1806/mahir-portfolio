import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Approach />
        <About />
        <Contact />
      </main>
    </div>
  )
}
