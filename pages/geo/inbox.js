"use client";
import Sidebar from "../../components/geoDashboard/sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function IndexPage() {
  const savedBrands = ["Grocliq", "Redfin", "Zillow"];

  const chartData = [
    { day: "Day 1", Grocliq: 120, Redfin: 100, Zillow: 150 },
    { day: "Day 2", Grocliq: 135, Redfin: 90, Zillow: 160 },
    { day: "Day 3", Grocliq: 140, Redfin: 110, Zillow: 170 },
    { day: "Day 4", Grocliq: 155, Redfin: 95, Zillow: 165 },
    { day: "Day 5", Grocliq: 130, Redfin: 120, Zillow: 180 },
    { day: "Day 6", Grocliq: 160, Redfin: 100, Zillow: 175 },
    { day: "Day 7", Grocliq: 175, Redfin: 105, Zillow: 190 },
  ];

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-4">Grocliq &gt; Index</p>

        <h1 className="text-2xl font-sans mb-2">Index</h1>
        <p className="text-sm text-[#6c6c6c] mb-8">
          Save your brands and competitors brand for deep analysis
        </p>

        <div className="p-6 mb-8">
          <h2 className="text-xl mb-4">Saved Brands</h2>
          <ul className="divide-y divide-[#333]">
            {savedBrands.map((brand, i) => (
              <li
                key={i}
                className="py-3 text-white text-sm flex items-center justify-between"
              >
                <span>{brand}</span>
                <button className="text-[#6c6c6c] hover:underline text-xs">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6">
          <h2 className="text-xl mb-12">7-Day Brand Mentions Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Grocliq" stroke="#34d399" strokeWidth={2} />
              <Line type="monotone" dataKey="Redfin" stroke="#f472b6" strokeWidth={2} />
              <Line type="monotone" dataKey="Zillow" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
