"use client";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";

const data = [
  { path: "/", indexed: "1hr ago", visits: 377 },
  { path: "/robots.txt", indexed: "1hr ago", visits: 298 },
  { path: "/guides/what-is-aeo", indexed: "1hr ago", visits: 107 },
  { path: "/careers", indexed: "2hr ago", visits: 67 },
  { path: "/blog/ai-search-has-arrived", indexed: "3hr ago", visits: 59 },
  { path: "/login", indexed: "3hr ago", visits: 57 },
  { path: "/customers", indexed: "1hr ago", visits: 56 },
  { path: "/about-us", indexed: "5hr ago", visits: 34 },
  { path: "/privacy-policy", indexed: "5hr ago", visits: 23 },
];

export default function Pages() {
  const [activeTab, setActiveTab] = useState("7 days");

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <OverviewSidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-4">Grocliq &gt; Agent Analytics</p>

        <h1 className="text-2xl font-sans mb-3">Pages</h1>

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
        </div>

        <div className="flex justify-between items-center mb-4 mt-16">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-3 py-2 bg-[#1a1a1a] text-white rounded-md text-sm placeholder:text-gray-500"
            />
          </div>

          <button className="flex items-center gap-1 px-3 py-2 bg-[#1a1a1a] text-sm rounded-md text-gray-400">
            Total visits by AI
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

       <div className="bg-[#0d0d0d] rounded-lg overflow-hidden">
            <table className="w-full text-base"> {/* increased text size */}
                <thead>
                <tr className="text-left text-gray-500 border-b border-[#1f1f1f]">
                    <th className="px-4 py-3.5">Page</th> {/* increased padding */}
                    <th className="px-4 py-3.5">Last indexed by AI</th>
                    <th className="px-4 py-3.5">Total visits by AI</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, i) => (
                    <tr
                    key={i}
                    className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a]"
                    >
                    <td className="px-4 py-3.5 text-white">{row.path}</td> {/* more gap */}
                    <td className="px-4 py-3.5 text-gray-400">{row.indexed}</td>
                    <td className="px-4 py-3.5 text-white">{row.visits}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
      </div>
    </div>
  );
}
