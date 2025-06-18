"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "../../components/geoDashboard/sidebar";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const searchHistory = [
    "Notion",
    "Slack",
    "Airtable",
    "Zapier",
    "Webflow",
    "Figma",
  ];

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Search</p>

        {/* Page Title */}
        <h1 className="text-2xl font-sans mb-10">Search</h1>

        {/* Search Bar */}
        <div className="mb-10 relative">
            <input
                type="text"
                placeholder="Search for a brand..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 pr-10 rounded-md bg-[#1a1a1a] text-white placeholder-gray-500 border border-[#333] focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>

        {/* History Title */}
        <h2 className="text-lg font-sans mb-4">Your brand search history</h2>

        {/* Table-like list */}
        <div className="p-6 rounded-lg">
            <ul className="divide-y divide-[#333]">
                {["Zillow", "Redfin", "LoopNet", "Realtor", "PropertyGuru"].map((brand, i) => (
                <li key={i} className="flex items-center justify-between py-4">
                    <div className="flex flex-col">
                    <div className="flex items-center gap-3 text-white">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span>{brand}</span>
                    </div>
                    <p className="text-sm text-[#6c6c6c] ml-7">www.{brand.toLowerCase()}.com/</p>
                    </div>
                    <button className="text-sm text-[#808080] hover:underline">Save to Inbox</button>
                </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
