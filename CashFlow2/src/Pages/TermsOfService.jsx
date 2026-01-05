import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const TermsOfService = () => {
  return (
    <>
        <Header />
        <section className="min-h-screen mt-[50px] bg-gradient-to-b from-[#070b14] to-[#02050a] text-white py-16">
            <div className="max-w-4xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Terms of Service</h1>
                <p className="text-gray-400 mt-3">
                    Please read these terms carefully before using our platform.
                </p>
                </div>

                <div className="space-y-8">

                {/* INTRO */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                    These Terms of Service ("Terms") govern your access to and use of
                    our website and services. By accessing or using our platform, you
                    agree to be bound by these Terms. If you do not agree, please do
                    not use our services.
                    </p>
                </div>

                {/* ELIGIBILITY */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
                    <p className="text-gray-300 leading-relaxed">
                    You must be at least 18 years old (or the legal age in your
                    country) to use our services. By using the platform, you confirm
                    that you meet this requirement.
                    </p>
                </div>

                {/* ACCOUNT */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Account Registration & Security
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>You are responsible for maintaining the confidentiality of your account.</li>
                    <li>All activities under your account are your responsibility.</li>
                    <li>You must provide accurate and up-to-date information.</li>
                    </ul>
                </div>

                {/* USE OF SERVICES */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">Use of Services</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Do not misuse or exploit the platform.</li>
                    <li>Do not attempt to manipulate rewards, earnings, or referrals.</li>
                    <li>Any fraudulent activity may result in account suspension.</li>
                    </ul>
                </div>

                {/* PAYMENTS */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Earnings, Rewards & Payments
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    Earnings and rewards are subject to verification. Minimum payout
                    limits, processing times, and available payment methods may vary.
                    We reserve the right to delay or deny payouts in case of suspected
                    fraud or violation of these Terms.
                    </p>
                </div>

                {/* TERMINATION */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Account Suspension or Termination
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We reserve the right to suspend or terminate your account at any
                    time if you violate these Terms, engage in fraudulent activity,
                    or misuse our services.
                    </p>
                </div>

                {/* LIMITATION */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Limitation of Liability
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We are not liable for any indirect, incidental, or consequential
                    damages arising from your use of the platform. Use the service at
                    your own risk.
                    </p>
                </div>

                {/* CHANGES */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">
                    Changes to the Terms
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                    We may update these Terms from time to time. Continued use of the
                    platform after changes are posted constitutes acceptance of the
                    updated Terms.
                    </p>
                </div>

                {/* CONTACT */}
                <div className="bg-[#0b1220] rounded-2xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                    If you have any questions regarding these Terms, please contact us
                    at{" "}
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
