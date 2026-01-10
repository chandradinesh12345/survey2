import React from 'react'

import {
  CheckCircle,
  Zap,
  CreditCard,
  Users,
  ShieldCheck,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    text: "Free to join, no hidden fees",
  },
  {
    icon: Zap,
    text: "Flexible earning options",
  },
  {
    icon: CreditCard,
    text: "Regular payment processing",
  },
  {
    icon: Users,
    text: "User-friendly platform",
  },
  {
    icon: ShieldCheck,
    text: "Quality support team",
  },
  {
    icon: Gift,
    text: "Mobile-friendly experience",
  },
];

export const WhyChoose = () => {
  return (
    <section className="bg-[#070c1a]">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Why Choose Our Platform?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-5 rounded-xl
                bg-[#0b1225] border border-white/10
                hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500/10">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <p className="text-gray-200 text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
