"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer/Footer";

export default function CompetitorAnalysisPage() {
  const router = useRouter();
  const [competitors, setCompetitors] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [manualCompetitor, setManualCompetitor] = useState("");

  useEffect(() => {
    const company = localStorage.getItem("company");
    if (!company) return;

    fetch("http://localhost:8000/api/fetch-competitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCompetitors(data.competitors || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch competitors:", err);
        setIsLoading(false);
      });
  }, []);

  const toggleCompetitor = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((c) => c !== name)
        : [...prev, name]
    );
  };

  const handleAddManual = () => {
    if (manualCompetitor.trim()) {
      setCompetitors((prev) => [...prev, manualCompetitor.trim()]);
      setSelected((prev) => [...prev, manualCompetitor.trim()]);
      setManualCompetitor("");
      setShowInput(false);
    }
  };

  const handleContinue = () => {
    localStorage.setItem("selectedCompetitors", JSON.stringify(selected));
    router.push("/geo/promptAnalysis");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-7 text-[#787878] text-[12px] font-sans hover:text-[13px] z-10"
      >
        &lt; Back
      </button>

      <main className="flex-1 overflow-y-auto px-4 flex items-center justify-center">
        <div className="w-full max-w-2xl border border-[#D1D1D1] rounded-lg p-6 bg-white mt-10 mb-6">
          <h1 className="text-[24px] font-sans mb-1 text-black">Competitors</h1>
          <p className="text-[13px] text-[#787878] mb-6">
            List your main competitors to help us understand your market position.
          </p>

          {/* Add Manually */}
          <div className="mb-4">
            <button
              onClick={() => setShowInput(!showInput)}
              className="mb-3 text-[13px] px-3 py-1 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white rounded-md transition-all"
            >
              {showInput ? "Cancel" : "Add Manually"}
            </button>

            {showInput && (
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={manualCompetitor}
                  onChange={(e) => setManualCompetitor(e.target.value)}
                  placeholder="Enter competitor URL or name"
                  className="flex-grow text-[13px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                />
                <button
                  onClick={handleAddManual}
                  className="text-[13px] px-3 py-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white rounded-md"
                >
                  Add
                </button>
              </div>
            )}
          </div>

          {/* Competitor List */}
          {isLoading ? (
            <p className="text-sm text-gray-500 mb-6">Fetching competitors...</p>
          ) : (
            <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {competitors.map((comp, idx) => {
                const isSelected = selected.includes(comp);
                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 text-[13px] bg-[#f5f5f5] text-[#3D3D3D] rounded-md border border-gray-300"
                  >
                    <span>{comp}</span>
                    <button
                      onClick={() => toggleCompetitor(comp)}
                      className={`text-[13px] font-bold px-2 py-0.5 rounded-md border ${
                        isSelected
                          ? "bg-red-100 text-red-500 border-red-300"
                          : "bg-green-100 text-green-600 border-green-300"
                      }`}
                    >
                      {isSelected ? "–" : "+"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <button
            onClick={handleContinue}
            disabled={isLoading}
            className={`w-full text-[13px] px-2.5 py-2 rounded-md transition-all ${
              isLoading
                ? "bg-[#EDEDED] text-[#9A9A9A] cursor-not-allowed"
                : "bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white"
            }`}
          >
            {isLoading ? "Analyzing..." : "Continue"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
