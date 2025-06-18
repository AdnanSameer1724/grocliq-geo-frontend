"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  ChevronLeft,
  LayoutDashboard,
  Folder,
  AlignLeft,
  Sparkles,
  Share2,
  PieChart,
  Wrench,
  Key,
  Settings,
} from "lucide-react";
export default function OverviewSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const linkClasses = (href) => {
        const isActive = pathname === href;
        return `flex items-center p-3 rounded-lg ${
        isActive ? "bg-[#808080]/15 text-white" : "text-[#6c6c6c] hover:bg-gray-900 hover:text-white"
        }`;
    };
    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-[#000000] text-white p-6 flex flex-col border-r border-gray-700">
            <div className="mb-10 flex items-center gap-2">
                <Link href="/geo/dashboard" className="flex items-center gap-1 text-gray-400">
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
                </Link>
            </div>

            <nav className="flex-1">
                <ul className="space-y-1">
                <li>
                    <Link href="/geo/overview" className={linkClasses("/geo/industry/overview")}>
                    <LayoutDashboard className="h-5 w-5 mr-3" />
                    <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link href="/geo/pages" className={linkClasses("/geo/industry/pages")}>
                    <Folder className="h-5 w-5 mr-3" />
                    <span>Pages</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className={linkClasses("/geo/industry/logs")}>
                    <AlignLeft className="h-5 w-5 mr-3" />
                    <span>Logs</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className={linkClasses("/geo/industry/platforms")}>
                    <Sparkles className="h-5 w-5 mr-3" />
                    <span>Platforms</span>
                    </Link>
                </li>
                <li>
                    <Link href="/geo/referrals" className={linkClasses("/geo/industry/referrals")}>
                    <Share2 className="h-5 w-5 mr-3" />
                    <span>Referrals</span>
                    </Link>
                </li>
                <li>
                    <Link href="/geo/technical" className={linkClasses("/geo/industry/technical")}>
                    <PieChart className="h-5 w-5 mr-3" />
                    <span>Technical Analysis</span>
                    </Link>
                </li>
                <li>
                    <Link href="/geo/optimization" className={linkClasses("/geo/industry/optimization")}>
                    <Wrench className="h-5 w-5 mr-3" />
                    <span>Robots Optimization</span>
                    </Link>
                </li>
                <li>
                    <Link href="/geo/apiKeys" className={linkClasses("/geo/industry/apiKeys")}>
                    <Key className="h-5 w-5 mr-3" />
                    <span>API Keys</span>
                    </Link>
                </li>
                <li>
                    <Link href="/geo/settings" className={linkClasses("/geo/industry/settings")}>
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Settings</span>
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
    );
}