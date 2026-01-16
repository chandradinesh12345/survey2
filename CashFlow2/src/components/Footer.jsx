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

                {/* discord */}
                <Link
                  to="/"
                  className="group w-10 h-10 flex items-center justify-center rounded-full
                            bg-white/10 text-gray-300
                            hover:bg-sky-600 hover:text-white
                            transition-all duration-300
                            hover:scale-110 hover:shadow-lg hover:shadow-sky-600/40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path d="M19.54 4.27A17.3 17.3 0 0015.9 3c-.2.35-.43.82-.59 1.19a16.8 16.8 0 00-6.62 0A12.7 12.7 0 008.1 3a17.3 17.3 0 00-3.64 1.27C2.4 8.09 1.6 11.82 2.03 15.5A17.7 17.7 0 007.9 18.7c.46-.63.88-1.3 1.24-2.02a11.4 11.4 0 01-1.96-.94c.17-.12.33-.25.48-.38a12.7 12.7 0 009.68 0c.15.13.31.26.48.38-.63.37-1.29.69-1.96.94.36.72.78 1.39 1.24 2.02a17.7 17.7 0 005.87-3.2c.52-4.01-.28-7.74-2.37-11.23zM9.45 13.8c-.74 0-1.35-.68-1.35-1.52 0-.84.6-1.52 1.35-1.52.75 0 1.36.68 1.35 1.52 0 .84-.6 1.52-1.35 1.52zm5.1 0c-.74 0-1.35-.68-1.35-1.52 0-.84.6-1.52 1.35-1.52.75 0 1.36.68 1.35 1.52 0 .84-.6 1.52-1.35 1.52z"/>
                  </svg>

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
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] fill-current"
                >
                  <path d="M18.244 2H21.556L14.277 10.323L22.845 22H16.115L10.846 14.93L4.653 22H1.333L9.107 13.114L0.845 2H7.746L12.509 8.42L18.244 2ZM17.082 20H18.915L6.748 3.917H4.781L17.082 20Z"/>
                </svg>
                </Link>

              </div>


          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer"><Link to="/featured-offers-pages">Featured Offers</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/cashout">Castout</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/rewards">Rewards</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/leaderboard">Leaderboard</Link></li>
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
              <Stat label="Completed Task" value="500+" color="text-emerald-400" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-10 py-6 text-center text-sm">
          <p>© 2025 CashFlow. All rights reserved.</p>
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
