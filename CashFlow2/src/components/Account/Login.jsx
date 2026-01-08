import React from 'react'
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050b1a] via-[#050b1a] to-[#020617] px-4">

      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xl">
          $
        </div>

        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        <p className="text-gray-400 mt-2">
          Sign in to continue earning
        </p>

        {/* Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-xl">

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
        <Link
          to="/forgot-password"
          className="block text-left mb-5 text-xs text-gray-400 hover:text-white transition"
        >
          Forgot Password
        </Link>

          {/* Button */}
          <Link to="/dashboard" className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
            Sign In →
          </Link>

          {/* Signup */}
          <p className="text-sm text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/Signup" className="text-cyan-400 hover:underline">
              Sign up
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
    </>
  )
}
