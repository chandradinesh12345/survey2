import React from 'react'
import { Header } from '../components/Header'
import {
  Crown,
  Medal,
  Award,
  Gift,
  Trophy,
  Star,
} from "lucide-react";

export const Leaderboard = () => {
  return (
    <>
        <Header />
        <section className="py-16 mt-[50px] bg-gradient-to-b from-[#070b14] to-[#02050a] text-white">
            <div className="max-w-5xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-600/20 text-purple-400 text-sm mb-4">
                    🏆 Leaderboard
                </span>

                <h2 className="text-3xl font-bold">
                    Top Earners Compete for Prizes
                </h2>
                <p className="text-gray-400 mt-2">
                    Climb the ranks and win bonus rewards every week and month
                </p>
                </div>

                {/* PRIZE CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                    { icon: Crown, label: "1st Place", prize: "$100 Bonus", color: "cyan" },
                    { icon: Trophy, label: "2nd Place", prize: "$50 Bonus", color: "blue" },
                    { icon: Medal, label: "3rd Place", prize: "$25 Bonus", color: "warning" },
                    { icon: Gift, label: "Top 10", prize: "$10 Bonus", color: "green" },
                ].map((item, i) => (
                    <div
                    key={i}
                    className="bg-[#0b1220] rounded-2xl p-5 text-center
                    border border-white/10
                    hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(56,189,248,0.45)]
                    transition-all duration-300"
                    >
                    <div
                        className={`w-12 h-12 mx-auto rounded-xl bg-${item.color}-500/20
                        flex items-center justify-center mb-3`}
                    >
                        <item.icon className={`text-${item.color}-400`} />
                    </div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-green-400 font-semibold">{item.prize}</p>
                    </div>
                ))}
                </div>

                {/* YOUR RANK */}
                <div
                className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10
                rounded-2xl p-5 flex items-center justify-between
                border border-cyan-400/20 mb-10
                hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
                transition"
                >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                    🙂
                    </div>
                    <div>
                    <p className="font-semibold">Your Rank</p>
                    <p className="text-gray-400 text-sm">
                        Keep earning to climb higher!
                    </p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-2xl font-bold text-cyan-400">#47</p>
                    <p className="text-gray-400 text-sm">$127.50 this month</p>
                </div>
                </div>

                {/* MONTHLY RANKINGS */}
                <div className="bg-[#0b1220] rounded-2xl p-5 border border-white/10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg">Monthly Rankings</h3>
                    <span className="text-sm text-gray-400">December 2025</span>
                </div>

                {[
                    { rank: 1, name: "CashKing99", amount: "$2847.50", icon: Crown },
                    { rank: 2, name: "MoneyMaker22", amount: "$2156.25", icon: Trophy },
                    { rank: 3, name: "RewardPro", amount: "$1893.00", icon: Medal },
                    { rank: 4, name: "TaskMaster", amount: "$1654.75", icon: Star },
                    { rank: 5, name: "EarnDaily", amount: "$1432.50", icon: Award },
                ].map((user, i) => (
                    <div
                    key={i}
                    className="flex items-center justify-between py-4
                    border-b border-white/5 last:border-0
                    hover:bg-white/5 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
                    transition rounded-xl px-3"
                    >
                    <div className="flex items-center gap-3">
                        <span className="w-8 text-gray-400">#{user.rank}</span>
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        <user.icon className="w-4 h-4 text-yellow-400" />
                        </div>
                        <p className="font-medium">{user.name}</p>
                    </div>

                    <div className="text-right">
                        <p className="text-green-400 font-semibold">
                        {user.amount}
                        </p>
                        <p className="text-xs text-gray-400">+12%</p>
                    </div>
                    </div>
                ))}
                </div>

            </div>
            </section>
    </>
  )
}
