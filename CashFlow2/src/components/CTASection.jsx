import React from 'react'
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Login } from "../components/Account/Login"; // path apne hisaab se
import { ForgotPassword } from "../components/Account/ForgotPassword";
import { Signup } from "../components/Account/Signup";
  

export const CTASection = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
    const [showSignup, setShowSignup] = useState(false); // ✅ NEW

  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b1225] border border-white/10">

          {/* subtle gradient circles (right side like image) */}
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-2xl" />

          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-2xl" />

          <div className="phone_view_cta relative z-10 px-10 text-center py-16 md:px-16 md:py-20 max-w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Earning?
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Join thousands of users who are already earning money online.
              Sign up is free and takes less than 30 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Primary Button */}
              <button
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
                className="group cursor-pointer mr-[10px] relative h-12 px-8 rounded-xl bg_gradient text-black font-semibold inline-flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Start Earning</span>
                {/* SHINE EFFECT */}
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
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

                  <div className="relative w-full max-w-md mx-4 animate-fadeIn">

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
              {showLogin && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md">
  
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
  
                    <Login openForgot={() => {
                      setShowLogin(false);
                      setShowForgot(true);
                    }} />
  
                  </div>
                </div>
              )}
              {showForgot && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md">
  
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
             
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
