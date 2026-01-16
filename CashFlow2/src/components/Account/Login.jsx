import React from 'react'
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = ({ openForgot, openSignup }) => {

    const [showPassword, setShowPassword] = useState(false);

    const [showLogin, setShowLogin] = useState(false);
    const [showForgot, setShowForgot] = useState(false);

  return (
    
    <>
   
      <section className="bg-gradient-to-br border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 md:p-5 shadow-xl from-[#050b1a] via-[#050b1a] to-[#020617] rounded-2xl">

      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xl">
          $
        </div>

        <h1 className="text-xl font-bold text-white">Welcome Back</h1>
        <p className="text-gray-400 mt-1">
          Sign in to continue earning
        </p>

        {/* Card */}
        <div className="mt-8 ">

          {/* Email */}
          <div className="text-left mb-5">
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 rounded-xl bg-[#050b1a] border border-white/10 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="text-left mb-2">
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full h-12 rounded-xl bg-[#050b1a] border border-white/10 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />

                {showPassword ? (
                    <EyeOff
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                    />
                ) : (
                    <Eye
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                    />
                )}
            </div>
          </div>
          {/* forgot password */}
        <button
          onClick={openForgot}
          className="block text-left cursor-pointer mb-5 text-xs text-gray-400 hover:text-white transition"
        >
          Forgot Password
        </button>

          {showForgot && (
            <div className="fixed inset-0 z-[2] flex items-center justify-center bg-black/60">

              <div
                className="absolute inset-0"
                onClick={() => setShowForgot(false)}
              />

              <div className="relative z-[101] w-full max-w-md mx-4">

                <button
                  onClick={() => setShowForgot(false)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full"
                >
                  ✕
                </button>

                <ForgotPassword
                  backToLogin={() => {
                    setShowForgot(false);
                    setShowLogin(true);
                  }}
                />
              </div>
            </div>
          )}



          {/* Button */}
          <Link to="/dashboard" className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
            Sign In →
          </Link>
          
          <button
              className="group relative h-12 w-full px-6 rounded-xl
                        inline-flex items-center justify-center gap-3
                        border border-white/15 bg-white/[0.03]
                        text-white font-medium
                        overflow-hidden transition-all duration-300
                        hover:border-white/30
                        hover:shadow-[0_0_25px_rgba(148,163,184,0.25)] mt-3 cursor-pointer"
            >
              {/* HOVER SLIDE BACKGROUND */}
              <span
                className="absolute inset-0 -translate-x-full
                          bg-gradient-to-r from-slate-300/20 via-slate-200/30 to-slate-300/20
                          transition-transform duration-500 ease-out
                          group-hover:translate-x-0"
              />

              {/* GOOGLE ICON */}
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="relative z-10 w-5 h-5"
              />

              {/* TEXT */}
              <span className="relative z-10">
                Continue with Google
              </span>
            </button>

          {/* Signup */}
          <p className="text-sm text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <button onClick={openSignup} className="text_color_brad cursor-pointer hover:underline">
              Sign up
            </button>
          </p>
        </div>


      </div>
    </section>
                  
              


    
    </>
  )
}
