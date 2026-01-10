import React from 'react'
import { ClipboardList, Wallet, DollarSign, ArrowRight } from "lucide-react";


import { useState } from "react";
import { Login } from "../components/Account/Login"; // path apne hisaab se
import { ForgotPassword } from "../components/Account/ForgotPassword";
import { Signup } from "../components/Account/Signup";


export const Hero = () => {
   const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
    const [showSignup, setShowSignup] = useState(false); // ✅ NEW


  return (
    <section className="relative py-16 md:py-24 overflow-hidden mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="phone_view_font text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Get <span className="text_color_brad">paid</span> for testing
              <br /> apps, games & surveys
            </h1>

            <p className="text-lg text-gray-400 mb-8">
              Earn up to <span className="text_color_brad font-semibold">$3,000</span> per offer •{" "}
              <span className="text_color_brad">10,000+</span> offers available now
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Feature
                icon={<ClipboardList className="w-4 h-4 text_color_brad" />}
                title="Surveys"
                text="Share opinions, earn rewards"
              />
              <Feature
                icon={<Wallet className="w-4 h-4 text_color_brad" />}
                title="Offers"
                text="Complete tasks for cash"
              />
              <Feature
                icon={<DollarSign className="w-4 h-4 text_color_brad" />}
                title="Fast Payouts"
                text="Withdraw instantly"
              />
            </div>

            {/* CTA */}
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
                <div className="fixed inset-0 z-[100] h-screen flex items-center justify-center bg-black/60 backdrop-blur-md">

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
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md">

                {/* BACKDROP — click to close */}
                <div
                  className="absolute inset-0"
                  onClick={() => setShowLogin(false)}
                ></div>

                {/* MODAL BOX */}
                <div className="relative z-[101] w-full max-w-md mx-4 animate-fadeIn">

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
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md">

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

            <p className="text-xs text-gray-500 mt-4">
              No fees • No commitments • Cash out anytime
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#0b1225] border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-2">
              Sign Up for Free
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Join thousands earning money online
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full h-12 px-4 rounded-lg bg-[#060b18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#12a7e2]"
            />

            <button className="w-full cursor-pointer h-12 mt-4 rounded-xl bg_gradient text-black font-semibold hover:bg-green-600 transition">
              Start Earning Now
            </button>

            {/* OR */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0b1225] px-2 text-gray-400">OR</span>
              </div>
            </div>

            {/* GOOGLE */}
            <button className="w-full h-12 rounded-xl cursor-pointer border border-white/20 text-white font-semibold flex items-center justify-center gap-3 hover:bg-white/5 transition">
              <span className="text-lg font-bold">G</span>
              Sign Up with Google
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
              <span className="text_color_brad font-medium">93,000+</span>{" "}
              sign ups in the past 24 hours
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0b1225]/80 border border-white/10">
      <span className="text-green-500">{icon}</span>
      <div className="text-sm">
        <span className="font-medium text-white">{title}</span>
        <span className="text-gray-400 ml-1 hidden sm:inline">
          • {text}
        </span>
      </div>
    </div>
  );
}
