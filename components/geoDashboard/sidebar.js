"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import logoIcon from "../../public/assets/logo/logo icon svg.svg";

import {
  Home,
  Search,
  Inbox,
  BarChart2,
  Factory,
  Tag,
  Cpu,
  Bookmark,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/geo/dashboard", label: "Home", icon: Home },
    { href: "/geo/search", label: "Search", icon: Search },
    { href: "/geo/inbox", label: "Inbox", icon: Inbox },
    { href: "/geo/conversation", label: "Conversation", icon: Bookmark },
  ];

  const metricItems = [
    { href: "/geo/industry/overview", label: "Industry", icon: Factory },
    { href: "/geo/topic", label: "Topic", icon: Tag },
    { href: "/geo/model", label: "Model", icon: Cpu },
    { href: "/geo/citation", label: "Citation", icon: Bookmark },
    { href: "/geo/improve", label: "Improve", icon: BarChart2 },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#000000] text-white p-6 flex flex-col border-r border-gray-700">
      {/* Logo Section */}
      <div className="mb-10 flex items-center gap-2">
        <Image src={logoIcon} alt="logo" height={14} width={14} />
        <h1 className="text-lg font-medium">Grocliq</h1>
        <ChevronDown className="h-4 w-4 ml-auto text-gray-400" />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center p-3 rounded-lg ${
                  pathname === href
                    ? "bg-[#808080]/30 text-white"
                    : "text-[#6c6c6c] hover:bg-gray-900 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Metrics Subheading */}
        <div className="mt-8 mb-3 px-3">
          <p className="text-xs font-medium text-[#6c6c6c] uppercase tracking-wider">Metrics</p>
        </div>

        {/* Metrics Navigation */}
        <ul className="space-y-1">
          {metricItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center p-3 rounded-lg ${
                  pathname === href
                    ? "bg-[#808080]/30 text-white"
                    : "text-[#6c6c6c] hover:bg-gray-900 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
