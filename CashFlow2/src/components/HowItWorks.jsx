import React from 'react'
import { Search, MousePointerClick, Wallet } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#070c1a]">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Earning with our platform is simple and straightforward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="relative bg-[#0b1225] border border-white/10 rounded-2xl p-8">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm text-gray-300">
              1
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
              <Search className="text-green-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              Browse Available Offers
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Find surveys, trials, and tasks that match your interests.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#0b1225] border border-white/10 rounded-2xl p-8">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm text-gray-300">
              2
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
              <MousePointerClick className="text-green-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              Complete Activities
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Participate in surveys, try new services, or complete simple tasks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#0b1225] border border-white/10 rounded-2xl p-8">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm text-gray-300">
              3
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
              <Wallet className="text-green-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              Get Paid
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Earn real money that you can withdraw via PayPal, crypto, or gift cards.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
