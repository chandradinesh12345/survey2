import React from 'react'
import { Header } from '../components/Header'
import { Gift, Ticket, CheckCircle } from "lucide-react";
import { Footer } from '../components/Footer';

export const Rewards = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-b  mt-[50px] from-[#070b14] to-[#02050a] text-white py-14">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Rewards</h1>
          <p className="text-gray-400 mt-2">
            Claim daily bonuses and redeem promo codes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* DAILY BONUS */}
          <div
            className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
            hover:-translate-y-2
            hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]
            transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Gift className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Daily Bonus</h3>
                <p className="text-gray-400 text-sm">
                  Claim $0.01 every 24 hours
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-[#0e162a] rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                <p className="font-medium">Eligibility Status</p>
              </div>
              <p className="text-gray-400 text-sm">
                You need to earn at least <span className="text-white">$1.00</span>{" "}
                in the last 30 days to claim daily bonus.
              </p>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-gray-400">
                  Your earnings (last 30 days):
                </span>
                <span className="text-green-400 font-semibold">$5.50</span>
              </div>
            </div>

            {/* Claim Box */}
            <div
              className="rounded-xl p-6 text-center
              bg-gradient-to-br from-green-500/10 to-emerald-600/10
              hover:shadow-[0_0_60px_rgba(34,197,94,0.4)]
              transition"
            >
              <p className="text-4xl font-bold text-green-400">$0.01</p>
              <p className="text-gray-400 mb-4">Ready to claim!</p>
              <button
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-400
                text-black font-semibold py-3 rounded-xl
                hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]
                transition"
              >
                🎁 Claim Daily Bonus
              </button>
            </div>
          </div>

          {/* PROMO CODE */}
          <div
            className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
            hover:-translate-y-2
            hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
            transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Ticket className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Promo Code</h3>
                <p className="text-gray-400 text-sm">
                  Redeem codes for bonus rewards
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Enter a promo code to receive bonus credits. Promo codes are shared
              on our social media channels and through special promotions.
            </p>

            <label className="text-sm mb-2 block">Enter Promo Code</label>
            <input
              type="text"
              placeholder="e.g., CASHFLOW10"
              className="w-full bg-[#070b14] border border-white/10
              rounded-xl px-4 py-3 mb-4 focus:outline-none
              focus:border-purple-400 text-gray-300"
            />

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500
              py-3 rounded-xl font-semibold text-white
              hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]
              transition"
            >
              🎟 Redeem Code
            </button>

            {/* Recent */}
            <div className="mt-6">
              <p className="font-semibold mb-3">Recent Redemptions</p>

              {[
                { code: "WELCOME50", amount: "+$0.50" },
                { code: "BONUS25", amount: "+$0.25" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3
                  border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="text-green-400 w-4 h-4" />
                    {item.code}
                  </div>
                  <span className="text-green-400 font-semibold">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
