import { Mail, User, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Signup = ({ backToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gradient-to-br border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 md:p-5 shadow-xl from-[#050b1a] via-[#050b1a] to-[#020617] rounded-2xl">

      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xl">
          $
        </div>

        <h1 className="text-xl font-bold text-white">Create Your Account</h1>
        <p className="text-gray-400 mt-2">Start earning real cash today</p>

        <div className="mt-8">

          {/* Full Name */}
          <div className="text-left mb-5">
            <label className="block text-sm text-gray-300 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full h-12 rounded-xl bg-[#050b1a] border border-white/10 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="text-left mb-5">
            <label className="block text-sm text-gray-300 mb-2">Email Address</label>
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
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full h-12 rounded-xl bg-[#050b1a] border border-white/10 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              {showPassword ? (
                <EyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Submit */}
          <button className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold hover:opacity-90 transition">
            Create Account →
          </button>

          {/* Back to Login */}
          <p className="text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <button
              onClick={backToLogin}
              className="text_color_brad hover:underline cursor-pointer"
            >
              Sign in
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};
