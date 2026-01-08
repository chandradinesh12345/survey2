
import React, { useState } from "react";
import { Bell, Check, Trash2 } from "lucide-react";



const notificationsData = [
  {
    id: 1,
    title: "Offer Completed!",
    message: "You earned $5.00 from SurveyJunkie",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "New Referral Signup",
    message: "Mike joined using your referral link",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Withdrawal Processed",
    message: "Your PayPal withdrawal of $50 is complete",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    title: "Double Rewards Weekend",
    message: "Earn 2x rewards on all offers",
    time: "2 days ago",
    unread: false,
  },
];

export const NotificationPages = () => {
    const [filter, setFilter] = useState("all");

    const filtered = notificationsData.filter((n) => {
        if (filter === "unread") return n.unread;
        if (filter === "read") return !n.unread;
        return true;
    });
  return (
    <>
     
        <div className="min-h-screen bg-[#070c1a] text-white px-4 pt-22 pb-10">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Notifications</h1>
            <p className="text-gray-400 mt-1">
              All your recent activity updates
            </p>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            <Check size={16} />
            Mark all as read
          </button>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-3">
          {["all", "unread", "read"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-xl cursor-pointer border transition
              ${
                filter === tab
                  ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                  : "border-white/10 text-white hover:bg-white/5"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">

          {filtered.map((item) => (
            <div
              key={item.id}
              className={`flex gap-4 px-6 py-5 border-b border-white/10 transition
              ${item.unread ? "bg-cyan-500/5" : "hover:bg-white/5"}
              `}
            >
              {/* ICON */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                ${item.unread ? "bg-cyan-400/20 text-cyan-400" : "bg-white/10 text-gray-300"}
                `}
              >
                <Bell size={18} />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{item.title}</p>
                  {item.unread && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mt-1">
                  {item.message}
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  {item.time}
                </p>
              </div>

              {/* ACTION */}
              <button className="text-gray-400 hover:text-red-400 transition">
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No notifications found
            </div>
          )}
        </div>
      </div>
    </div>
       
    </>
  )
}
