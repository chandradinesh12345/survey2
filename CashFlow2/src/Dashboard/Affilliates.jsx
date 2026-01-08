import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Copy, Users, ChartNoAxesCombined, Wallet } from 'lucide-react'

export const Affilliates = () => {
  return (
    <>
        <Header />
            <div className='mt-22 mb-12 max-w-5xl mx-auto px-4'>
                {/* REFERRAL */}
                <div className="bg-[#0b1220] text-white border border-white/10 rounded-3xl p-6 space-y-5">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Users size={18} className="text-cyan-400" />
                    Referral Program
                    </h3>

                    <p className="text-gray-400 text-sm">
                    Earn 10% of your friends' lifetime earnings when they sign up using your link!
                    </p>

                    <div>
                    <p className="text-sm text-gray-400 mb-1">Your Referral Code</p>
                    <input
                        readOnly
                        value="JOHN2025"
                        className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-2"
                    />
                    </div>

                    <div>
                    <p className="text-sm text-gray-400 mb-1">Referral Link</p>
                    <div className="flex gap-2">
                        <input
                        readOnly
                        value="https://cashflow.app/ref/JOHN2025"
                        className="flex-1 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-2"
                        />
                        <button className="px-3 cursor-pointer rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition">
                        <Copy size={18} />
                        </button>
                    </div>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl px-4 py-3 text-sm">
                    You've earned $124.75 from referrals!
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="group bg-[#0b1220] rounded-2xl p-6 border border-white/10 
                        hover:border-green-400/40 hover:-translate-y-2 transition-all duration-300">
                        
                        <div className="flex items-center gap-4">
                        <div className="bg-green-500/20 p-3 rounded-xl group-hover:scale-110 transition">
                            <Users className="text-green-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Invited Friends</p>
                            <h2 className="text-green-400 text-2xl font-semibold">0</h2>
                        </div>
                        </div>
                    </div>

                    {/* MONTHLY */}
                    <div className="group bg-[#0b1220] rounded-2xl p-6 border border-white/10 
                        hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300">
                        
                        <div className="flex items-center gap-4">
                        <div className="bg-purple-500/20 p-3 rounded-xl group-hover:scale-110 transition">
                            <ChartNoAxesCombined className="text-purple-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Referral Earnings</p>
                            <h2 className="text-white text-2xl font-semibold">$00.00</h2>
                        </div>
                        </div>

                    </div>

                    {/* MONTHLY */}
                    <div className="group bg-[#0b1220] rounded-2xl p-6 border border-white/10 
                        hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">
                        
                        <div className="flex items-center gap-4">
                        <div className="bg-cyan-500/20 p-3 rounded-xl group-hover:scale-110 transition">
                            <Wallet className="text-cyan-400 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Withdrawal</p>
                            <h2 className="text-white text-2xl font-semibold">$00.00</h2>
                        </div>
                        </div>
                    </div>
                </div>
                
                <h4 className='text-lg font-semibold text-white mb-[10px]'>Your Refferals</h4>
                <div className="rounded-2xl border border-white/10 bg-[#0b1220]/80 backdrop-blur overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                    <thead>
                        <tr className="text-gray-400 text-sm border-b border-white/10">
                        <th className="text-left px-6 py-4">Username</th>
                        <th className="text-left px-6 py-4">Friend Earnings</th>
                        <th className="text-right px-6 py-4">Reward</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition">
                            <td className="px-6 py-5 text-white font-medium">
                                Amit Kumar
                            </td>
                            <td className="px-6 py-5 text-gray-400">
                                $ 10.00
                            </td>
                            <td className="px-6 py-5 text-right font-semibold text-green-400">
                                300 Points
                            </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition">
                            <td className="px-6 py-5 text-white font-medium">
                                Amit Kumar
                            </td>
                            <td className="px-6 py-5 text-gray-400">
                                $ 10.00
                            </td>
                            <td className="px-6 py-5 text-right font-semibold text-green-400">
                                300 Points
                            </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition">
                            <td className="px-6 py-5 text-white font-medium">
                                Amit Kumar
                            </td>
                            <td className="px-6 py-5 text-gray-400">
                                $ 10.00
                            </td>
                            <td className="px-6 py-5 text-right font-semibold text-green-400">
                                300 Points
                            </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition">
                            <td className="px-6 py-5 text-white font-medium">
                                Amit Kumar
                            </td>
                            <td className="px-6 py-5 text-gray-400">
                                $ 10.00
                            </td>
                            <td className="px-6 py-5 text-right font-semibold text-green-400">
                                300 Points
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>

            

        <Footer />

    </>
  )
}
