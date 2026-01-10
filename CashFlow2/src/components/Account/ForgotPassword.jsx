import React from 'react'
import { Mail } from "lucide-react";

export const ForgotPassword = ({ backToLogin }) => {

  return (
    <>
        <section className="bg-gradient-to-br border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 md:p-5 shadow-xl from-[#050b1a] via-[#050b1a] to-[#020617] rounded-2xl">

      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xl">
          $
        </div>

        <h1 className="text-xl font-bold text-white">Change Password</h1>

        {/* Card */}
        <div className="mt-8">

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

       

          {/* Button */}
          <button className="w-full h-12 cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
            Send Reset Link →
          </button>

          {/* Signup */}
          <p className="text-sm text-gray-400 mt-6">
            Remembered your password?
            <button onClick={backToLogin} className="text_color_brad cursor-pointer hover:underline">
              Sign in
            </button>
          </p>
        </div>


      </div>
    </section>
    </>
  )
}
