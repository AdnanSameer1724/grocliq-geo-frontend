"use client"
import Sidebar from "../../components/geoDashboard/sidebar";
import { useState } from "react";

const citations = [
  { domain: "forbes.com", mentions: 1885 },
  { domain: "builtin.com", mentions: 1276 },
  { domain: "rho.co", mentions: 1086, owned: true },
  { domain: "fitsmallbusiness.com", mentions: 1056 },
  { domain: "fintechlabs.com", mentions: 750 },
];

export default function CitationPage() {
  const [activeTab, setActiveTab] = useState("24 h");

  const totalMentions = 30445 + 518 + 1056;

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      <main className="flex-1 p-6 overflow-auto">
        <div className="text-sm font-medium text-[#6c6c6c] mb-4">Grocliq &gt; Citation</div>
        <h1 className="text-2xl font-sans mb-3">Citation</h1>

        <div className="flex items-center gap-2 mb-4">
          {["24 h", "7 days", "30 days", "custom"].map((range) => (
            <button
              key={range}
              onClick={() => setActiveTab(range)}
              className={`px-3 py-1 rounded-md text-sm ${
                activeTab === range
                  ? "bg-[#3a3a3a] text-white"
                  : "text-gray-400"
              }`}
            >
              {range === "24 h"
                ? "Last 24 hours"
                : range === "7 days"
                ? "Last 7 days"
                : range === "30 days"
                ? "Last 30 days"
                : "Custom range"}
            </button>
          ))}
          {activeTab === "custom" && (
            <button className="flex items-center gap-1 px-3 py-2 bg-[#1a1a1a] text-sm rounded-md text-gray-400">
              Custom range
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Bar Graph */}
        <div className="mb-6 mt-16 p-4">
          <div className="text-xl mb-2">Citation Domain Count</div>
          <div className="text-greyl-400 mb-12">
            Percentage of open-ended AI answers
          </div>
          <div className="flex h-8 rounded overflow-hidden w-full bg-gray-800 mb-4">
            <div className="bg-blue-500" style={{ width: `${(30445 / totalMentions) * 100}%` }} />
            <div className="bg-yellow-400" style={{ width: `${(518 / totalMentions) * 100}%` }} />
            <div className="bg-green-500" style={{ width: `${(1056 / totalMentions) * 100}%` }} />
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>Earned 30,445 (95.1%)</span>
            <span>Operated 518 (1.6%)</span>
            <span>Owned 1,056 (3.3%)</span>
          </div>
        </div>

        {/* Citation Table */}
        <div className="bg-[#0a0a0a] rounded-lg p-4">
          <div className="flex justify-between text-lg text-gray-400 border-b border-gray-700 pb-2 mb-3">
            <span>Domain</span>
            <span>Number of mentions</span>
          </div>
          {citations.map((c, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-xl py-5 border-b border-gray-800 last:border-b-0"
            >
              <div className="flex items-center gap-12">
                <span className="text-gray-500">{i + 1}</span>
                <span className="font-sans">{c.domain}</span>
                {c.owned && (
                  <span className="bg-gray-700 text-xs px-2 py-0.5 rounded-full">Owned</span>
                )}
              </div>
              <div className="flex items-center gap-12">
                <div className="bg-gray-800 h-4 rounded w-36">
                  <div
                    className="bg-gray-300 h-4 rounded"
                    style={{ width: `${(c.mentions / totalMentions) * 100 * 2}%` }}
                  ></div>
                </div>
                <span>{c.mentions}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
