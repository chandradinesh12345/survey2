import React from "react";
import { Search, LayoutGrid, Smartphone, Monitor, Apple } from "lucide-react";

export const FilterBar = () => {
  return (
    <div
      className="
        w-full bg-gradient-to-r from-[#050b1a] to-[#020617]
        rounded-2xl py-3
        flex flex-col md:flex-row gap-3
      "
    >
      {/* TOP / LEFT */}
      <div className="flex flex-col gap-3 w-full md:flex-row md:w-auto">

        {/* SEARCH */}
        <div className="flex items-center bg-black/40 rounded-xl px-4 py-2 w-full md:w-[260px] border border-white/10">
          <Search size={18} className="text-gray-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
          />
        </div>

        {/* CATEGORY + PROVIDER (same row on mobile) */}
        <div className="flex gap-3 w-full">
          <select className="bg-black/40 border border-white/10 text-white px-4 py-2 rounded-xl outline-none w-1/2">
            <option>All Category</option>
            <option>Surveys</option>
            <option>Games</option>
            <option>Offers</option>
          </select>

          <select className="bg-black/40 border border-white/10 text-white px-4 py-2 rounded-xl outline-none w-1/2">
            <option>All Providers</option>
            <option>AdGate</option>
            <option>CPX</option>
            <option>Lootably</option>
          </select>
        </div>
      </div>

      {/* RIGHT / BOTTOM */}
      <div className="flex flex-col gap-3 w-full md:flex-row md:ml-auto md:w-auto">

        {/* SORT */}
        <select className="bg-black/40 border border-white/10 text-white px-4 py-2 rounded-xl outline-none w-full md:w-auto">
          <option>Sort by</option>
          <option>A to Z</option>
          <option>Z to A</option>
          <option>Highest</option>
          <option>Lowest</option>
        </select>

        {/* VIEW ICONS — center on mobile */}
        <div className="flex justify-center md:justify-start gap-2">
          <button className="p-2 rounded-xl bg-sky-500 text-black cursor-pointer">
            <LayoutGrid size={18} />
          </button>

          <button className="p-2 rounded-xl bg-black/40 border border-white/10 text-white cursor-pointer">
            <Smartphone size={18} />
          </button>

          <button className="p-2 rounded-xl bg-black/40 border border-white/10 text-white cursor-pointer">
            <Apple size={18} />
          </button>

          <button className="p-2 rounded-xl bg-black/40 border border-white/10 text-white cursor-pointer">
            <Monitor size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
