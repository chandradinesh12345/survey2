import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import { Autoplay } from "swiper/modules";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

import adgate from "../assets/img/adgatemedia.svg";
import offertoro from "../assets/img/offertoro.png";
import lootably from "../assets/img/lootably.png";
import timewall from "../assets/img/timewall.png";
import adtogame from "../assets/img/adtogame.png";
import cpx from "../assets/img/cpx.svg";
import notik from "../assets/img/notik.png";

const partners = [
  { name: "AdGate Media", logo: adgate },
  { name: "OfferToro", logo: offertoro },
  { name: "Lootably", logo: lootably },
  { name: "TimeWall", logo: timewall },
  { name: "Adtogame", logo: adtogame},
  { locked: true },
  { name: "Cpx", logo: cpx},
  { name: "Notik", logo: notik },
];

export const Offerwalls = () => {
  return (
    <>
        <section className="mt-10 mb-10">
            <div className='container mx-auto px-4'>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold flex items-center gap-2">
                ★ Offerwalls
              </h2>
              <Link to="/offerwalls-pages" className="text-gray-400 text-[12px] hover:text-white transition">
                View All →
              </Link>
            </div>

            {/* SLIDER */}
            <Swiper
               // modules={[Navigation]}
              // modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                navigation
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 6 },
                }}
                className="pb-2"
                >
                {partners.map((item, index) => (
                    <SwiperSlide key={index}>
                    {item.locked ? (
                        /* LOCKED CARD */
                        <div
                        className="h-[140px] bg-gradient-to-br from-blue-900 to-blue-700
                        rounded-xl p-4 text-center text-white flex flex-col mt-[10px] justify-center"
                        >
                        <Lock className="mx-auto mb-2" />
                        <p className="text-sm font-semibold">
                            You need <span className="text-yellow-300">999</span> more points
                        </p>
                        <p className="text-xs opacity-80">
                            to unlock this offer walls.
                        </p>
                        </div>
                    ) : (
                        /* NORMAL CARD */
                        <div
                        className="h-[140px] bg-[#0b1220] rounded-xl p-4
                        border border-white/10 hover:border-cyan-400/40
                        hover:-translate-y-1 transition-all duration-300 mt-[10px]"
                        >
                        <div className="h-16 flex items-center justify-center mb-3 offerwall_logo">
                            <img
                            src={item.logo}
                            alt={item.name}
                            className="max-h-10 object-contain"
                            />
                        </div>

                        <p className="text-white text-center font-medium mb-2">
                            {item.name}
                        </p>

                        </div>
                    )}
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    </>
  )
}
