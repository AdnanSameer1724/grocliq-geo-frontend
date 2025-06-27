"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoIcon from "../../public/assets/logo/logo icon svg.svg";
import Footer from "../../components/footer/Footer";

export default function CompanyAnalysisPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");

  const [shortDescription, setShortDescription] = useState("");
  const [industry, setIndustry] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");

  const [loading, setLoading] = useState({
    short: true,
    industry: true,
    detailed: true,
  });

  const [error, setError] = useState({
    short: null,
    industry: null,
    detailed: null,
  });

  useEffect(() => {
    const company = localStorage.getItem("company");
    const url = localStorage.getItem("companyUrl") || "";
    setCompanyName(company);
    setCompanyUrl(url);

    if (!company) {
      setError({ short: "No company found", industry: "No company found", detailed: "No company found" });
      return;
    }

    // Call all 3 APIs
    fetch("http://localhost:8000/api/brand/company-short-description", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, url }),
    })
      .then(res => res.json())
      .then(data => setShortDescription(data.shortDescription))
      .catch(() => setError(prev => ({ ...prev, short: "Failed to load short description" })))
      .finally(() => setLoading(prev => ({ ...prev, short: false })));

    fetch("http://localhost:8000/api/brand/company-industry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, url }),
    })
      .then(res => res.json())
      .then(data => setIndustry(data.industry))
      .catch(() => setError(prev => ({ ...prev, industry: "Failed to load industry" })))
      .finally(() => setLoading(prev => ({ ...prev, industry: false })));

    fetch("http://localhost:8000/api/brand/company-detailed-description", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, url }),
    })
      .then(res => res.json())
      .then(data => setDetailedDescription(data.detailedDescription))
      .catch(() => setError(prev => ({ ...prev, detailed: "Failed to load detailed description" })))
      .finally(() => setLoading(prev => ({ ...prev, detailed: false })));
  }, []);

  const allLoaded = !loading.short && !loading.industry && !loading.detailed;
  const anyError = error.short || error.industry || error.detailed;

  return (
    <div className="w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-auto relative">
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-7 text-[#787878] text-[12px] font-sans hover:text-[13px] z-10"
      >
        &lt; Back
      </button>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-2xl border border-[#D1D1D1] rounded-lg p-6 bg-white">
          <div className="flex items-center gap-3 mb-4">
            <Image src={logoIcon} alt="Logo" width={20} height={20} />
            <h2 className="text-lg font-sans text-black">Grocliq</h2>
          </div>

          <h1 className="text-[24px] font-semibold mb-1 text-black">Website Analysis</h1>
          <p className="text-[13px] text-[#787878] mb-6">
            Here's what we found about your brand. You can edit this later.
          </p>

          {/* Short Description */}
          <h3 className="text-[14px] font-semibold text-black mb-1">Short Description</h3>
          <p className="text-[12px] text-[#787878] mb-2">
            A brief summary of what your brand does.
          </p>
          {loading.short ? (
            <p className="text-sm text-gray-500 mb-6">Loading...</p>
          ) : error.short ? (
            <p className="text-sm text-red-500 mb-6">{error.short}</p>
          ) : (
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full h-[60px] text-[13px] border border-gray-300 rounded-md p-3 text-[#3D3D3D] bg-white resize-none focus:outline-none focus:ring-0 mb-6"
            />
          )}

          {/* Industry */}
          <h3 className="text-[14px] font-semibold text-black mb-1">Industry</h3>
          <p className="text-[12px] text-[#787878] mb-2">
            The industry your brand operates in.
          </p>
          {loading.industry ? (
            <p className="text-sm text-gray-500 mb-6">Loading...</p>
          ) : error.industry ? (
            <p className="text-sm text-red-500 mb-6">{error.industry}</p>
          ) : (
            <input
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full text-[13px] border border-gray-300 rounded-md p-3 text-[#3D3D3D] bg-white focus:outline-none focus:ring-0 mb-6"
            />
          )}

          {/* Detailed Description */}
          <h3 className="text-[14px] font-semibold text-black mb-1">Description</h3>
          <p className="text-[12px] text-[#787878] mb-2">
            A detailed description of what your brand does.
          </p>
          {loading.detailed ? (
            <p className="text-sm text-gray-500 mb-6">Loading...</p>
          ) : error.detailed ? (
            <p className="text-sm text-red-500 mb-6">{error.detailed}</p>
          ) : (
            <textarea
              value={detailedDescription}
              onChange={(e) => setDetailedDescription(e.target.value)}
              className="w-full min-h-[150px] max-h-[300px] text-[13px] border border-gray-300 rounded-md p-3 text-[#3D3D3D] bg-white resize-y focus:outline-none focus:ring-0 mb-6 overflow-auto"
            />
          )}

          {/* Continue Button */}
          <button
            type="button"
            disabled={!allLoaded || anyError}
            onClick={() => router.push("/geo/competitorAnalysis")}
            className={`
              w-full overflow-hidden transition-all duration-300 ease-out gap-2 relative outline-none shadow 
              disabled:shadow-none inline-flex justify-center items-center rounded-md 
              min-h-[36px] text-[13px] bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white 
              disabled:cursor-not-allowed disabled:text-[#9A9A9A] disabled:bg-[#EDEDED] px-2.5
            `}
          >
            {anyError
              ? "Retry or Go Back"
              : !allLoaded
              ? "Analyzing..."
              : "Continue"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
