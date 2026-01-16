import React from "react";
import { Search, LayoutGrid, Monitor, Apple } from "lucide-react";

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
          <select className="dark-select w-1/2 px-4 py-2 rounded-xl outline-none">
            <option>All Category</option>
            <option>Surveys</option>
            <option>Games</option>
            <option>Offers</option>
          </select>
          <select className="dark-select w-1/2 px-4 py-2 rounded-xl outline-none">
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
        <select className="dark-select px-4 py-2 rounded-xl outline-none">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[18px] h-[18px]"
            >
              <path d="M17.6 9.48l1.84-3.18a.38.38 0 00-.66-.38l-1.86 3.2a9.18 9.18 0 00-9.84 0L5.18 5.92a.38.38 0 00-.66.38l1.84 3.18A8.36 8.36 0 004 16.12V19a1 1 0 001 1h1a1 1 0 001-1v-1h10v1a1 1 0 001 1h1a1 1 0 001-1v-2.88a8.36 8.36 0 00-3.4-6.64zM9 8.5a.75.75 0 11-.75.75A.75.75 0 019 8.5zm6 0a.75.75 0 11-.75.75.75.75 0 01.75-.75z"/>
            </svg>
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
