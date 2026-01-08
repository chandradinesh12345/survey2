import React from 'react'

import { User, Lock, Bell, Sliders, Eye, EyeOff } from "lucide-react";
import { useState } from "react";



export const Settings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
const [showNew, setShowNew] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>

        <div className="min-h-screen bg-[#070c1a] text-white px-4 pt-22 pb-12">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* TITLE */}
        <div>
          <h1 className="text-3xl font-semibold">Settings</h1>
          <p className="text-gray-400 mt-1">
            Manage your account preferences and security
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PROFILE */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                <User size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold">Edit Profile</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  className="w-full mt-1 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                  defaultValue="John Doe"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  className="w-full mt-1 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                  defaultValue="john.doe@example.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Username</label>
                <input
                  className="w-full mt-1 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                  defaultValue="john_doe"
                />
              </div>
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-green-400/20 flex items-center justify-center">
                <Lock size={18} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Change Password</h3>
            </div>

            <div className="space-y-4">

              {/* CURRENT PASSWORD */}
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Current Password"
                  className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-green-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* NEW PASSWORD */}
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="New Password"
                  className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-green-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm New Password"
                  className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-green-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* BUTTON */}
              <button className="w-full cursor-pointer mt-2 py-3 rounded-xl border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition">
                Change Password
              </button>

            </div>



          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                <Bell size={18} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>

            <div className="space-y-4">
              {[
                "Email Notifications",
                "Offer Alerts",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl"
                >
                  <span>{item}</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-400" />
                </div>
              ))}
            </div>
          </div>

          {/* PREFERENCES */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-purple-400/20 flex items-center justify-center">
                <Sliders size={18} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Preferences</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Language</label>
                <select className="w-full mt-1 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* SAVE */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-10 py-3 rounded-xl font-medium hover:opacity-90 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
   
    </>
  )
}
