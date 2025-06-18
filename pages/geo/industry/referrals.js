"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";

export default function Referrals() {
  const [activeTab, setActiveTab] = useState("24 h");

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <OverviewSidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Agent Analytics</p>
        <h1 className="text-2xl font-sans mb-6">Referrals</h1>

        <div className="flex items-center gap-2 mb-4">
          {["24 h", "7 days", "30 days", "custom"].map((range) => (
            <button
              key={range}
              onClick={() => setActiveTab(range)}
              className={`px-3 py-1 rounded-md text-sm ${
                activeTab === range ? "bg-[#3a3a3a] text-white" : "text-gray-400"
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


        {/* Platforms and Graph Title */}
        <div className="flex justify-between mt-20">
          <div className="w-[40%] mr-4">
            <p className="text-xl mb-1">Platforms</p>
            <div className="flex gap-12 mt-2">
                {/* Platforms Table */}
                <div className="bg-[#0d0d0d] rounded-lg w-full mr-2">
                    <table className="w-full m-4">
                    <thead>
                        <tr className="text-left text-gray-500 border-b border-[#1f1f1f]">
                        <th className="px-4 py-3">Platform</th>
                        <th className="px-4 py-3">Count</th>
                        <th className="px-4 py-3">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                        { name: "OpenAI", count: 471, change: "+56", color: "text-green-400" },
                        { name: "Google", count: 289, change: "+32", color: "text-green-400" },
                        { name: "Microsoft", count: 102, change: "-9", color: "text-red-400" },
                        { name: "Perplexity", count: 66, change: "+1", color: "text-green-400" },
                        { name: "Apple", count: 8, change: "-17", color: "text-red-400" },
                        ].map((platform, idx) => (
                        <tr
                            key={idx}
                            className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] text-lg"
                        >
                            <td className="px-4 py-2 text-white text-2xl">{platform.name}</td>
                            <td className="px-4 py-2 text-white">{platform.count}</td>
                            <td className={`px-4 py-2 ${platform.color}`}>{platform.change}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

                {/* Referrals Graph Placeholder */}
                
                </div>
          </div>
          <div className="w-[60%]">
                <p className="text-xl mb-3">Referrals over time</p>
                <div className="bg-[#0d0d0d] rounded-lg h-full flex flex-col justify-center items-center p-6">
                    <div className="text-2xl font-semibold mb-2">939</div>
                    <div className="text-green-400 text-sm">↑ 64</div>
                    {/* Replace this with a real chart if needed */}
                    <div className="mt-4 text-gray-500">[Chart Component Here]</div>
                </div>
          </div>
          <div>
          </div>
        </div>

        {/* Platforms Table + Graph Row */}
        
      </div>
    </div>
  );
}