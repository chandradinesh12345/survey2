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
          <div className="text-left mb-3">
            <label className="block text-sm text-gray-300 mb-2">Username</label>
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
          <div className="text-left mb-3">
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
          <div className="text-left mb-3">
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
            <button className="w-full mt-3 group cursor-pointer mr-[10px] relative h-12 px-8 rounded-xl bg_gradient text-black font-semibold inline-flex items-center justify-center gap-2 overflow-hidden">
              
              <span className="relative z-10">Create Account →</span>
              {/* SHINE EFFECT */}
              <span className="absolute top-0 -left-1/2 w-1/2 h-full bg-white/40 skew-x-12 
                              group-hover:left-full transition-all duration-700"></span>
            </button>

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

          {/* Back to Login */}
          <p className="text-sm text-gray-400 mt-3">
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
