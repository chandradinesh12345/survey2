import React from 'react'
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Mail,
  FileText,
  ShieldCheck,
  Lock,
  Facebook, 
  Instagram,
   Linkedin, 
   Twitter
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#050b18] text-gray-400 pt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg_gradient from-cyan-400 to-emerald-400 flex items-center justify-center text-black font-bold text-lg">
                $
              </div>
              <h3 className="text-white text-xl font-semibold">CashFlow</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              The trusted platform to earn real cash by completing simple online tasks.
            </p>
            
            <div className="flex mt-5 items-center gap-3">

                {/* Facebook */}
                <Link
                  to="/"
                  className="group w-10 h-10 flex items-center justify-center rounded-full
                            bg-white/10 text-gray-300
                            hover:bg-blue-600 hover:text-white
                            transition-all duration-300
                            hover:scale-110 hover:shadow-lg hover:shadow-blue-600/40"
                >
                  <Facebook size={18} />
                </Link>

                {/* Instagram */}
                <Link
                  to="/"
                  className="group w-10 h-10 flex items-center justify-center rounded-full
                            bg-white/10 text-gray-300
                            hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-400
                            hover:text-white
                            transition-all duration-300
                            hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40"
                >
                  <Instagram size={18} />
                </Link>

                {/* LinkedIn */}
                <Link
                  to="/"
                  className="group w-10 h-10 flex items-center justify-center rounded-full
                            bg-white/10 text-gray-300
                            hover:bg-sky-600 hover:text-white
                            transition-all duration-300
                            hover:scale-110 hover:shadow-lg hover:shadow-sky-600/40"
                >
                  <Linkedin size={18} />
                </Link>

                {/* Twitter / X */}
                <Link
                  to="/"
                  className="group w-10 h-10 flex items-center justify-center rounded-full
                            bg-white/10 text-gray-300
                            hover:bg-sky-400 hover:text-white
                            transition-all duration-300
                            hover:scale-110 hover:shadow-lg hover:shadow-white/20"
                >
                  <Twitter size={18} />
                </Link>

              </div>


          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Top Offers</li>
              <li className="hover:text-white cursor-pointer">How to Earn</li>
              <li className="hover:text-white cursor-pointer">Leaderboard</li>
             
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <Link to="/help-center" className='flex item-center gap-2'><HelpCircle size={16} /> FAQ's</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <Link to="/contact-us" className='flex item-center gap-2'><Mail size={16} /> Contact Us</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <Link to="/terms-of-service" className='flex item-center gap-2'><FileText size={16} /> Terms of Service</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <Link to="/privacy-policy" className='flex item-center gap-2'><ShieldCheck size={16} /> Privacy Policy</Link>  
              </li>
            </ul>
          </div>

          {/* PLATFORM STATS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform Stats</h4>

            <div className="space-y-4">
              <Stat label="Total Paid Out" value="$2.5M+" color="text-green-400" />
              <Stat label="Active Users" value="150K+" color="text-sky-400" />
              <Stat label="Offers Available" value="500+" color="text-emerald-400" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 CashFlow. All rights reserved.</p>

          <div className="lg:flex md:block text-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Lock size={14} />
              256-bit SSL Encrypted
            </div>
            <div>Anti-Fraud Protected</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Stat({ label, value, color }) {
  return (
    <div className="bg-[#0b1324] rounded-xl px-3 py-3 flex items-center justify-between border border-white/5">
      <span className="text-sm">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}
