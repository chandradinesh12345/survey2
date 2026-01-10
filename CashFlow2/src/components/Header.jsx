import React, { useState, useRef, useEffect } from "react"; // ✅ ADDED useRef, useEffect
import { Link, useLocation } from "react-router-dom";

import {
  Bell,
  MessageCircle,
  User,
  LogOut,
  Wallet,
  Settings2,
} from "lucide-react";
import { Login } from "../components/Account/Login"; // path apne hisaab se
import { ForgotPassword } from "../components/Account/ForgotPassword";
import { Signup } from "../components/Account/Signup";


export const Header = () => {

  const location = useLocation(); // ✅ ADDED

  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
const [chatTab, setChatTab] = useState("community");

const profileRef = useRef(null); // ✅ ADDED

// ✅ ADDED — close profile on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  const closeAll = () => {
    setNotifOpen(false);
    setChatOpen(false);
    setProfileOpen(false);
  };

const dashboardRoutes = [
  "/dashboard",
  "/profile",
  "/affilliates",
  "/settings",
  "/cashout",
  "/rewards",
  "/leaderboard",
  "/featured-offers-pages",
  "/offerwalls-pages",
  "/activity-history",
];

const isDashboard = dashboardRoutes.some((path) =>
  location.pathname.startsWith(path)
);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // ✅ NEW

  return (



    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-20 bg-[#070c1a]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg_gradient from-cyan-400 to-green-400 flex items-center justify-center text-black font-bold">
              $
            </div>
            <span className="text-white font-semibold text-lg lg:block hidden">
              CashFlow
            </span>
          </div>
          </Link>

          {!isDashboard && (
          <div className="homeview flex w-6xl justify-between">
              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center text-sm gap-2 text-gray-400">
                <Link to="/" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Home</Link>
                <Link to="/privacy-policy" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Terms of Service</Link>
                <Link to="/contact-us" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Contact Us</Link>
              </nav>
              {/* RIGHT SIDE */}
              <div className="hidden lg:flex items-center gap-2 relative">
                {/* ACTIONS */} 
                
                
                <div className="flex gap-2 items-center w-xs"> 
            <button
            onClick={() => {
                setShowLogin(true);
                setShowForgot(false);
              }}
              className="group cursor-pointer relative h-12 px-8 rounded-xl text-white font-semibold inline-flex items-center justify-center
                        border border-white/30 overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Sign In
              </span>

              {/* BACKGROUND FILL */}
              <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-xl"></span>

              {/* BORDER GLOW */}
              <span className="absolute inset-0 rounded-xl border border-white opacity-0 group-hover:opacity-100 transition"></span>
            </button>
            {/* ============ LOGIN POPUP MODAL ============ */}
              {showLogin && (
                <div className="fixed inset-0 z-[1000] h-screen flex items-center justify-center bg-black/60 backdrop-blur-md">
  
                  {/* BACKDROP — click to close */}
                  <div
                    className="absolute inset-0"
                    onClick={() => setShowLogin(false)}
                  ></div>
  
                  {/* MODAL BOX */}
                  <div className="relative w-full max-w-md mx-4 animate-fadeIn">
  
                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setShowLogin(false)}
                      className="absolute -top-4 -right-4 cursor-pointer w-10 h-10 z-[9]  rounded-full bg-white text-black text-xl shadow-lg hover:bg-gray-200"
                    >
                      ✕
                    </button>
  
                    <Login
                      openForgot={() => {
                        setShowLogin(false);
                        setShowForgot(true);
                      }}
                      openSignup={() => {
                        setShowLogin(false);
                        setShowSignup(true);
                      }}
                    />

  
                  </div>
                </div>
              )}
  
              {showForgot && (
                <div className="fixed inset-0 z-[1000] h-screen flex items-center justify-center bg-black/60 backdrop-blur-md">
  
                  <div
                    className="absolute inset-0"
                    onClick={() => setShowForgot(false)}
                  />
  
                  <div className="relative z-[101] w-full max-w-md mx-4 animate-fadeIn">
  
                    <button
                      onClick={() => setShowForgot(false)}
                      className="absolute -top-4 -right-4 z-[9] cursor-pointer w-10 h-10 rounded-full bg-white text-black text-xl shadow-lg"
                    >
                      ✕
                    </button>
  
                    <ForgotPassword backToLogin={() => {
                        setShowForgot(false);
                        setShowLogin(true);
                      }} />
  
                  </div>
                </div>
              )}


            <button
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
              className="group cursor-pointer mr-[10px] relative h-12 px-8 rounded-xl bg_gradient text-black font-semibold inline-flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Start Earning</span>
              {/* SHINE EFFECT */}
              <span className="absolute top-0 -left-1/2 w-1/2 h-full bg-white/40 skew-x-12 
                              group-hover:left-full transition-all duration-700"></span>
            </button>
              {/* ============ SIGNUP POPUP MODAL ============ */}
              {showSignup && (
                <div className="fixed inset-0 z-[1000] h-screen flex items-center justify-center bg-black/60 backdrop-blur-md">

                  <div
                    className="absolute inset-0"
                    onClick={() => setShowSignup(false)}
                  />

                  <div className="relative z-[101] w-full max-w-md mx-4 animate-fadeIn">

                    <button
                      onClick={() => setShowSignup(false)}
                      className="absolute -top-4 -right-4 w-10 z-[9] cursor-pointer h-10 rounded-full bg-white text-black text-xl shadow-lg"
                    >
                      ✕
                    </button>

                    <Signup
                      backToLogin={() => {
                        setShowSignup(false);
                        setShowLogin(true);
                      }}
                    />
                  </div>
                </div>
              )}

                </div>
              </div>  
          </div> 
          )}

          {isDashboard && (
          <div className="dashtop_view flex lg:w-6xl w-xl lg:justify-between justify-end">
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center text-sm gap-0 text-gray-400">
              <Link to="/dashboard" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Dashboard</Link>
              <Link to="/featured-offers-pages" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Featured Offers</Link>
              
              <Link to="/cashout" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Castout</Link>
              <Link to="/rewards" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Rewards</Link>
              <Link to="/leaderboard" className="hover:text-white hover:bg-green-500/10 py-2 px-5 rounded-xl">Leaderboard</Link>
            </nav>
            <div className="flex items-center lg:gap-2 gap-1 relative">
              {/* BALANCE */}
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-green-500/10 text_color_brad text-md">
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
                  className="relative hover:bg-green-500/20 py-3 px-2 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <Bell size={16} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center text-white">
                    3
                  </span>
                </button>

                {notifOpen && (
                  <div
                    className="absolute right-0 mt-4 w-[320px]
                    bg-[#0d1728] rounded-xl border border-white/10
                    shadow-2xl overflow-hidden
                    transform transition-all duration-300 ease-out
                    opacity-100 translate-y-0"
                  >

                    {/* HEADER */}
                    <div className="flex items-center justify-between px-3 py-3 border-b border-white/10 bg-[#060a13]">
                      <h4 className="text-white text-sm font-normal">
                        Notifications
                      </h4>

                    </div>

                    {/* LIST (ONLY 3 ITEMS VISIBLE) */}
                    <div
                      className="max-h-[290px] overflow-y-auto
                      scrollbar-thin scrollbar-thumb-white/10
                      scrollbar-thumb-rounded-full scrollbar-track-transparent"
                    >

                      {/* ITEM 1 */}
                      <div className="group flex gap-4 px-3 py-3 border-b border-white/10 hover:bg-white/5 transition">
                        <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400">
                          📈
                        </div>

                        <div className="flex-1 relative">
                          <div className="flex items-center gap-2">
                            <p className="text-white text-sm">
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
                      <div className="group flex gap-4 px-3 py-3 border-b border-white/10 hover:bg-white/5 transition">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                          👥
                        </div>

                        <div className="flex-1 relative">
                          <div className="flex items-center gap-2">
                            <p className="text-white text-sm">
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
                      <div className="group flex gap-4 px-3 py-3 border-b border-white/10 hover:bg-white/5 transition">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center text-yellow-400">
                          🎁
                        </div>

                        <div className="flex-1 relative">
                          <div className="flex items-center gap-2">
                            <p className="text-white text-sm">
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
                      <div className="flex gap-4 px-3 py-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-300">
                          ✔
                        </div>

                        <div>
                          <p className="text-white text-sm">
                            Cashout Processed
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Your $50.00 PayPal withdrawal is complete
                          </p>
                        </div>
                      </div>

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
                  className="hover:bg-green-500/20 py-3 px-2 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <MessageCircle size={16} />
                </button>

                                
              <div
                className={`fixed top-0 right-0 h-screen w-[420px] z-[60]
                bg-[#070c1a] border-l border-white/10
                flex flex-col
                transform transition-transform duration-300 ease-in-out
                ${chatOpen ? "translate-x-0" : "translate-x-full"}
              `}
              >
                {/* HEADER */}
                <div className="h-16 px-5 flex items-center justify-between border-b border-white/10 shrink-0">
                  <h3 className="text-white text-lg font-semibold">Chat</h3>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                </div>

                {/* TABS */}
                <div className="px-5 py-4 border-b border-white/10 shrink-0">
                  <div className="flex bg-[#131d35] rounded-xl p-1">
                    <button
                      onClick={() => setChatTab("community")}
                      className={`flex-1 py-2 rounded-lg text-sm transition
                      ${chatTab === "community"
                        ? "bg-[#080c17] text-white"
                        : "text-gray-400 hover:text-white"}
                      `}
                    >
                      👥 Community
                    </button>

                    <button
                      onClick={() => setChatTab("support")}
                      className={`flex-1 py-2 rounded-lg text-sm transition
                      ${chatTab === "support"
                        ? "bg-[#080c17] text-white"
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
                <div
                  className="flex-1 min-h-0 px-5 py-4 space-y-6 overflow-y-auto
                  scrollbar-thin scrollbar-thumb-white/10
                  scrollbar-thumb-rounded-full scrollbar-track-transparent"
                >

                  {/* ================= COMMUNITY CHAT ================= */}
                  {chatTab === "community" && (
                    <>
                      <CommunityMessage
                        avatar="SM"
                        name="Sarah M."
                        time="10:30 AM"
                        text="Just completed the SurveyJunkie offer, got $5 instantly! 🎉"
                      />

                      <CommunityMessage
                        avatar="MD"
                        name="Mike D."
                        time="10:32 AM"
                        text="Anyone tried the new GameRewards offer?"
                      />

                      <div className="flex justify-end items-end gap-3">
                        <div className="bg-cyan-500 text-black text-sm px-4 py-3 rounded-2xl max-w-[260px]">
                          Yeah it's great! Made $8 yesterday
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center text-white">
                          AD
                        </div>
                      </div>
                    </>
                  )}

                  {/* ================= SUPPORT CHAT ================= */}
                  {chatTab === "support" && (
                    <>
                      {/* SYSTEM / SUPPORT MESSAGE (ONLY HERE) */}
                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-black font-semibold">
                          CS
                        </div>
                        <div className="bg-green-500/10 text-white text-sm px-4 py-3 rounded-2xl max-w-[300px]">
                          Hi 👋 Welcome to CashFlow support. How can I help you today?
                        </div>
                      </div>

                      {/* USER MESSAGE */}
                      <div className="flex justify-end items-end gap-3">
                        <div className="bg-cyan-500 text-black text-sm px-4 py-3 rounded-2xl max-w-[260px]">
                          I have a question about my withdrawal
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center text-white">
                          AD
                        </div>
                      </div>

                      {/* SUPPORT REPLY */}
                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-black font-semibold">
                          CS
                        </div>
                        <div className="bg-green-500/10 text-white text-sm px-4 py-3 rounded-2xl max-w-[300px]">
                          Sure 👍 Please tell me your registered email or transaction ID.
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* INPUT */}
                <div className="sticky bottom-0 left-0 px-4 py-3 bg-[#070c1a] border-t border-white/10 shrink-0">
                  <div className="flex items-center gap-3 bg-[#0b1220] rounded-xl px-4 py-2">
                    <input
                      type="text"
                      placeholder={
                        chatTab === "community"
                          ? "Send a message to community..."
                          : "Send a message to support..."
                      }
                      className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
                    />
                    <button className="py-1 px-2 rounded-md bg-cyan-400 hover:text-white cursor-pointer">
                      ➤
                    </button>
                  </div>
                </div>
              </div>

              {/* PROFILE */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => {
                    setProfileOpen(!profileOpen);
                    setNotifOpen(false);
                    setChatOpen(false);
                  }}
                  className="hover:bg-green-500/20 py-3 px-2 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <User size={16} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-4 w-52 bg-[#0b1220] rounded-xl border border-white/10 shadow-xl p-2">
                    <Link
                      to="/profile"
                      className="flex gap-2 items-center rounded-sm px-2 py-1.5 text-[12px] outline-none text-white hover:bg-teal-400 hover:text-black"
                    >
                      <User size={14} /> Profile
                    </Link>

                 

                    <Link
                      to="/settings"
                      className="flex gap-2 items-center rounded-sm px-2 py-1.5 text-[12px] outline-none text-white hover:bg-teal-400 hover:text-black"
                    >
                      <Settings2 size={14} /> Settings
                    </Link>

                    <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-white/10"></div>
                    <button className="w-full rounded-sm px-2 py-1.5 text-[12px] outline-none text-white hover:bg-teal-400 text-black flex gap-2 items-center hover:text-black text-left">
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

           )}

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


        
          <nav className="flex flex-col gap-4 px-4 py-2 text-[14px] text-gray-400 text-lg">
            {!isDashboard ? (
              <>
                <Link to="/" className="hover:text-white hover:bg-cyan-500/10 py-1 px-1 rounded-xl">Home</Link>
                <Link to="/privacy-policy" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">Terms of Service</Link>
                <Link to="/contact-us" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">Contact Us</Link>
                
              </>
              ) : (
              <>
              <Link to="/dashboard" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">Dashboard</Link>
              <Link to="/featured-offers-pages" className="hover:text-white hover:bg-green-500/10 px-1 rounded-xl">Featured Offers</Link>
              
              <Link to="/cashout" className="hover:text-white hover:bg-green-500/10 px-1 rounded-xl">Castout</Link>
              <Link to="/rewards" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">Rewards</Link>
              <Link to="/leaderboard" className="hover:text-white hover:bg-green-500/10 px-1 rounded-xl">Leaderboard</Link>
              </>
            )}

          </nav>
        </div>
      )}
    </>
  );
};


function CommunityMessage({ avatar, name, time, text }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center text-white">
        {avatar}
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-1">
          {name} · {time}
        </p>
        <div className="bg-[#111a33] text-sm text-white px-4 py-3 rounded-2xl max-w-[280px]">
          {text}
        </div>
      </div>
    </div>
  );
}
