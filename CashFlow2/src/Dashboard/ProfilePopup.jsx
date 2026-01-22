import React from "react";
import { Eye, EyeOff, User } from "lucide-react";
import { useState } from "react";

const ProfilePopup = ({ open, onClose }) => {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);

  if (!open) return null; // 👈 IMPORTANT

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      
      <div className="bg-gradient-to-br w-full max-w-md from-[#050b1a] via-[#050b1a] to-[#020617] rounded-2xl
                      border border-white/10 shadow-2xl">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                <User size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold">Edit Profile</h3>
            </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="p-5 space-y-4">
          <div>
            <label className="text-sm text-gray-400">Username</label>
            <input
              className="mt-1 w-full bg-black/40 border border-white/10
                         rounded-xl px-4 py-2 text-white outline-none"
              placeholder="Username"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              className="mt-1 w-full bg-black/40 border border-white/10
                         rounded-xl px-4 py-2 text-white outline-none"
              placeholder="Email"
            />
          </div>
            {/* CURRENT PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-400">Current Password</label>
            <div className="relative">
                <input
                type={showCurrent ? "text" : "password"}
                placeholder="Current Password"
                className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-cyan-400 transition"
                />
                <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
        </div>

        {/* NEW PASSWORD */}
        <div className="relative">
            <label className="text-sm text-gray-400">Current Password</label>
            <div className="relative">
                <input
                    type={showNew ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-cyan-400 transition"
                />
                <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                    {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
        </div>

        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-5 py-4 border-t border-white/10">
          <button className="px-4 py-2 rounded-xl cursor-pointer bg-sky-500 text-black">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePopup;
