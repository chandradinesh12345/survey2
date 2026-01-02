import React from 'react'
import { Hero } from '../components/Hero'
import { StatsCounter } from '../components/StatsCounter'
import { HowItWorks } from '../components/HowItWorks'
import { CashoutMethods } from '../components/CashoutMethods'
import { WhyChoose } from '../components/WhyChoose'
import { CTASection } from '../components/CTASection'   

export const Home = () => {
  return (
    <>
        <Hero />
        <StatsCounter />
        <HowItWorks />
        <CashoutMethods />
        <WhyChoose  />
        <CTASection />
    </>
  )
}
