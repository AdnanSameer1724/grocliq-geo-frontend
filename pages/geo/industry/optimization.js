"use client";

import { useState } from "react";
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";

export default function RobotOptimization() {
  const [activeTab, setActiveTab] = useState("7 days");

  const matrixData = [
    {
      type: "Search Prompt",
      timeout: 12,
      misunderstanding: 4,
      apiError: 1,
    },
    {
      type: "Summarize Prompt",
      timeout: 3,
      misunderstanding: 7,
      apiError: 2,
    },
    {
      type: "Generate Prompt",
      timeout: 1,
      misunderstanding: 2,
      apiError: 6,
    },
  ];

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white">
      <div className="w-64 bg-[#111] border-r border-gray-800">
        <OverviewSidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Robot Optimization</p>
        <h1 className="text-3xl font-bold mb-2">Robot Optimization</h1>
        <p className="text-sm text-gray-400 mb-8">
          Advanced insights into agent behavior, failure patterns, and optimization opportunities.
        </p>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Efficiency Score", value: "87%", note: "+5% this week" },
            { label: "Avg. Response Time", value: "1.2s", note: "Benchmark: 1.5s" },
            { label: "Failure Rate", value: "3.4%", note: "Goal: Under 5%" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
            >
              <h2 className="text-base text-gray-400 mb-1">{card.label}</h2>
              <p className="text-3xl font-bold text-white">{card.value}</p>
              <p className="text-xs text-gray-500 mt-1">{card.note}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl mb-10">
          <h2 className="text-xl font-semibold mb-6">Prompt Failure Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {matrixData.map((entry, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 shadow-inner border border-gray-700"
              >
                <h3 className="text-lg font-medium text-white mb-2">{entry.type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Timeout</span>
                    <span className="text-red-400 font-medium">{entry.timeout}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Misunderstanding</span>
                    <span className="text-yellow-400 font-medium">{entry.misunderstanding}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">API Error</span>
                    <span className="text-purple-400 font-medium">{entry.apiError}</span>
                  </div>
                  <hr className="border-t border-gray-700 my-2" />
                  <div className="flex justify-between text-white font-bold">
                    <span>Total Failures</span>
                    <span>
                      {entry.timeout + entry.misunderstanding + entry.apiError}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#121212] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Optimization Suggestions</h2>
          <ul className="list-inside space-y-2 text-sm text-gray-300">
            <li>Reduce large prompt token usage to optimize performance.</li>
            <li>Use caching for repeated agent responses.</li>
            <li>Trigger fallback routines for unreliable prompt types.</li>
            <li>Improve parsing for vague user intents.</li>
            <li>Group & audit similar failure categories regularly.</li>
            <li>Use token streaming for better perceived performance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}