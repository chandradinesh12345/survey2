import React from 'react'
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b1225] border border-white/10">

          {/* subtle gradient circles (right side like image) */}
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500/10 blur-2xl" />

          <div className="relative z-10 px-10 py-16 md:px-16 md:py-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Earning?
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Join thousands of users who are already earning money online.
              Sign up is free and takes less than 30 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Primary Button */}
              <button className="group flex items-center justify-between gap-6 bg-green-500 text-black px-8 py-4 rounded-xl font-semibold w-full sm:w-auto hover:scale-[1.03] transition">
                Create Free Account
                <ArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
