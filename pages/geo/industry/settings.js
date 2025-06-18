"use client";
import { useState } from "react";
import OverviewSidebar from "../../../components/geoDashboard/overviewSidebar";
import { ToggleLeft, ToggleRight, Pencil, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    mentions: true,
    weeklySummary: false,
    productUpdates: true,
  });

  const toggleSetting = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <OverviewSidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Settings</p>

        {/* Title */}
        <h1 className="text-2xl font-sans mb-16">Settings</h1>

        {/* Profile Section */}
        <div className="p-6 rounded-lg border border-[#2c2c2c] mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="space-y-2">
            <p><span className="text-gray-400">Name:</span> Adnan Sameer</p>
            <p><span className="text-gray-400">Email:</span> adnansameer@grocliq.com</p>
            <button className="mt-3 text-sm text-[#9b9b9b] flex items-center gap-2 hover:text-white">
              <Pencil className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="p-6 rounded-lg border border-[#2c2c2c] mb-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <ul className="space-y-4 text-sm">
            {Object.keys(notifications).map((key) => (
              <li key={key} className="flex justify-between items-center">
                <span className="capitalize text-[#ccc]">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <button onClick={() => toggleSetting(key)}>
                  {notifications[key] ? (
                    <ToggleRight className="text-green-500 w-6 h-6" />
                  ) : (
                    <ToggleLeft className="text-gray-500 w-6 h-6" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Account Options */}
        <div className="p-6 rounded-lg border border-[#2c2c2c]">
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <div className="flex flex-col gap-4 text-sm">
            <button className="text-blue-400 hover:underline w-fit">Reset Password</button>
            <button className="flex items-center gap-2 text-red-500 hover:underline w-fit">
              <Trash2 className="w-4 h-4" />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
