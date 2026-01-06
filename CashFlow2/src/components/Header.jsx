import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  MessageCircle,
  User,
  Wallet,
} from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [chatTab, setChatTab] = useState("community"); // FIX ✅

  const closeAll = () => {
    setNotifOpen(false);
    setChatOpen(false);
    setProfileOpen(false);
  };

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
          <nav className="hidden lg:flex items-center text-sm gap-0 text-gray-400">
            <Link to="/" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Home</Link>
            <Link to="/Dashboard" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Dashboard</Link>
            <Link to="/CashOut" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Cashout</Link>
            <Link to="/Rewards" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Rewards</Link>
            <Link to="/Leaderboard" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Leaderboard</Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-2 relative">
              {/* ACTIONS */} 
              {/*
              <div className=""> 
                <Link to="/Login" className="w-full mb-[4px] px-8 py-1.5 text-center block rounded-xl border border-white/20 text-white font-normal hover:bg-white/5 transition"> Sign In </Link> 
                <Link to="/Signup" className="px-6 py-2 rounded-xl bg_gradient w-full block text-center from-cyan-200 to-green-400 text-black font-normal"> Start Earning </Link> 
              </div>
              */}

            {/* BALANCE */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-green-500/10 text-[#1abc55] text-md">
              <Wallet size={16} />
              <span className="font-semibold">$127.50</span>
            </div>

            {/* NOTIFICATION */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotifOpen(!notifOpen);
                  setChatOpen(false);
                  setProfileOpen(false);
                }}
                className="relative hover:bg-green-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
              >
                <Bell size={16} />
                <span className="absolute -top-3 -right-2 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center text-white">
                  3
                </span>
              </button>

              {notifOpen && (
                <div
                  className="absolute right-0 mt-4 w-[350px]
                  bg-[#0d1728] rounded-xl border border-white/10
                  shadow-2xl overflow-hidden
                  transform transition-all duration-300 ease-out
                  opacity-100 translate-y-0"
                >

                  {/* HEADER */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060a13]">
                    <h4 className="text-white text-lg font-normal">
                      Notifications
                    </h4>

                    <div className="flex items-center gap-3">
                      <button className="text-cyan-400 text-sm hover:underline">
                        Mark all read
                      </button>

                      {/* CLOSE ICON */}
                      <button
                        onClick={() => setNotifOpen(false)}
                        className="text-gray-400 text-lg hover:text-white transition cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* LIST (ONLY 3 ITEMS VISIBLE) */}
                  <div
                    className="max-h-[290px] overflow-y-auto
                    scrollbar-thin scrollbar-thumb-white/10
                    scrollbar-thumb-rounded-full scrollbar-track-transparent"
                  >

                    {/* ITEM 1 */}
                    <div className="group flex gap-4 px-6 py-4 border-b border-white/10 hover:bg-white/5 transition">
                      <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400">
                        📈
                      </div>

                      <div className="flex-1 relative">
                        <div className="flex items-center gap-2">
                          <p className="text-white font-medium">
                            Offer Completed!
                          </p>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        </div>

                        <p className="text-gray-400 text-sm mt-1">
                          You earned $5.00 from SurveyJunkie
                        </p>

                        <p className="text-gray-500 text-xs mt-1">
                          2 min ago
                        </p>

                        {/* ITEM CLOSE */}
                        <button
                          className="absolute top-0 right-0 text-gray-400
                          opacity-0 group-hover:opacity-100 transition
                          hover:text-white"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="group flex gap-4 px-6 py-4 border-b border-white/10 hover:bg-white/5 transition">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                        👥
                      </div>

                      <div className="flex-1 relative">
                        <div className="flex items-center gap-2">
                          <p className="text-white font-medium">
                            New Referral Signup
                          </p>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        </div>

                        <p className="text-gray-400 text-sm mt-1">
                          User mike_d joined using your link
                        </p>

                        <p className="text-gray-500 text-xs mt-1">
                          1 hour ago
                        </p>

                        <button
                          className="absolute top-0 right-0 text-gray-400
                          opacity-0 group-hover:opacity-100 transition
                          hover:text-white"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className="group flex gap-4 px-6 py-4 border-b border-white/10 hover:bg-white/5 transition">
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center text-yellow-400">
                        🎁
                      </div>

                      <div className="flex-1 relative">
                        <div className="flex items-center gap-2">
                          <p className="text-white font-medium">
                            Double Rewards Weekend!
                          </p>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        </div>

                        <p className="text-gray-400 text-sm mt-1">
                          Earn 2x on all offers this weekend
                        </p>

                        <p className="text-gray-500 text-xs mt-1">
                          3 hours ago
                        </p>

                        <button
                          className="absolute top-0 right-0 text-gray-400
                          opacity-0 group-hover:opacity-100 transition
                          hover:text-white"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* EXTRA ITEMS (SCROLL ME JAYENGE) */}
                    <div className="flex gap-4 px-6 py-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-300">
                        ✔
                      </div>

                      <div>
                        <p className="text-white font-medium">
                          Cashout Processed
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Your $50.00 PayPal withdrawal is complete
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* FOOTER */}
                  <div className="px-6 py-4 text-center border-t border-white/10">
                    <button className="text-cyan-400 text-sm hover:underline">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>


            {/* CHAT SIDEBAR */}
            <button
                onClick={() => {
                  setChatOpen(true);
                  setNotifOpen(false);
                  setProfileOpen(false);
                }}
                className="hover:bg-green-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
              >
                <MessageCircle size={16} />
              </button>
              <div
                className={`fixed top-0 right-0 h-screen w-[420px] z-[60]
                bg-[#070c1a] border-l border-white/10
                transform transition-transform duration-300 ease-in-out
                ${chatOpen ? "translate-x-0" : "translate-x-full"}
                `}
              >
                {/* HEADER */}
                <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                  <h3 className="text-white text-lg font-semibold">Chat</h3>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                </div>

                {/* TABS */}
                <div className="px-5 py-4">
                  <div className="flex bg-[#0b1220] rounded-xl p-1">
                    <button
                      onClick={() => setChatTab("community")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition
                      ${chatTab === "community"
                        ? "bg-[#111a33] text-white"
                        : "text-gray-400 hover:text-white"}
                      `}
                    >
                      👥 Community
                    </button>

                    <button
                      onClick={() => setChatTab("support")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition
                      ${chatTab === "support"
                        ? "bg-[#111a33] text-white"
                        : "text-gray-400 hover:text-white"}
                      `}
                    >
                      🎧 Support
                    </button>
                  </div>

                  {chatTab === "community" && (
                    <p className="text-gray-400 text-sm mt-3">
                      127 members online
                    </p>
                  )}
                </div>

                {/* MESSAGES */}
                <div className="flex-1 overflow-y-auto px-5 space-y-5 pb-32">

                  {/* MESSAGE 1 */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center text-white">
                      SM
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Sarah M. · 10:30 AM
                      </p>
                      <div className="bg-[#111a33] text-white px-4 py-3 rounded-2xl max-w-[280px]">
                        Just completed the SurveyJunkie offer, got $5 instantly! 🎉
                      </div>
                    </div>
                  </div>

                  {/* MESSAGE 2 */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center text-white">
                      MD
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Mike D. · 10:32 AM
                      </p>
                      <div className="bg-[#111a33] text-white px-4 py-3 rounded-2xl max-w-[280px]">
                        Anyone tried the new GameRewards offer?
                      </div>
                    </div>
                  </div>

                  {/* USER MESSAGE (RIGHT) */}
                  <div className="flex justify-end">
                    <div className="bg-cyan-500 text-black px-4 py-3 rounded-2xl max-w-[260px]">
                      Yeah it's great! Made $8 yesterday
                    </div>
                  </div>

                  {/* SUPPORT MESSAGE */}
                  {chatTab === "support" && (
                    <div className="bg-green-500/10 text-white px-4 py-3 rounded-2xl max-w-[300px]">
                      Hi 👋 Welcome to CashFlow support. How can I help you today?
                    </div>
                  )}
                </div>

                {/* INPUT (FIXED BOTTOM) */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-3
                  bg-[#070c1a] border-t border-white/10">
                  <div className="flex items-center gap-3 bg-[#0b1220] rounded-xl px-4 py-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
                    />
                    <button className="text-cyan-400 hover:text-cyan-300">
                      ➤
                    </button>
                  </div>
                </div>
              </div>


            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setNotifOpen(false);
                  setChatOpen(false);
                }}
                className="hover:bg-green-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
              >
                <User size={16} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-4 w-52 bg-[#0b1220] rounded-2xl border border-white/10 shadow-xl p-2">
                  <Link
                    to="/Profile"
                    className="block px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    Profile
                  </Link>
                  <button className="w-full mt-2 px-4 py-2 rounded-xl bg-teal-400 text-black font-medium">
                    Logout
                  </button>
                </div>
              )}
            </div>

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

      {/* MOBILE DRAWER (UNCHANGED) */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#070c1a]">
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <span className="text-white font-semibold text-lg">CashFlow</span>
            <button onClick={() => setOpen(false)} className="text-white text-2xl">
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-400 text-lg">
            <Link to="/CashOut">Cashout</Link>
            <Link to="/Rewards">Rewards</Link>
            <Link to="/Leaderboard">Leaderboard</Link>

            <Link
              to="/Login"
              className="mt-6 px-6 py-2 text-center rounded-xl border border-white/20 text-white"
            >
              Sign In
            </Link>
            <Link
              to="/Signup"
              className="px-6 py-2 text-center rounded-xl bg_gradient from-cyan-200 to-green-400 text-black"
            >
              Start Earning
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
