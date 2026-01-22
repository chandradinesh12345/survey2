import React from 'react'

import { useState } from "react";
import {
  Wallet,
  CreditCard,
  Bitcoin,
  Gift,
  CheckCircle,
  Clock,
} from "lucide-react";



export const CashOut = () => {
   const [selected, setSelected] = useState("paypal");

  const getFieldLabel = () => {
    if (selected === "paypal") return "PayPal Email";
    if (selected === "upi") return "UPI ID";
    if (selected === "bitcoin") return "Bitcoin Wallet Address";
    if (selected === "amazon") return "Email Address";
  };

  const getPlaceholder = () => {
    if (selected === "paypal") return "Enter PayPal email";
    if (selected === "upi") return "example@upi";
    if (selected === "bitcoin") return "Enter BTC wallet address";
    if (selected === "amazon") return "Enter email for gift card";
  };

  return (
    <>
       
            <section className="min-h-screen mt-[50px] bg-gradient-to-b from-[#070b14] to-[#02050a] text-white py-16">
                <div className="max-w-5xl mx-auto px-4">

                    {/* HEADER */}
                    <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold]">Cash Out Your Earnings</h1>
                    <p className="text-gray-400 mt-2">
                        Choose your preferred payment method and withdraw instantly
                    </p>
                    </div>

                    {/* BALANCE */}
                    <div className="bg-[#0b1220] rounded-2xl p-8 text-center border border-white/10 mb-10">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3">
                        <Wallet className="text-cyan-400" />
                    </div>
                    <p className="text-gray-400">Available Balance</p>
                    <p className="text-4xl font-bold mt-1">$127.50</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT – TABS */}
                    <div>
                        <h3 className="font-semibold mb-4">Select Payment Method</h3>

                        <div className="space-y-4">

                        {/* PAYPAL */}
                        <div
                            onClick={() => setSelected("paypal")}
                            className={`cursor-pointer p-4 rounded-xl border transition
                            ${selected === "paypal"
                            ? "border-cyan-400 bg-cyan-500/10"
                            : "border-white/10 hover:border-white/20"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <CreditCard className="text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-cyan-400 font-medium">PayPal</p>
                                <p className="text-sm text-gray-400">
                                Min: $5 · No fees · Instant
                                </p>
                            </div>
                            </div>
                        </div>

                        {/* UPI */}
                        <div
                            onClick={() => setSelected("upi")}
                            className={`cursor-pointer p-4 rounded-xl border transition
                            ${selected === "upi"
                            ? "border-green-400 bg-green-500/10"
                            : "border-white/10 hover:border-white/20"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <Wallet className="text-green-400" />
                            </div>
                            <div>
                                <p className="text-green-400 font-medium">UPI</p>
                                <p className="text-sm text-gray-400">
                                Min: $2 · No fees · Instant
                                </p>
                            </div>
                            </div>
                        </div>

                        {/* BITCOIN */}
                        <div
                            onClick={() => setSelected("bitcoin")}
                            className={`cursor-pointer p-4 rounded-xl border transition
                            ${selected === "bitcoin"
                            ? "border-yellow-400 bg-yellow-500/10"
                            : "border-white/10 hover:border-white/20"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                <Bitcoin className="text-yellow-400" />
                            </div>
                            <div>
                                <p className="text-yellow-400 font-medium">Bitcoin</p>
                                <p className="text-sm text-gray-400">
                                Min: $10 · Fee $0.5 · 24 hours
                                </p>
                            </div>
                            </div>
                        </div>

                        {/* AMAZON */}
                        <div
                            onClick={() => setSelected("amazon")}
                            className={`cursor-pointer p-4 rounded-xl border transition
                            ${selected === "amazon"
                            ? "border-teal-400 bg-teal-500/10"
                            : "border-white/10 hover:border-white/20"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                <Gift className="text-teal-400" />
                            </div>
                            <div>
                                <p className="text-teal-400 font-medium">
                                Amazon Gift Card
                                </p>
                                <p className="text-sm text-gray-400">
                                Min: $5 · No fees · Instant
                                </p>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>

                    {/* RIGHT – FORM */}
                    <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                        <h3 className="font-semibold mb-4">Cashout Details</h3>

                        <label className="text-sm text-gray-400">Amount ($)</label>
                        <input
                        type="number"
                        placeholder="0.00"
                        className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-[#070b14]
                        border border-white/10 focus:border-cyan-400 focus:outline-none"
                        />

                        <label className="text-sm text-gray-400">
                        {getFieldLabel()}
                        </label>
                        <input
                        type="text"
                        placeholder={getPlaceholder()}
                        className="w-full mt-2 mb-6 px-4 py-3 rounded-xl bg-[#070b14]
                        border border-white/10 focus:border-cyan-400 focus:outline-none"
                        />

                        <button className="w-full mt-3 group cursor-pointer mr-[10px] relative h-12 px-8 rounded-xl bg_gradient text-black font-semibold inline-flex items-center justify-center gap-2 overflow-hidden">
              
                        <span className="relative z-10">Request Cashout →</span>
                        {/* SHINE EFFECT */}
                        <span className="absolute top-0 -left-1/2 w-1/2 h-full bg-white/40 skew-x-12 
                                        group-hover:left-full transition-all duration-700"></span>
                        </button>
                    </div>

                    </div>

                    {/* RECENT CASHOUTS */}
                    <div className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6">Recent Cashouts</h3>

                    <div className="bg-[#0b1220] rounded-2xl border border-white/10 overflow-hidden">

                        <div className="flex justify-between items-center hover:bg-white/5 transition px-6 py-2 border-b border-white/10">
                        <div>
                            <p className="text-md">$50.00</p>
                            <p className="text-sm text-gray-400">
                            <span className="text-cyan-400">PayPal</span> · Dec 24
                            </p>
                        </div>
                        <span className="flex items-center gap-2 bg-green-500/15 text-green-400 px-2 text-sm py-1 rounded-full">
                            <CheckCircle className="w-4 h-4" /> Completed
                        </span>
                        </div>

                        <div className="flex justify-between items-center hover:bg-white/5 transition px-6 py-2 border-b border-white/10">
                        <div>
                            <p className="text-md">$25.00</p>
                            <p className="text-sm text-gray-400">
                            <span className="text-yellow-400">Bitcoin</span> · Dec 22
                            </p>
                        </div>
                        <span className="flex items-center gap-2 bg-yellow-500/15 text-yellow-400 px-2 py-1 text-sm rounded-full">
                            <Clock className="w-4 h-4" /> Pending
                        </span>
                        </div>

                        <div className="flex justify-between items-center hover:bg-white/5 transition px-6 py-2">
                        <div>
                            <p className="text-md">$100.00</p>
                            <p className="text-sm text-gray-400">
                            <span className="text-green-400">UPI</span> · Dec 18
                            </p>
                        </div>
                        <span className="flex items-center gap-2 bg-green-500/15 text-green-400 px-2 py-1 text-sm rounded-full">
                            <CheckCircle className="w-4 h-4" /> Completed
                        </span>
                        </div>

                    </div>
                    </div>

                </div>
                </section>
     
    </>
  )
}
