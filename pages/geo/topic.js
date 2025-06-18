"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/geoDashboard/sidebar";
import Image from "next/image";
import wordcloud from "../../public/assets/geos/topicIMG.png"

export default function Topic() {
  const [activeTab, setActiveTab] = useState("7 days");

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Topic</p>

        {/* Page Title */}
        <h1 className="text-2xl font-sans mb-6">Topic</h1>

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

        {/* Topic Overview Section */}
        <div className="font-sans text-lg text-white mt-10 mb-2">
          Topic overview
        </div>
        <p className="text-sm text-[#999] mb-6">
          Rho’s presence across all topics and platforms
        </p>

        <div className="grid grid-cols-5 gap-6">
          {/* Keyword Frequency - 60% */}
          <div className="col-span-3 rounded-lg p-6">
            <h2 className="font-sans text-lg mb-4">Keyword Frequency</h2>
            <div className="flex justify-end gap-4 text-sm text-gray-400 mt-4 pr-4">
              <span className="text-green-400">● 70+</span>
              <span className="text-blue-400">● 50+</span>
              <span className="text-orange-400">● 30+</span>
              <span className="text-red-400">● 20-</span>
            </div>
            <Image src={wordcloud} alt="Word Cloud" className="w-full h-auto rounded" />
          </div>

          {/* Top Themes - 40% */}
          <div className="col-span-2 p-6">
            <h2 className="text-lg font-sans mb-4">Top themes</h2>
            <ul className="text-lg">
              {[
                { theme: "Accounts Payable Automation", value: 88 },
                { theme: "Business Banking", value: 73 },
                { theme: "Cash Management", value: 70 },
                { theme: "Corporate Cards", value: 55 },
                { theme: "Expense Management", value: 55 },
                { theme: "Treasury Management", value: 49 },
              ].map((item, i) => (
                <li key={i} className="flex justify-between py-5 border-b border-[#2c2c2c] last:border-b-0">
                  <span>{i + 1}. {item.theme}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
