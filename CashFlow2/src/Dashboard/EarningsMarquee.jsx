import React from 'react'

const data = [
  { brand: "monlix", user: "Lisa P", amount: "5.78", color: "bg-blue-500" },
  { brand: "grindbux", user: "Megan F", amount: "9.04", color: "bg-emerald-600" },
  { brand: "lootably", user: "Chris B", amount: "14.24", color: "bg-purple-600" },
  { brand: "ayetstudios", user: "Emily S", amount: "7.78", color: "bg-indigo-600" },
  { brand: "cpx", user: "Tyler G", amount: "11.30", color: "bg-cyan-600" },
  { brand: "offertoro", user: "Josh D", amount: "12.66", color: "bg-pink-600" },
  { brand: "monlix", user: "Lisa P", amount: "5.78", color: "bg-blue-500" },
  { brand: "grindbux", user: "Megan F", amount: "9.04", color: "bg-emerald-600" },
  { brand: "lootably", user: "Chris B", amount: "14.24", color: "bg-purple-600" },
  { brand: "ayetstudios", user: "Emily S", amount: "7.78", color: "bg-indigo-600" },
  { brand: "cpx", user: "Tyler G", amount: "11.30", color: "bg-cyan-600" },
  { brand: "offertoro", user: "Josh D", amount: "12.66", color: "bg-pink-600" },
];

export const EarningsMarquee = () => {
  return (
    <>
        <section className='mt-[70px]'>
            <div className="w-full overflow-hidden bg-[#0b1220]">
                <div className="flex animate-scroll w-max">
                    
                    {/* duplicate for infinite loop */}
                    {[...data, ...data].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2.5 whitespace-nowrap border-r border-white/10"
                    >
                        {/* logo */}
                        <div
                        className={`w-7 h-7 rounded flex items-center justify-center text-white font-bold text-sm uppercase ${item.color}`}
                        >
                        {item.brand[0]}
                        </div>

                        {/* text */}
                        <div className="flex flex-col">
                        <span className="text-xs font-medium text-white leading-tight">
                            {item.brand}
                        </span>
                        <span className="text-xs text-white/50 leading-tight">
                            {item.user}
                        </span>
                        </div>

                        {/* amount with primary blur */}
                        <span className="relative text-sm text_color_brad font-bold">
                        ${item.amount}
                        <span className="absolute inset-0 blur-md bg-primary/40 -z-10 rounded"></span>
                        </span>

                    </div>
                    ))}
                </div>
                </div>
        </section>
    </>
  )
}
