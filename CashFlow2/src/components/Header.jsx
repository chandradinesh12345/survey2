import { useState, useRef, useEffect } from "react"; // ✅ ADDED useRef, useEffect
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


import {
  Bell,
  MessageCircle,
  User,
  LogOut,
  Wallet,
  MessageSquareText,
  Menu,
  LayoutDashboard,
  Crown,
  Gift,
  CircleX,
  UserCog,
  Settings2,
  ClipboardCheck,
  X,
} from "lucide-react";
import { Login } from "../components/Account/Login"; // path apne hisaab se
import { ForgotPassword } from "../components/Account/ForgotPassword";
import { Signup } from "../components/Account/Signup";
import { EarningsMarquee } from "../Dashboard/EarningsMarquee"


export const Header = () => {







  const location = useLocation(); // ✅ ADDED

  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
const [chatTab, setChatTab] = useState("community");



const CHAT_WIDTH = 420;

const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  show: {
    opacity: 1,
    y: 0,
    x: [0, -8, 8, -5, 5, 0], // 👈 LEFT RIGHT SHAKE
    transition: {
      duration: 0.9,          // 🔥 SLOW
      ease: "easeInOut",
    },
  },
};



useEffect(() => {
  if (window.innerWidth >= 1024) {
    document.documentElement.style.setProperty(
      "--chat-offset",
      chatOpen ? `${CHAT_WIDTH}px` : "0px"
    );
  }
}, [chatOpen]);





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

const notifRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (notifRef.current && !notifRef.current.contains(e.target)) {
      setNotifOpen(false);
    }
  };

  if (notifOpen) {
    document.addEventListener("mousedown", handleClickOutside, true); // 👈 CAPTURE
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside, true);
  };
}, [notifOpen]);


