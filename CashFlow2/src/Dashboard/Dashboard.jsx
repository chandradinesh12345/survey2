import React from 'react'
import { ThreeCard } from './ThreeCard'
import { FeaturedOffers } from './FeaturedOffers'
import { Offerwalls } from './Offerwalls'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Dashboard = () => {
  return (
    <>
        <Header />
        <ThreeCard />
        <FeaturedOffers />
        <Offerwalls />
        <Footer />
    </>
  )
}
