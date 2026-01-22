import React from 'react'
import { ClipboardList, Wallet, DollarSign } from "lucide-react";



export const Hero = () => {

  return (
    <section className="relative py-16 md:py-24 overflow-hidden mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="phone_view_font text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Get <span className="text_color_brad">paid</span> for testing
              <br /> apps, games & surveys
            </h1>

            <p className="text-lg text-gray-400 mb-8">
              Earn up to <span className="text_color_brad font-semibold">$3,000</span> per offer •{" "}
              <span className="text_color_brad">10,000+</span> offers available now
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Feature
                icon={<ClipboardList className="w-4 h-4 text_color_brad" />}
                title="Surveys"
                text="Share opinions, earn rewards"
              />
              <Feature
                icon={<Wallet className="w-4 h-4 text_color_brad" />}
                title="Offers"
                text="Complete tasks for cash"
              />
              <Feature
                icon={<DollarSign className="w-4 h-4 text_color_brad" />}
                title="Fast Payouts"
                text="Withdraw instantly"
              />
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
              className="w-full h-12 px-4 rounded-lg bg-[#060b18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#12a7e2]"
            />

            <button className="w-full mt-3 group cursor-pointer mr-[10px] relative h-12 px-8 rounded-xl bg_gradient text-black font-semibold inline-flex items-center justify-center gap-2 overflow-hidden">
              
              <span className="relative z-10">Start Earning Now</span>
              {/* SHINE EFFECT */}
              <span className="absolute top-0 -left-1/2 w-1/2 h-full bg-white/40 skew-x-12 
                              group-hover:left-full transition-all duration-700"></span>
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
            <button
              className="group relative h-12 w-full px-6 rounded-xl
                        inline-flex items-center justify-center gap-3
                        border border-white/15 bg-white/[0.03]
                        text-white font-medium
                        overflow-hidden transition-all duration-300
                        hover:border-white/30
                        hover:shadow-[0_0_25px_rgba(148,163,184,0.25)] mt-3 cursor-pointer"
            >
              {/* HOVER SLIDE BACKGROUND */}
              <span
                className="absolute inset-0 -translate-x-full
                          bg-gradient-to-r from-slate-300/20 via-slate-200/30 to-slate-300/20
                          transition-transform duration-500 ease-out
                          group-hover:translate-x-0"
              />

              {/* GOOGLE ICON */}
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="relative z-10 w-5 h-5"
              />

              {/* TEXT */}
              <span className="relative z-10">
                Continue with Google
              </span>
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
              <span className="text_color_brad font-medium">93,000+</span>{" "}
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
