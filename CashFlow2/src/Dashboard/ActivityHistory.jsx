import React, { useState } from "react";

const TABS = ["completed", "pending", "started", "rejected", "withdrawals"];

const DATA = {
  completed: [
    {
      name: "Cases.gg",
      provider: "Lootably",
      reward: "+$1.37",
      date: "09/11/2025, 14:55:20",
    },
    {
      name: "Survey Completion",
      provider: "AdGate Media",
      reward: "+$2.50",
      date: "Dec 25, 2025",
    },
    {
      name: "Game Milestone",
      provider: "GameRewards",
      reward: "+$15.00",
      date: "Dec 24, 2025",
    },
  ],

  pending: [
    {
      name: "Bitcoin Withdrawal",
      provider: "BTC",
      timer: "",
      reward: "-$25.00",
      date: "Dec 22, 2025",
    },
  ],

  started: [
    {
      name: "Survey Bundle",
      provider: "CPX Research",
      status: "Started",
      reward: "+$4.25",
      date: "Dec 21, 2025",
    },
  ],

  withdrawals: [
    {
      name: "PayPal Withdrawal",
      provider: "PayPal",
      reward: "-$50.00",
      date: "Dec 24, 2025",
      payment: "Completed",
    },
    {
      name: "Bitcoin Withdrawal",
      provider: "BTC",
      reward: "-$25.00",
      date: "Dec 22, 2025",
      payment: "Completed",
    },
  ],

  rejected: [
    {
      name: "PayPal Withdrawal",
      provider: "PayPal",
      reward: "-$50.00",
      date: "Dec 24, 2025",
      payment: "Rejected",
    },
    {
      name: "Bitcoin Withdrawal",
      provider: "BTC",
      reward: "-$25.00",
      date: "Dec 22, 2025",
      payment: "Rejected",
    },
  ],
};

export const ActivityHistory = () => {
  const [activeTab, setActiveTab] = useState("completed");

  return (
    <section className="mt-14 mb-[50px]">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-white mb-6">
        Activity History
      </h2>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 mb-6">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2 rounded-xl border transition
                ${
                  isActive
                    ? "bg-sky-500 text-black border-sky-400 shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                    : "border-white/10 text-white hover:bg-cyan-400 hover:text-black cursor-pointer"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          );
        })}
      </div>

      {/* TABLE */}
      <div className="rounded-2xl border border-white/10 bg-[#0b1220]/80 backdrop-blur overflow-x-auto">
        <table className="w-full min-w-[700px]">

          {/* COMPLETED */}
          {activeTab === "completed" && (
            <>
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="text-left px-6 py-4">NAME</th>
                  <th className="text-left px-6 py-4">PROVIDER</th>
                  <th className="text-right px-6 py-4">REWARD</th>
                  <th className="text-right px-6 py-4">DATE</th>
                </tr>
              </thead>
              <tbody>
                {DATA.completed.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="px-6 py-5 text-gray-400">
                      {row.provider}
                    </td>
                    <td
                      className={`px-6 py-5 text-right font-semibold ${
                        row.reward.startsWith("-")
                          ? "text-white"
                          : "text_color_brad"
                      }`}
                    >
                      {row.reward}
                    </td>
                    <td className="px-6 py-5 text-right text-gray-400">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {/* PENDING */}
          {activeTab === "pending" && (
            <>
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="text-left px-6 py-4">REQUEST</th>
                  <th className="text-left px-6 py-4">METHOD</th>
                  <th className="text-left px-6 py-4">TIMER</th>
                  <th className="text-right px-6 py-4">AMOUNT</th>
                  <th className="text-right px-6 py-4">DATE</th>
                </tr>
              </thead>
              <tbody>
                {DATA.pending.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="px-6 py-5 text-gray-400">
                      {row.provider}
                    </td>
                    <td className="px-6 py-5">
                      <CountdownTimer minutes={60} />
                    </td>
                    <td className="px-6 py-5 text-right font-semibold text-white">
                      {row.reward}
                    </td>
                    <td className="px-6 py-5 text-right text-gray-400">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {/* STARTED */}
          {activeTab === "started" && (
            <>
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="text-left px-6 py-4">OFFER</th>
                  <th className="text-left px-6 py-4">PROVIDER</th>
                  <th className="text-left px-6 py-4">STATUS</th>
                  <th className="text-right px-6 py-4">REWARD</th>
                  <th className="text-right px-6 py-4">DATE</th>
                </tr>
              </thead>
              <tbody>
                {DATA.started.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="px-6 py-5 text-gray-400">
                      {row.provider}
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-6 py-5 text-right font-semibold text_color_brad">
                      {row.reward}
                    </td>
                    <td className="px-6 py-5 text-right text-gray-400">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {/* WITHDRAWALS */}
          {activeTab === "withdrawals" && (
            <>
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="text-left px-6 py-4">METHOD</th>
                  <th className="text-left px-6 py-4">PROVIDER</th>
                  
                  <th className="text-right px-6 py-4">AMOUNT</th>
                  <th className="text-right px-6 py-4">DATE</th>
                  <th className="text-right px-6 py-4">Payment Transaction</th>
                </tr>
              </thead>
              <tbody>
                {DATA.withdrawals.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="px-6 py-5 text-gray-400">
                      {row.provider}
                    </td>
                    
                    <td className="px-6 py-5 text-right font-semibold text-white">
                      {row.reward}
                    </td>
                    <td className="px-6 py-5 text-right text-gray-400">
                      {row.date}
                    </td>
                    <td className="px-6 py-5 text-right font-semibold text-white">
                      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm">
                        {row.payment}
                      </span>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {/* Rejected */}
          {activeTab === "rejected" && (
            <>
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="text-left px-6 py-4">OFFER NAME</th>
                  <th className="text-left px-6 py-4">PROVIDER</th>
                  
                  <th className="text-right px-6 py-4">AMOUNT</th>
                  <th className="text-right px-6 py-4">DATE</th>
                  <th className="text-right px-6 py-4">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {DATA.rejected.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="px-6 py-5 text-gray-400">
                      {row.provider}
                    </td>
                    
                    <td className="px-6 py-5 text-right font-semibold text-white">
                      {row.reward}
                    </td>
                    <td className="px-6 py-5 text-right text-gray-400">
                      {row.date}
                    </td>
                    <td className="px-6 py-5 text-right font-semibold text-white">
                      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm">
                        {row.payment}
                      </span>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

        </table>
      </div>
    </section>
  );
};

/* ---------------- timer (countdown) ---------------- */
function CountdownTimer({ minutes = 30 }) {
  const totalSeconds = minutes * 60;
  const [time, setTime] = React.useState(totalSeconds);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          return totalSeconds; // 🔁 RESET when reaches 0
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds]);

  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");

  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
      ⏳ {mins}:{secs}
    </span>
  );
}



/* ---------------- STATUS BADGE ---------------- */

function StatusBadge({ status }) {
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm">
        ✓ Completed
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
        ⏳ Pending
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm">
      ▶ Started
    </span>
  );
}
