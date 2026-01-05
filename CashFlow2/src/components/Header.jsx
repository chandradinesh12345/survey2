import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#070c1a]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg_gradient from-cyan-400 to-green-400 flex items-center justify-center text-black font-bold">
              $
            </div>
            <span className="text-white font-semibold text-lg">
              CashFlow
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center text-sm gap-6 text-gray-400">
            <Link to="/" className="hover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">Home</Link>
            <Link to="/Dashboard" className="hover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">Dashboard</Link>
            <a className="hhover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">Offers</a>
            <a className="hover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">How to Earn</a>
            <Link to="/CashOut" className="hover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">Cashout</Link>
            <Link to="/Rewards" className="hover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">Rewards</Link>
            <Link to="/Leaderboard" className="hover:text-white hover:bg-[#131d34] rounded-xl py-2 px-2 transition">Leaderboard</Link>
          </nav>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/Login" className="text-gray-300 hover:text-white">
              Sign In
            </Link>
            <Link to="/Signup" className="px-6 py-2 rounded-xl bg_gradient from-cyan-200 to-green-400 text-black font-normal">
              Start Earning
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#070c1a]">
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg_gradient from-cyan-400 to-green-400 flex items-center justify-center text-black font-bold">
                $
              </div>
              <span className="text-white font-semibold text-lg">
                CashFlow
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 py-4 text-gray-400 text-lg">
            <Link to="/CashOut" className="hover:text-white transition pointer-events-none">CashOut</Link>
            <Link to="/Rewards" className="hover:text-white transition pointer-events-none">Rewards</Link>
            <Link to="/Leaderboard" className="hover:text-white transition pointer-events-none">Leaderboard</Link>

            {/* ACTIONS */}
            <div className="">
              <Link to="/Login" className="w-full mb-[4px] px-8 py-1.5 text-center block rounded-xl border border-white/20 text-white-500 font-normal hover:bg-white/5 transition">
                Sign In
              </Link>
              <Link to="/Signup" className="px-6 py-2 rounded-xl bg_gradient w-full block text-center from-cyan-200 to-green-400 text-black font-normal">
                Start Earning
              </Link>
            </div>

          </nav>
        </div>
      )}
    </>
  )
}