const handleMenuClose = () => {
  setOpen(false);
};


  return (

    <>

    {/* phone view */}
      <button
          onClick={() => {
            setChatOpen(true);
            setNotifOpen(false);
            setProfileOpen(false);
          }}
          className="lg:hidden fixed bottom-8 right-8 z-10 group"
        >
          {/* Glow Ring */}
          <span className="absolute inset-0 rounded-full bg-green-400 blur-lg opacity-60 animate-pulse"></span>

          {/* Main Button */}
          <span
            className="
              relative flex items-center justify-center
              h-12 w-12 rounded-full
              bg_gradient to-emerald-500
              text-white
              shadow-xl shadow-cyn-500/40
              animate-bounce
              transition-all duration-300
              group-hover:scale-110
              group-hover:shadow-emerald-400/60
            "
          >
            <MessageSquareText size={22} />
          </span>
        </button>

      {/* HEADER */}
      
      {/* <header className="fixed top-0 left-0 w-full z-20 bg-[#070c1a]/80 backdrop-blur-md border-b border-white/10"> */}
       <header
        className="fixed top-0 left-0 w-full z-20 bg-[#070c1a]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300"
        style={{
          paddingRight: "var(--chat-offset)",
        }}
      >

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
          <div className="homeview flex w-6xl justify-end">
              {/* DESKTOP NAV */}
              {/* <nav className="hidden lg:flex items-center text-sm gap-2 text-gray-400">
                <Link to="/" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Home</Link>
                <Link to="/privacy-policy" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Terms of Service</Link>
                <Link to="/contact-us" className="hover:text-white hover:bg-cyan-500/10 border border-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 hover:border-cyan py-2 px-5 rounded-xl">Contact Us</Link>
              </nav> */}
              {/* RIGHT SIDE */}
              
                {/* ACTIONS */} 
                
                
                <div className="flex gap-2 items-center w-xs justify-end"> 
            <button
              onClick={() => {
                setShowLogin(true);
                setShowForgot(false);
              }}
              className="cursor-pointer group relative h-12 px-8 rounded-xl font-semibold text-white
                        inline-flex items-center justify-center
                        border border-white/20 overflow-hidden
                        transition-all duration-300
                        hover:shadow-[0_0_25px_rgba(148,163,184,0.35)]"
            >
              {/* SLIDING GRADIENT BACKGROUND */}
              <span
                className="absolute inset-0 -translate-x-full
                          bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300
                          transition-transform duration-500 ease-out
                          group-hover:translate-x-0"
              />

              {/* TEXT */}
              <span
                className="relative z-10 transition-all duration-300
                          group-hover:text-slate-900 group-hover:-translate-y-[1px]"
              >
                Sign In
              </span>

              {/* SOFT GLOW BORDER */}
              <span
                className="pointer-events-none absolute inset-0 rounded-xl
                          ring-1 ring-slate-300/40
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300"
              />
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
              className="group cursor-pointer relative h-12 px-8 rounded-xl bg_gradient text-black font-semibold inline-flex items-center justify-center gap-2 overflow-hidden"
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
            <div className="flex items-center lg:gap-2 gap-3 relative">
              {/* BALANCE */}
              <Link to="/cashout" className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-sky-500/10 text_color_brad hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(56,189,248,0.45)]
                    transition-all duration-300 text-md">
                <Wallet size={16} />
                <span className="font-semibold">$127.50</span>
              </Link>

              {/* NOTIFICATION */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => {
                    setNotifOpen((prev) => !prev);
                    setChatOpen(false);
                    setProfileOpen(false);
                  }}
                  className="relative hover:bg-sky-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <Bell size={16} />
                  <span className="absolute top-1 right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center text-white">
                    3
                  </span>
                </button>

                {notifOpen && (
                  <div
                    className="absolute lg:right-0 -right-[30px] mt-4 lg:w-[320px] w-[300px]
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
                        className="max-h-[290px] overflow-y-auto dark-ui-scrollbar">
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
                  className="lg:block hidden hover:bg-sky-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <MessageCircle size={16} />
                </button>             
              <div
                className={`fixed top-0 right-0 h-screen sm:w-[420px] w-[100%] z-[60]
                bg-[#070c1a] border-l border-white/10
                flex flex-col
                transform transition-transform duration-300 ease-in-out
                ${chatOpen ? "translate-x-0" : "translate-x-full"}
              `}
              >
               

                {/* TABS */}
                <div className="px-2 py-4 border-b border-white/10 shrink-0">
                <div className="flex justify-between">
                  <div className="flex w-80 bg-[#131d35] rounded-xl p-1">
                    <button
                      onClick={() => setChatTab("community")}
                      className={`flex-1 py-2 rounded-lg cursor-pointer text-sm transition
                      ${chatTab === "community"
                        ? "bg-[#080c17] text-white"
                        : "text-gray-400 hover:text-white"}
                      `}
                    >
                      👥 Community
                    </button>

                    <button
                      onClick={() => setChatTab("support")}
                      className={`flex-1 py-2 rounded-lg cursor-pointer text-sm transition
                      ${chatTab === "support"
                        ? "bg-[#080c17] text-white"
                        : "text-gray-400 hover:text-white"}
                      `}
                    >
                      🎧 Support
                    </button>
                  </div>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="text-gray-400 cursor-pointer hover:text-white text-xl"
                  >
                    ✕
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
                  className="flex-1 min-h-0 px-3 py-3 space-y-6 overflow-y-auto
                  scrollbar-thin scrollbar-thumb-white/10
                  scrollbar-thumb-rounded-full scrollbar-track-transparent"
                >

                  {/* ================= COMMUNITY CHAT ================= */}
                  {chatTab === "community" && (
                    <>
                      <div className="max-w-md mx-auto bg-[#070b14] rounded-3xl">
      
                        <CommunityMessage
                          avatar="SM"
                          name="Sarah M."
                          text="Just completed the SurveyJunkie offer, got $5 instantly! 🎉"
                        />

                        <CommunityMessage
                          avatar="MD"
                          name="Mike D."
                          role="Mod"
                          text="Anyone tried the new GameRewards offer?"
                        />

                        <CommunityMessage
                          avatar="AK"
                          name="Alex K."
                          role="Admin"
                          text="Pro tip: The video ads are quick and easy for consistent earnings"
                        />

                        <CommunityMessage
                          avatar="LR"
                          name="Lisa R."
                          text="Just hit $100 this week! 💰"
                        />

                      </div>
                    </>
                  )}

                  {/* ================= SUPPORT CHAT ================= */}
                  {chatTab === "support" && (
                    <>
                      {/* SYSTEM / SUPPORT MESSAGE (ONLY HERE) */}
                      <div class="flex gap-2.5 bg-blue-500/10 px-4 py-3 rounded-2xl mb-3">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 flex-shrink-0">
                            <span class="flex h-full w-full items-center justify-center rounded-full text-xs font-semibold bg_gradient text-white">SA</span>
                          </span>
                          <div class="flex-1 min-w-0">
                              <div class="flex items-center gap-1.5 mb-0.5"><span class="text-sm font-semibold text_color_brad">Support Agent</span>
                                  <div class="inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[10px] text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-2.5 h-2.5 mr-0.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                    Staff</div>
                              </div>
                              <p class="text-gray-400 text-sm">Hi! Welcome to CashewCash support. How can I help you today?</p>
                          </div>
                      </div>
                      <div class="flex gap-2.5 bg-blue-500/10 px-4 py-3 rounded-2xl mb-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 flex-shrink-0">
                              <span class="flex h-full w-full items-center justify-center rounded-full text-xs font-semibold bg_gradient text-white">SA</span>
                            </span>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-1.5 mb-0.5"><span class="text-sm font-semibold text_color_brad">Support Agent</span>
                                    <div class="inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[10px] text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-2.5 h-2.5 mr-0.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                      Staff</div>
                                </div>
                                <p class="text-gray-400 text-sm">Hi! Welcome to CashewCash support. How can I help you today?</p>
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

              <Link to="/profile"
                  className="lg:block hidden  hover:bg-sky-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <User size={16} />
              </Link>
              <Link to="/"
                  className="lg:block hidden  hover:bg-sky-500/20 py-3 px-3 rounded-full text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <LogOut size={16} />
              </Link>
              {/* MOBILE MENU BUTTON */}
              {/* <button
                onClick={() => setOpen(true)}
                className="lg:hidden text-white text-2xl"
              >
                <Menu size={18} />
              </button> */}

              <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-muted"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

              
            </div>
          </div>
 
           )}

        </div>
      </header>

      {/* MOBILE DRAWER (UNCHANGED) */}
   
           
        
       <AnimatePresence>
  {open && (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-[65px] left-0 right-0 z-50 bg-[#0a101e] border-b overflow-hidden"
    >
      <nav
        className="flex flex-col gap-2 px-4 py-2 text-gray-400 text-sm"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.06, // 👈 ek-ek karke (premium)
            },
          },
        }}
      >

        {!isDashboard ? (
          <>
            <Link to="/" className="hover:text-white hover:bg-cyan-500/10 py-1 px-1 rounded-xl">
              Home
            </Link>
            <Link to="/privacy-policy" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="hover:text-white hover:bg-green-500/10 py-1 px-1 rounded-xl">
              Contact Us
            </Link>
          </>
        ) : (
          <>
            {/* DASHBOARD */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/dashboard" onClick={handleMenuClose} className="px-4 py-1 rounded-xl">
                <span className="flex items-center gap-2">
                  <LayoutDashboard size={16} /> Dashboard
                </span>
              </Link>
            </motion.div>

            {/* FEATURED */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.30 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/featured-offers-pages" onClick={handleMenuClose} className="px-4 py-1 rounded-xl">
                <span className="flex items-center gap-2">
                  <ClipboardCheck size={16} /> Featured Offers
                </span>
              </Link>
            </motion.div>

            {/* CASHOUT */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.45 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/cashout" onClick={handleMenuClose} className="px-4 py-1 rounded-xl">
                <span className="flex items-center gap-2">
                  <Wallet size={16} /> Cashout
                </span>
              </Link>
            </motion.div>

            {/* REWARDS */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.60 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/rewards" onClick={handleMenuClose} className="px-4 py-1 rounded-xl">
                <span className="flex items-center gap-2">
                  <Gift size={16} /> Rewards
                </span>
              </Link>
            </motion.div>

            {/* LEADERBOARD */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.75 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/leaderboard" onClick={handleMenuClose} className="px-4 py-1 rounded-xl">
                <span className="flex items-center gap-2">
                  <Crown size={16} /> Leaderboard
                </span>
              </Link>
            </motion.div>

            {/* PROFILE */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.90 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/profile" onClick={handleMenuClose} className="px-4 py-1 rounded-xl">
                <span className="flex items-center gap-2">
                  <UserCog size={16} /> Profile
                </span>
              </Link>
            </motion.div>

            {/* LOGOUT */}
            <motion.div
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 1.05 }}
              style={{ lineHeight: "10px" }}
            >
              <Link to="/" onClick={handleMenuClose} className="px-4 py-1 rounded-xl text-[#dc2828]">
                <span className="flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </span>
              </Link>
            </motion.div>
          </>
        )}
      </nav>
    </motion.div>
  )}
</AnimatePresence>


   
      <EarningsMarquee />
    </>
  );
};


const CommunityMessage = ({ avatar, name, time, text, role }) => {
  return (
    <div className="bg-[#0b1224] border border-white/5 rounded-2xl px-2 py-2 mb-2">
      <div className="flex gap-3 items-start">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-300 font-semibold">
          {avatar}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-white text-sm font-medium">{name}</p>

            {role && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full
                ${
                  role === "Admin"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-cyan-500/20 text-cyan-400"
                }`}
              >
                {role}
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

