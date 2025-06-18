"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Sidebar from "../../components/geoDashboard/sidebar";

const mockChartData = [
  { day: "Mon", GPT4: 2400, Claude3: 2100, Gemini: 1700 },
  { day: "Tue", GPT4: 2210, Claude3: 2000, Gemini: 1800 },
  { day: "Wed", GPT4: 2290, Claude3: 2180, Gemini: 1500 },
  { day: "Thu", GPT4: 2000, Claude3: 1980, Gemini: 1600 },
  { day: "Fri", GPT4: 2780, Claude3: 2500, Gemini: 1900 },
  { day: "Sat", GPT4: 1890, Claude3: 1800, Gemini: 1400 },
  { day: "Sun", GPT4: 2390, Claude3: 2300, Gemini: 2000 },
];

export default function ModelDashboard() {
  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Model</p>
        <h1 className="text-2xl font-sans mb-8">Model Overview</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { title: "Executed Prompts", value: "42.5k" },
            { title: "Avg Latency", value: "640ms" },
            { title: "Error Rate", value: "1.3%" },
            { title: "Total Tokens", value: "3.1M" },
          ].map((card, i) => (
            <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-10">{card.title}</p>
              <p className="text-xl font-semibold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Model Usage Graph */}
        <div className="p-6 mb-10">
          <h2 className="text-lg font-medium mb-6">Model Usage - Last 7 Days</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockChartData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="GPT4" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="Claude3" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="Gemini" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Prompt Insights */}
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: "Top Prompts",
              items: ["Generate real estate pitch", "Summarize news", "Classify leads"],
            },
            {
              title: "High Cost Prompts",
              items: ["Long-form blog", "Legal document Q&A", "Financial forecast"],
            },
            {
              title: "Failure Cases",
              items: ["Empty results", "Timeouts", "Invalid input"],
            },
          ].map((section, i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-md font-medium text-white mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
