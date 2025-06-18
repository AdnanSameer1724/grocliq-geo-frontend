import { ArrowUp, ArrowDown } from "lucide-react";
import Sidebar from "../../components/geoDashboard/sidebar";
export default function Dashboard() {
  return (
    <div className="ml-64 p-8 bg-[#0a0a0a] text-white min-h-screen">
        <Sidebar />
      <div className="mb-8">
        <p className="text-sm font-thin text-[#6c6c6c] mb-2">Grocliq { '>' } Home</p>
        <h1 className="text-2xl font-bold mb-6">Home</h1>
        
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2">
            Last 24 hours
          </button>
          <button className="px-4 py-2">
            Last 7 days
          </button>
          <button className="px-4 py-2">
            Last 30 days
          </button>
          <button className="px-4 py-2">
            Custom range
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Brand visibility</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Percentage of AI answers about Business credit cards that mention Rho
        </p>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <div className="bg-[#000000] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-medium mb-2">Visibility score</h3>
              <div className="flex items-end gap-96 mb-8">
                <span className="text-4xl font-bold">89.8%</span>
                <span className="flex items-center text-green-400 text-sm">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  1% vs last week
                </span>
              </div>
              
              <div className="h-80 bg-[#6c6c6c] rounded-lg mb-4"></div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>Jan 29</span>
                <span>Jan 31</span>
                <span>Feb 02</span>
                <span>Feb 03</span>
                <span>Feb 04</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="p-6">
              <h4 className="text-md font-medium mb-8">Branch Industry Ranking:</h4>
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Chase", change: 5, value: 92, trend: "up" },
                  { rank: 2, name: "Rho", change: 1, value: 89.8, trend: "up" },
                  { rank: 3, name: "American Express", change: 1, value: 85.2, trend: "down" },
                  { rank: 4, name: "Capital on Tap", change: 5, value: 78, trend: "up" },
                  { rank: 5, name: "US bank", change: 2, value: 76.9, trend: "down" },
                  { rank: 6, name: "Bill", change: 1.8, value: 72.3, trend: "up" },
                ].map((item) => (
                  <div key={item.rank} className="flex items-center p-3 bg-[#000000] rounded-lg">
                    <span className="w-8 text-gray-400">{item.rank}.</span>
                    <span className="flex-1">{item.name}</span>
                    <span className={`flex items-center mr-4 text-sm ${
                      item.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}>
                      {item.trend === "up" ? (
                        <ArrowUp className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDown className="h-3 w-3 mr-1" />
                      )}
                      {item.change}%
                    </span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}