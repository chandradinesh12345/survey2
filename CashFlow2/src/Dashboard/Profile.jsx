import React from 'react'
import { Link } from 'react-router-dom'
import {
  DollarSign,
  Users,
  Calendar,
  Copy,
  Star,
  Settings
} from "lucide-react";
import userIcon from '../assets/img/user_icon.jpg'

import { ActivityHistory } from './ActivityHistory';

export const Profile = () => {
  return (
    <>
    
    <div className="min-h-screen bg-[#070c1a] text-white pt-24 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* PROFILE HEADER */}
        <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* AVATAR */}
            <div className="mx-auto sm:mx-0 w-20 h-20">
                <img src={userIcon} className='rounded-lg w-[60px] h-[60px]' />
            </div>

            {/* USER INFO */}
            <div className="w-full text-center sm:text-left">
                {/* NAME + LEVEL */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h2 className="text-2xl font-semibold">John Doe</h2>

                <span className="mx-auto sm:mx-0 w-fit flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                    <Star size={14} /> Level 5
                </span>
                </div>

                {/* EMAIL */}
                <p className="text-gray-400 mt-1">
                john.doe@example.com
                </p>

                {/* PROGRESS */}
                <div className="mt-4">
                <p className="text-sm text-gray-400 mb-1">
                    Level Progress
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="w-full sm:flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                    </div>

                    <span className="text-sm text-gray-300 text-center sm:text-right">
                    650/1000 XP
                    </span>
                </div>
                </div>
            </div>
            </div>


          <Link to="/settings" className="flex items-center cursor-pointer gap-2 px-5 py-2 rounded-xl border border-white/15 hover:bg-white/5 transition">
            <Settings size={16} />
            Edit Profile
          </Link>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<DollarSign />}
            value="$1,247.50"
            label="Total Earned"
          />
          <StatCard
            icon={<Users />}
            value="12"
            label="Referrals"
          />
          <StatCard
            icon={<Calendar />}
            value="Jan 2025"
            label="Member Since"
          />
        </div>

        {/* LOWER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-1">

          {/* REFERRAL */}
          <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 space-y-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Users size={18} className="text-cyan-400" />
              Referral Program
            </h3>

            <p className="text-gray-400 text-sm">
              Earn 10% of your friends' lifetime earnings when they sign up using your link!
            </p>

            <div>
              <p className="text-sm text-gray-400 mb-1">Your Referral Code</p>
              <input
                readOnly
                value="JOHN2025"
                className="w-full bg-[#070c1a] border border-white/10 rounded-xl px-4 py-2"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Referral Link</p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value="https://cashflow.app/ref/JOHN2025"
                  className="flex-1 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-2"
                />
                <button className="px-3 rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition">
                  <Copy size={18} />
                </button>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl px-4 py-3 text-sm">
              You've earned $124.75 from referrals!
            </div>
          </div>

          {/* ACCOUNT SETTINGS */}
          {/* <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 space-y-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Shield size={18} className="text-cyan-400" />
              Account Settings
            </h3>

            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <div className="mt-1 flex items-center gap-2 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-2">
                <User size={16} className="text-gray-400" />
                <input
                  className="bg-transparent outline-none w-full"
                  defaultValue="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Email Address</label>
              <div className="mt-1 flex items-center gap-2 bg-[#070c1a] border border-white/10 rounded-xl px-4 py-2">
                <User size={16} className="text-gray-400" />
                <input
                  className="bg-transparent outline-none w-full"
                  defaultValue="john.doe@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium">
                Save Changes
              </button>
              <button className="flex-1 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition">
                Change Password
              </button>
            </div>
          </div> */}

        </div>
        <ActivityHistory />
      </div>
    </div>
    
   
    </>
  )
}

const StatCard = ({ icon, value, label }) => (
  <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold">{value}</h3>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);
