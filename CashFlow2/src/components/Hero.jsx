import React from 'react'
import { ClipboardList, Wallet, DollarSign, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';


export const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="phone_view_font text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Get <span className="text-green-500">paid</span> for testing
              <br /> apps, games & surveys
            </h1>

            <p className="text-lg text-gray-400 mb-8">
              Earn up to <span className="text-green-500 font-semibold">$3,000</span> per offer •{" "}
              <span className="text-blue-400">10,000+</span> offers available now
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Feature
                icon={<ClipboardList className="w-4 h-4" />}
                title="Surveys"
                text="Share opinions, earn rewards"
              />
              <Feature
                icon={<Wallet className="w-4 h-4" />}
                title="Offers"
                text="Complete tasks for cash"
              />
              <Feature
                icon={<DollarSign className="w-4 h-4" />}
                title="Fast Payouts"
                text="Withdraw instantly"
              />
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Signup" className="h-12 px-8 rounded-xl bg-green-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition">
                Start Earning Now <ArrowRight className="w-4 h-4" />
              </Link>

              <button className="h-12 px-8 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition">
                Learn More
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              No fees • No commitments • Cash out anytime
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#0b1225] border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-2">
              Sign Up for Free
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Join thousands earning money online
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full h-12 px-4 rounded-lg bg-[#060b18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />

            <button className="w-full h-12 mt-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-600 transition">
              Start earning now
            </button>

            {/* OR */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0b1225] px-2 text-gray-400">OR</span>
              </div>
            </div>

            {/* GOOGLE */}
            <button className="w-full h-12 rounded-xl border border-white/20 text-white font-semibold flex items-center justify-center gap-3 hover:bg-white/5 transition">
              <span className="text-lg font-bold">G</span>
              Sign Up with Google
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
              <span className="text-green-500 font-medium">93,000+</span>{" "}
              sign ups in the past 24 hours
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0b1225]/80 border border-white/10">
      <span className="text-green-500">{icon}</span>
      <div className="text-sm">
        <span className="font-medium text-white">{title}</span>
        <span className="text-gray-400 ml-1 hidden sm:inline">
          • {text}
        </span>
      </div>
    </div>
  );
}
