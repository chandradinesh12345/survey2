import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { StatsCounter } from './components/StatsCounter'
import { HowItWorks } from './components/HowItWorks'
import { CashoutMethods } from './components/CashoutMethods'
import { WhyChoose } from './WhyChoose'
import { CTASection } from './CTASection'
import { Footer } from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Header />
      <Hero />
      <StatsCounter />
      <HowItWorks />
      <CashoutMethods />
      <WhyChoose  />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
