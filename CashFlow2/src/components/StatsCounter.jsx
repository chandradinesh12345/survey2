import React from 'react'
import { useEffect, useState } from "react";
import { DollarSign, Users, CheckCircle } from "lucide-react";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count.toLocaleString();
}

export const StatsCounter = () => {
  return (
    <section className="border-t border-b border-white/10 bg-[#060b18]">
      <div className="container mx-auto px-4 py-16 phone_view_stats_cout_padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="flex justify-center items-center gap-5 phone_view_justify">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <DollarSign className="text-cyan-400 w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">
                <Counter end={2751340763} />
              </h3>
              <p className="text-gray-400 text-sm">Total Coins Earned</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex justify-center items-center gap-5 phone_view_justify border_t_b">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Users className="text-blue-400 w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">
                <Counter end={533871} />
              </h3>
              <p className="text-gray-400 text-sm">Total Users</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex justify-center items-center gap-5 phone_view_justify">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <CheckCircle className="text-indigo-400 w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">
                <Counter end={6092637} />
              </h3>
              <p className="text-gray-400 text-sm">Tasks Completed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
