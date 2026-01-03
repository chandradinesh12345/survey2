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
          <nav className="hidden lg:flex items-center text-sm gap-10 text-gray-400">
            <a className="hover:text-white transition">Offers</a>
            <a className="hover:text-white transition">How to Earn</a>
            <a className="hover:text-white transition">Rewards</a>
            <Link to="/Leaderboard" className="hover:text-white transition">Leaderboard</Link>
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
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center text-black font-bold">
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

          <nav className="flex flex-col gap-10 px-6 py-12 text-gray-400 text-lg">
            <a>Offers</a>
            <a>How to Earn</a>
            <a>Rewards</a>
            <a>Leaderboard</a>
          </nav>
        </div>
      )}
    </>
  )
}
