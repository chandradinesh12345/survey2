import React from 'react'
import { HelpCircle, Wallet, Shield, User, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const HelpCenter = () => {
  return (
    <>
        <Header />
        <section className="min-h-screen bg-gradient-to-b mt-[50px] from-[#070b14] to-[#02050a] text-white py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Help Center</h1>
                <p className="text-gray-400 mt-3">
                    Find answers to common questions or contact support
                </p>
                </div>

                {/* CATEGORIES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
                    hover:-translate-y-2
                    hover:shadow-[0_0_60px_rgba(56,189,248,0.45)]
                    transition-all duration-300"
                >
                    <Wallet className="text-cyan-400 mb-4" />
                    <h3 className="font-semibold mb-2">Earnings & Cashout</h3>
                    <p className="text-gray-400 text-sm">
                    Learn how earnings work and how to withdraw money.
                    </p>
                </div>

                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
                    hover:-translate-y-2
                    hover:shadow-[0_0_60px_rgba(34,197,94,0.45)]
                    transition-all duration-300"
                >
                    <User className="text-green-400 mb-4" />
                    <h3 className="font-semibold mb-2">Account & Profile</h3>
                    <p className="text-gray-400 text-sm">
                    Manage your account settings and profile details.
                    </p>
                </div>

                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
                    hover:-translate-y-2
                    hover:shadow-[0_0_60px_rgba(168,85,247,0.45)]
                    transition-all duration-300"
                >
                    <Shield className="text-purple-400 mb-4" />
                    <h3 className="font-semibold mb-2">Security</h3>
                    <p className="text-gray-400 text-sm">
                    Password, verification, and account safety.
                    </p>
                </div>

                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10
                    hover:-translate-y-2
                    hover:shadow-[0_0_60px_rgba(234,179,8,0.45)]
                    transition-all duration-300"
                >
                    <HelpCircle className="text-yellow-400 mb-4" />
                    <h3 className="font-semibold mb-2">General Help</h3>
                    <p className="text-gray-400 text-sm">
                    Common questions and platform guidance.
                    </p>
                </div>

                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Frequently Asked Questions
                </h2>

                {[
                    {
                    q: "How long does a cashout take?",
                    a: "Most cashouts are processed instantly. Bitcoin withdrawals may take up to 24 hours.",
                    },
                    {
                    q: "Why is my account not eligible for daily bonus?",
                    a: "You must earn at least $1 in the last 30 days to be eligible.",
                    },
                    {
                    q: "Can I change my payment method?",
                    a: "Yes, you can select a different payment method each time you request a cashout.",
                    },
                ].map((item, i) => (
                    <div
                    key={i}
                    className="bg-[#0b1220] rounded-xl p-5 border border-white/10 mb-4
                    hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]
                    transition"
                    >
                    <p className="font-medium mb-2">{item.q}</p>
                    <p className="text-gray-400 text-sm">{item.a}</p>
                    </div>
                ))}
                </div>

                {/* SUPPORT CTA */}
                <div
                className="max-w-3xl mx-auto text-center bg-gradient-to-r
                from-cyan-500/10 to-teal-500/10 rounded-2xl p-8
                border border-cyan-400/20"
                >
                <Mail className="mx-auto text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                    Still need help?
                </h3>
                <p className="text-gray-400 mb-5">
                    Contact our support team and we’ll get back to you shortly.
                </p>
                <Link to="/ContactUs"
                    className="bg-gradient-to-r block w-[200px] m-auto from-cyan-500 to-teal-400
                    text-black font-semibold px-6 py-3 rounded-xl
                    hover:shadow-[0_0_60px_rgba(56,189,248,0.6)]
                    transition"
                >
                    Contact Support
                </Link>
                </div>

            </div>
        </section>
        <Footer />
    </>
  )
}
