import React from 'react'
import { Wallet, TrendingUp, Calendar } from "lucide-react";

export const ThreeCard = () => {
  return (
    <>
        <section className='mt-[100px]'>
            <div className='container mx-auto px-4'>
                <h4 className='text-2xl md:text-3xl font-[600] text-white mb-2'>Welcome back, John! 👋</h4>
                <p className='text-muted-foreground text-gray-400'>You're doing great! Keep completing offers to reach your goals.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      
                    {/* BALANCE CARD */}
                    <div className="group bg-[#0b1220] rounded-2xl p-6 border border-white/10 
                        hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">
                        
                        <div className="flex items-center gap-4">
                        <div className="bg-cyan-500/20 p-3 rounded-xl group-hover:scale-110 transition">
                            <Wallet className="text-cyan-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Current Balance</p>
                            <h2 className="text-white text-2xl font-semibold">$127.50</h2>
                        </div>
                        </div>

                        <button
                        className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-teal-400
                        text-black font-semibold py-3 rounded-xl
                        hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/30
                        transition-all"
                        >
                        Cash Out →
                        </button>
                    </div>

                    {/* TODAY EARNINGS */}
                    <div className="group bg-[#0b1220] rounded-2xl p-6 border border-white/10 
                        hover:border-green-400/40 hover:-translate-y-2 transition-all duration-300">
                        
                        <div className="flex items-center gap-4">
                        <div className="bg-green-500/20 p-3 rounded-xl group-hover:scale-110 transition">
                            <TrendingUp className="text-green-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Today's Earnings</p>
                            <h2 className="text-green-400 text-2xl font-semibold">$12.75</h2>
                        </div>
                        </div>

                        <p className="text-gray-400 text-sm mt-4">+15% vs yesterday</p>
                    </div>

                    {/* MONTHLY */}
                    <div className="group bg-[#0b1220] rounded-2xl p-6 border border-white/10 
                        hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300">
                        
                        <div className="flex items-center gap-4">
                        <div className="bg-purple-500/20 p-3 rounded-xl group-hover:scale-110 transition">
                            <Calendar className="text-purple-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">This Month</p>
                            <h2 className="text-white text-2xl font-semibold">$342.25</h2>
                        </div>
                        </div>

                        <p className="text-gray-400 text-sm mt-4">December 2025</p>
                    </div>

                    </div>
            </div>
        </section>
    </>
  )
}
