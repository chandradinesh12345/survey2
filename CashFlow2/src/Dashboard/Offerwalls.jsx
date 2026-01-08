import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  { name: "AdGate Media", logo: "../src/assets/img/adgatemedia.svg", rating: 5 },
  { name: "OfferToro", logo: "../src/assets/img/offertoro.png", rating: 5 },
  { name: "Lootably", logo: "../src/assets/img/lootably.png", rating: 5 },
  { name: "TimeWall", logo: "../src/assets/img/timewall.png", rating: 5 },
  { name: "Adtogame", logo: "../src/assets/img/adtogame.png", rating: 5 },
  { locked: true },
  { name: "Cpx", logo: "../src/assets/img/cpx.svg", rating: 5 },
  { name: "Notik", logo: "../src/assets/img/notik.png", rating: 5 },
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
              <Link to="/OfferwallsPages" className="text-gray-400 text-[12px] hover:text-white transition">
                View All →
              </Link>
            </div>

            {/* SLIDER */}
            <Swiper
               // modules={[Navigation]}
               modules={[Autoplay]}
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
                        className="h-[160px] bg-gradient-to-br from-blue-900 to-blue-700
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
                        className="h-[160px] bg-[#121212] rounded-xl p-4
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

                        <div className="flex justify-center gap-1">
                            {Array(item.rating).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">★</span>
                            ))}
                        </div>
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
