import React from 'react'

import PaypalLogo from "../assets/img/Paypal.svg";
import BitCoin from "../assets/img/bitcoin.svg"
import LiteCoin from "../assets/img/litecoin.svg"
import dogecoin from "../assets/img/dogecoin.png"
import ethereum from "../assets/img/ethereum.svg"
import amazon from "../assets/img/qmazon.webp"
import netflix from "../assets/img/netflix.png"
import visa from "../assets/img/VisaLogo.png"


export const CashoutMethods = () => {
    const methods = [
    {
      logo: PaypalLogo
    },
    {
      logo: BitCoin
    },
    {
      logo: LiteCoin
    },
    {
      logo: dogecoin
    },
    {
      logo: ethereum
    },
    {
      logo: amazon
    },
    {
      logo: netflix
    },
    {
      logo: visa
    },
  ];
  return (
    <section className="pb-24 bg-[#060b18]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Great Cashout Methods
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Withdraw your earnings instantly to your preferred method
        </p>

        {/* Methods */}
        <div className="mt-12 lg:flex phone_view_cashout_section flex-wrap justify-center gap-5">
          {methods.map((item, index) => (
            <div
              key={index}
              className="phone_view_item_box px-6 py-4 rounded-xl
                         border border-white/10 bg-[#0b1225]
                         hover:border-[#12a7e2] transition hover:scale-[1.09] cursor-pointer"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-6 w-20 object-scale-down"
              />
              <span className="text-white font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
