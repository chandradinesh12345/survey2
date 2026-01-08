import React from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";


export const ContactUs = () => {
  return (
    <>
 
        <section className="min-h-screen bg-gradient-to-b from-[#070b14] mt-[50px] to-[#02050a] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-6">
             {/* HEADER */}
                <div className="text-left mb-14">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-400 mt-3">
                    Have questions? We’re here to help you.
                </p>
                </div>
            {/* EMAIL */}
            <div
              className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
              hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(56,189,248,0.45)]
              transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Mail className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold">support@example.com</p>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div
              className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
              hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(34,197,94,0.45)]
              transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Phone className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-semibold">+91 90000 00000</p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div
              className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
              hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(168,85,247,0.45)]
              transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-semibold">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT – CONTACT FORM */}
          <div
            className="bg-[#0b1220] rounded-2xl p-8 border border-white/10
            hover:shadow-[0_0_80px_rgba(56,189,248,0.25)]
            transition"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#070b14]
                  border border-white/10 focus:border-cyan-400
                  focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#070b14]
                  border border-white/10 focus:border-cyan-400
                  focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#070b14]
                  border border-white/10 focus:border-cyan-400
                  focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-400
                text-black font-semibold py-3 rounded-xl
                flex items-center justify-center gap-2
                hover:shadow-[0_0_60px_rgba(56,189,248,0.6)]
                transition"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>

    </>
  )
}
