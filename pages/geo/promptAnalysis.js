"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer/Footer";

export default function PromptAnalysisPage() {
  const router = useRouter();
  const [prompts, setPrompts] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newPrompt, setNewPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const company = localStorage.getItem("company"); // assuming it's stored in /geo/page
    if (!company) return;

    fetch("http://localhost:8000/api/generate-prompts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPrompts(data.prompts || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch prompts:", err);
        setIsLoading(false);
      });
  }, []);

  const handleAddPrompt = () => {
    if (newPrompt.trim()) {
      setPrompts([...prompts, newPrompt.trim()]);
      setNewPrompt("");
      setShowInput(false);
    }
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
          <h1 className="text-[24px] font-sans mb-1 text-black">Relevant Prompts</h1>
          <p className="text-[13px] text-[#787878] mb-6">
            These prompts are generated based on the response from the GEOs based on your company.
          </p>

          <div className="mb-4">
            <button
              onClick={() => setShowInput(!showInput)}
              className="mb-3 text-[13px] px-3 py-1 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white rounded-md transition-all"
            >
              {showInput ? "Cancel" : "Add Prompt"}
            </button>

            {showInput && (
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  placeholder="Enter your prompt"
                  className="flex-grow text-[13px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                />
                <button
                  onClick={handleAddPrompt}
                  className="text-[13px] px-3 py-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white rounded-md"
                >
                  Add
                </button>
              </div>
            )}
          </div>

          {isLoading ? (
            <p className="text-sm text-gray-500 mb-6">Analyzing prompts...</p>
          ) : (
            <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {prompts.map((prompt, idx) => (
                <div
                  key={idx}
                  className="p-3 text-[13px] bg-[#f5f5f5] text-[#3D3D3D] rounded-md border border-gray-300"
                >
                  {prompt}
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => router.push("/geo/dashboard")}
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
