"use client";
import { useState } from "react";
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";
import { Eye, EyeOff, Plus } from "lucide-react";

export default function APIKeys() {
  const [keys, setKeys] = useState([
    { id: 1, name: "Grocliq Web", key: "sk-13df8...r1v9", visible: false },
    { id: 2, name: "Slack Plugin", key: "sk-98xv0...plm7", visible: false },
    { id: 3, name: "Research Tool", key: "sk-cc239...dv67", visible: false },
  ]);

  const toggleVisibility = (id) => {
    setKeys(
      keys.map((k) =>
        k.id === id ? { ...k, visible: !k.visible } : k
      )
    );
  };

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <OverviewSidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; API Keys</p>

        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-sans">API Keys</h1>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1f1f1f] text-sm text-white hover:bg-[#333]">
            <Plus className="w-4 h-4" />
            Generate Key
          </button>
        </div>

        {/* Keys List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key) => (
            <div key={key.id} className="bg-[#1a1a1a] rounded-lg p-5 shadow-md border border-[#2c2c2c] relative">
              <div className="text-sm text-[#888] mb-1">Label</div>
              <h2 className="text-lg font-semibold mb-3">{key.name}</h2>

              <div className="text-xs text-gray-400 mb-2">Key</div>
              <div className="flex items-center justify-between bg-[#111] px-3 py-2 rounded-md text-sm font-mono">
                <span>{key.visible ? key.key : "••••••••••••••••"}</span>
                <button onClick={() => toggleVisibility(key.id)}>
                  {key.visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-[11px] text-[#777] mt-3">
                Created on: June 12, 2025
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
