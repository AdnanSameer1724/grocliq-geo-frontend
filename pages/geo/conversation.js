"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/geoDashboard/sidebar";

export default function Conversations() {
  const [activeTab, setActiveTab] = useState("7 days");

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Conversations</p>

        {/* Page Title */}
        <h1 className="text-2xl font-sans mb-6">Conversation Volumes</h1>

        {/* Tabs */}
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

        <div className="grid grid-cols-3 gap-6 mb-12 mt-20">
            {/* Volume Estimates */}
            <div className="flex flex-col">
                <h2 className="text-xl font-sans text-white mb-3">Volume Estimates</h2>

                <div className="flex-1 bg-[#1a1a1a] p-6 rounded-lg mb-4">
                <p className="mb-1">Total volume</p>
                <p className="text-sm text-gray-600 mb-8">
                    Estimated total prompts using this keyword
                </p>
                <p className="text-3xl font-sans">2.7m</p>
                </div>

                <div className="flex-1 bg-[#1a1a1a] p-6 rounded-lg">
                <p className="mb-1">Frequency</p>
                <p className="text-sm text-gray-600 mb-6">
                    This keyword ranks in the top 28% by usage frequency
                </p>
                <p className="text-3xl font-sans">Frequent</p>
                </div>
            </div>

            {/* Platform Volume Estimates */}
            <div className="flex flex-col">
                <h2 className="text-xl font-sans text-white mb-3">Platform Volume Estimates</h2>

                <div className="flex-1 bg-[#1a1a1a] p-4 rounded-lg flex flex-col justify-center items-center">
                <div className="w-48 h-48 rounded-full border-8 border-pink-500 border-t-[#333] border-b-[#333] border-r-[#333] flex items-center justify-center text-xl font-semibold mb-4">
                    2.7m
                </div>
                <div className="text-sm mt-4 text-gray-400 flex gap-6">
                    <span className="text-pink-400">● SearchGPT: 2.1m</span>
                    <span className="text-gray-500">● Other: 0.6m</span>
                </div>
                </div>
            </div>

            {/* Global Volume */}
            <div className="flex flex-col">
                <h2 className="text-xl font-sans text-white mb-3">Global Volume</h2>

                <div className="flex-1 bg-[#1a1a1a] p-6 rounded-lg">
                    <ul className="text-base">
                        {[
                        { name: "US", flag: "🇺🇸" },
                        { name: "IN", flag: "🇮🇳" },
                        { name: "UK", flag: "🇬🇧" },
                        { name: "CA", flag: "🇨🇦" },
                        { name: "AU", flag: "🇦🇺" },
                        { name: "Rest", flag: "🌐" },
                        ].map((country, i, arr) => (
                        <li key={i} className="text-white">
                            <div className="py-3 flex items-center gap-8">
                            <span className="text-xl">{country.flag}</span>
                            <span>{country.name}</span>
                            </div>
                            {i !== arr.length - 1 && (
                            <div className="border-t border-[#3a3a3a]" />
                            )}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>



        {/* Keyword Variations */}
        <div className="grid grid-cols-2 gap-6">
          {/* List-style */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <p className="text-sm text-gray-400 mb-3">Keywords Variations</p>
            <ul className="space-y-2 text-base">
              {["Real estate market", "Real property", "Real estate business"].map((term, i) => (
                <li key={i} className="text-white">{term}</li>
              ))}
            </ul>
          </div>

          {/* Graph-style Placeholder */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <p className="text-sm text-gray-400 mb-3">Keywords Variations</p>
            <div className="text-gray-500 text-sm">
              [Keyword Network Graph Component]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
