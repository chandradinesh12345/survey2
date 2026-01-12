import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';



import { FileText, Gamepad2, Smartphone, Video } from "lucide-react";

const offers = [
  {
    title: "Complete Survey Bundle",
    earn: "$5.00",
    badge: "Hot",
    badgeColor: "bg-red-500",
    icon: FileText,
    iconBg: "bg-[#0da2e7]",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Install & Play Game",
    earn: "$8.50",
    badge: "Top Pick",
    badgeColor: "bg-sky-500",
    icon: Gamepad2,
    iconBg: "bg-green-500",
    img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
  },
  {
    title: "Download Mobile App",
    earn: "$3.00",
    badge: "Easy",
    badgeColor: "bg-green-500",
    icon: Smartphone,
    iconBg: "bg-teal-500",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Watch Video Ads",
    earn: "$1.25",
    badge: "Quick",
    badgeColor: "bg-blue-500",
    icon: Video,
    iconBg: "bg-[#f59f0a]",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
  },
  {
    title: "Complete Survey Bundle",
    earn: "$5.00",
    badge: "Hot",
    badgeColor: "bg-red-500",
    icon: FileText,
    iconBg: "bg-[#0da2e7]",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Install & Play Game",
    earn: "$8.50",
    badge: "Top Pick",
    badgeColor: "bg-sky-500",
    icon: Gamepad2,
    iconBg: "bg-green-500",
    img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
  },
  {
    title: "Download Mobile App",
    earn: "$3.00",
    badge: "Easy",
    badgeColor: "bg-green-500",
    icon: Smartphone,
    iconBg: "bg-teal-500",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Watch Video Ads",
    earn: "$1.25",
    badge: "Quick",
    badgeColor: "bg-blue-500",
    icon: Video,
    iconBg: "bg-[#f59f0a]",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
  },
  {
    title: "Complete Survey Bundle",
    earn: "$5.00",
    badge: "Hot",
    badgeColor: "bg-red-500",
    icon: FileText,
    iconBg: "bg-[#0da2e7]",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Install & Play Game",
    earn: "$8.50",
    badge: "Top Pick",
    badgeColor: "bg-sky-500",
    icon: Gamepad2,
    iconBg: "bg-green-500",
    img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
  },
  {
    title: "Download Mobile App",
    earn: "$3.00",
    badge: "Easy",
    badgeColor: "bg-green-500",
    icon: Smartphone,
    iconBg: "bg-teal-500",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Watch Video Ads",
    earn: "$1.25",
    badge: "Quick",
    badgeColor: "bg-blue-500",
    icon: Video,
    iconBg: "bg-[#f59f0a]",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
  },
];

export const FeaturedOffers = () => {
  return (
    <>
        <section className="mt-12">
          <div className="container mx-auto px-4">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold flex items-center gap-2">
                ⚡ Featured Offers
              </h2>
              <Link to="/featured-offers-pages" className="text-gray-400 text-[12px] hover:text-white transition">
                View All →
              </Link>
            </div>

           

            {/* SLIDER */}
            <Swiper
             // modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
             // autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                300: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                767: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
                1300: { slidesPerView: 7 },
                1400: { slidesPerView: 7 },
              }}
            >
              {offers.map((offer, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="group relative bg-[#0b1220] rounded-2xl overflow-hidden
                    border border-white/10 hover:border-cyan-400/40
                    hover:-translate-y-2 transition-all duration-300 mt-[10px]"
                  >
                    {/* IMAGE */}
                    <img
                      src={offer.img}
                      alt={offer.title}
                      className="h-30 md:h-44 w-full object-cover opacity-80 group-hover:scale-105 transition"
                    />

                    {/* BADGE */}
                    <span
                      className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white ${offer.badgeColor}`}
                    >
                      {offer.badge}
                    </span>

                    {/* CONTENT */}
                    <div className="p-3 relative">
                      <div
                        className={`${offer.iconBg} absolute top-[-50px] w-10 h-10 rounded-xl flex items-center justify-center`}
                      >
                        <offer.icon className={`w-5 h-5 text-black`} />
                      </div>

                      <h3 className="text-white font-normal mb-3 text-[14px] line-clamp-1">
                        {offer.title}
                      </h3>

                      <button
                        className="w-full text-[14px] bg-gradient-to-r from-cyan-500 to-teal-400
                        text-black font-semibold py-1 rounded-md
                        hover:shadow-lg hover:shadow-cyan-500/30 transition"
                      >
                        Earn {offer.earn}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
    </section>
    </>
  )
}
