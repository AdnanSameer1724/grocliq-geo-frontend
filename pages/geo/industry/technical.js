"use client"
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function TechnicalAnalysis() {
  const metrics = [
    { label: "Performance", value: 97, color: "text-green-400" },
    { label: "Best practices", value: 100, color: "text-green-400" },
    { label: "SEO", value: 100, color: "text-green-400" },
    { label: "Speed", value: 88, color: "text-yellow-400" },
    { label: "Key content", value: 100, color: "text-green-400" },
    { label: "Wording", value: 92, color: "text-green-300" },
  ];

  const sampleCode = ` <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Rho</title>
            </head>
        <body>
        </body>
    </html>`;

  return (
    <div className="flex">
      <OverviewSidebar />
      <main className="flex-1 p-10 bg-[#0b0b0b] text-white min-h-screen ml-64">
        {/* Breadcrumb + Heading */}
        <div className="mb-6">
            <p className="text-sm font-medium text-[#6c6c6c] mb-4">Grocliq &gt; Agent Analytics</p>
          <h1 className="text-2xl font-sans mb-3">Technical Analysis</h1>

          {/* Time Filters */}
          <div className="mt-4 flex space-x-3">
            {["Last 24 hours", "Last 7 days", "Last 30 days", "Custom range"].map((label, idx) => (
              <button
                key={idx}
                className={`px-4 py-1 rounded-md text-sm ${
                  label === "Last 7 days"
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mt-10">
          <h2 className="text-xl font-sans mb-6">Metrics</h2>
          <div className="grid grid-cols-6 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-[#3a3a3a]/15 p-6 rounded-lg text-center">
                <p className="text-white mb-16 flex items-start">{metric.label}</p>
                <p className={`text-lg flex items-start ${metric.color}`}>{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="rounded-lg overflow-hidden bg-[#1e1e1e] p-4 text-lg">
            <SyntaxHighlighter language="html" style={dracula}>
                {sampleCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </main>
    </div>
  );
}
