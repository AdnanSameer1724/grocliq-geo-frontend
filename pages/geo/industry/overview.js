"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";

export default function Overview() {
  const [activeTab, setActiveTab] = useState("24 h");

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <OverviewSidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-4">Grocliq &gt; Agent Analytics</p>

        <h1 className="text-2xl font-sans mb-3">Overview</h1>

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

        <div className="font-sans mt-16">
            <p className="text-xl mb-2">Summary</p>
            <p className="text-greyl-400 mb-5">Overall site performance of www.Grocliq.com</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mt-6">
            {[
                {
                title: "All Visits",
                desc: "Total visits from AI Crawlers",
                value: "1,552",
                change: "+349",
                changeColor: "text-green-400",
                },
                {
                title: "AI Traffic Percentage",
                desc: "Percentage of traffic from AI Crawlers",
                value: "1.76%",
                change: "+0.47%",
                changeColor: "text-green-400",
                },
                {
                title: "Number of Pages Indexed",
                desc: "Unique pages indexed on your domain",
                value: "34",
                change: "+1",
                changeColor: "text-green-400",
                },
                {
                title: "Referrals from AI Search",
                desc: "Human visits referred by AI Search Engines",
                value: "12",
                change: "-4",
                changeColor: "text-red-400",
                },
            ].map((card, i) => (
                <div key={i} className="bg-[#3a3a3a]/15 p-6 rounded-lg flex flex-col justify-between min-h-[180px]">
                <div>
                    <p className="text-white">{card.title}</p>
                    <p className="text-md text-gray-500 mt-1">{card.desc}</p>
                </div>
                <div className="flex items-center text-xl font-semibold mt-auto pt-4">
                    <span>{card.value}</span>
                    <span className={`ml-2 text-sm ${card.changeColor}`}>{card.change}</span>
                </div>
                </div>
            ))}
        </div>


        {/* Indexing Analysis Table */}
        <div className="mt-10">
          <h2 className="text-lg mb-2">Indexing Analysis Breakdown</h2>
          <p className="text-sm text-gray-500 mb-4">Indexes of your website by AI Search Engines crawlers</p>

          <div className="bg-[#0d0d0d] rounded-lg overflow-hidden">
            <table className="w-full m-4">
              <thead>
                <tr className="text-left text-gray-500 border-b border-[#1f1f1f]">
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Count</th>
                  <th className="px-4 py-3">Change</th>
                  <th className="px-4 py-3">Last indexed</th>
                  <th className="px-4 py-3">Pages</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "OpenAI",
                    count: 875,
                    change: "+243",
                    lastIndexed: "18 minutes ago",
                    pages: 33,
                    changeColor: "text-green-400",
                  },
                  {
                    name: "Google",
                    count: 12,
                    change: "-7",
                    lastIndexed: "5 days ago",
                    pages: 26,
                    changeColor: "text-red-400",
                  },
                  {
                    name: "Microsoft",
                    count: 297,
                    change: "+24",
                    lastIndexed: "1 hour ago",
                    pages: 23,
                    changeColor: "text-green-400",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] text-lg"
                  >
                    <td className="px-4 py-2 text-white">{row.name}</td>
                    <td className="px-4 py-2 text-white">{row.count}</td>
                    <td className={`px-4 py-2 ${row.changeColor}`}>{row.change}</td>
                    <td className="px-4 py-2 text-white">{row.lastIndexed}</td>
                    <td className="px-4 py-2 text-white">{row.pages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}