import React from 'react'

export const CashoutMethods = () => {
    const methods = [
    {
      name: "PayPal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      name: "Bitcoin",
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
    },
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    },
    {
      name: "Litecoin",
      logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=035",
    },
    {
      name: "Ethereum",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
    },
    {
      name: "Gift Cards",
      logo: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
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
              className="phone_view_item_box flex items-center gap-3 px-6 py-4 rounded-xl
                         border border-white/10 bg-[#0b1225]
                         hover:border-green-500/40 transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-6 w-auto object-contain"
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
