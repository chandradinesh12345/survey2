import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const PrivacyPolicy = () => {
  return (
    <>
    <Header />
        <section className="min-h-screen mt-[50px] bg-gradient-to-b from-[#070b14] to-[#02050a] text-white py-16">
            <div className="max-w-4xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <p className="text-gray-400 mt-3">
                    Your privacy is important to us. This policy explains how we handle
                    your personal information.
                </p>
                </div>

                <div className="space-y-8">

                {/* INTRO */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                    This Privacy Policy describes how we collect, use, and protect
                    your information when you use our website and services. By
                    accessing or using our platform, you agree to the terms of this
                    Privacy Policy.
                    </p>
                </div>

                {/* INFORMATION WE COLLECT */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Information We Collect
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Personal information such as name and email address</li>
                    <li>Account and login details</li>
                    <li>Payment and transaction information</li>
                    <li>Usage data, device information, and IP address</li>
                    </ul>
                </div>

                {/* HOW WE USE */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>To provide and improve our services</li>
                    <li>To process transactions and payouts</li>
                    <li>To communicate updates, offers, and support messages</li>
                    <li>To prevent fraud and ensure platform security</li>
                    </ul>
                </div>

                {/* DATA SHARING */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Data Sharing & Disclosure
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We do not sell or rent your personal information. Your data may be
                    shared only with trusted third-party service providers when
                    necessary to operate our platform, comply with legal obligations,
                    or protect our rights.
                    </p>
                </div>

                {/* SECURITY */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Data Security
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We use industry-standard security measures to protect your data.
                    However, no method of transmission over the internet is 100%
                    secure, and we cannot guarantee absolute security.
                    </p>
                </div>

                {/* COOKIES */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Cookies
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze
                    traffic, and personalize content. You can manage or disable
                    cookies through your browser settings.
                    </p>
                </div>

                {/* USER RIGHTS */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Your Rights
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    You have the right to access, update, or delete your personal
                    information. If you have any questions or requests regarding your
                    data, please contact our support team.
                    </p>
                </div>

                {/* CHANGES */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Changes to This Policy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes
                    will be posted on this page, and continued use of the platform
                    indicates acceptance of the updated policy.
                    </p>
                </div>

                {/* CONTACT */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Contact Us
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data
                    practices, please contact us at{" "}
                    <span className="text-cyan-400 font-medium">
                        support@example.com
                    </span>.
                    </p>
                </div>

                </div>

                {/* FOOTER NOTE */}
                <p className="text-center text-gray-500 text-sm mt-12">
                Last updated: January 2026
                </p>

            </div>
        </section>
        <Footer />
    </>
  )
}
