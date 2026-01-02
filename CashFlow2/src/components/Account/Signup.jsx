import React from 'react'
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";



export const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050b1a] via-[#050b1a] to-[#020617] px-4">

      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xl">
          $
        </div>

        <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
        <p className="text-gray-400 mt-2">
          Start earning real cash today
        </p>

        {/* Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-xl">
        
        {/* Email */}
          <div className="text-left mb-5">
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
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
          <div className="text-left mb-6">
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

          {/* Button */}
          <button className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
            Create Account →
          </button>

          {/* Signup */}
          <p className="text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/Login" className="text-cyan-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        {/* Back */}
        <Link
          to="/"
          className="inline-block mt-6 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>

      </div>
    </section>
  )
}
