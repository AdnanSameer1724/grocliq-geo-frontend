"use client";
import Sidebar from "../../components/geoDashboard/sidebar";

export default function Improve() {
  const Dot = ({ color }) => (
    <span
      className="w-2 h-2 rounded-full inline-block"
      style={{ backgroundColor: color }}
    />
  );

  const LinkTag = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2a2a2a] text-sm px-3 py-1 rounded-full hover:underline"
    >
      {children}
    </a>
  );

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#111] min-h-screen border-r border-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-sm font-medium text-[#6c6c6c] mb-6">Grocliq &gt; Overview</p>
        <h1 className="text-2xl font-sans mb-16">Improve</h1>

        {/* Reusable Card */}
        {[{
          type: "High impact, Low effort",
          dots: ["#22c55e", "#22c55e", "#22c55e", "#22c55e", "#6c6c6c"],
          title: "Strengthen partnerships with fintech-focused review platforms",
          description: "Platforms like NerdWallet and FitSmallBusiness are highly cited, indicating their influence in fintech decision-making. Rho should optimize its presence on these platforms to drive credibility and customer acquisition.",
          links: [
            { href: "https://fitsmallbusiness.com", label: "fitsmallbusiness.com" },
            { href: "https://nerdwallet.com", label: "nerdwallet.com" }
          ],
          steps: [
            "Conduct interviews with CFOs to identify key challenges in accounts payable.",
            "Publish whitepapers, webinars, and blog posts tailored to CFOs on topics like cost optimization and automation.",
            "Promote content through LinkedIn and CFO-specific forums."
          ]
        }, {
          type: "Low impact, High effort",
          dots: ["#ef4444", "#ef4444", "#6c6c6c", "#6c6c6c", "#6c6c6c"],
          title: "Leverage high-authority media coverage to enhance brand credibility",
          description: "Forbes.com has the highest citation volume, indicating strong media presence. Rho should capitalize on this by securing more thought leadership content and PR placements.",
          links: [
            { href: "https://forbes.com", label: "forbes.com" }
          ],
          steps: [
            "Develop a media outreach strategy targeting Forbes and similar high-authority publications.",
            "Publish executive thought leadership articles on fintech trends and innovations."
          ]
        }].map((card, idx) => (
          <div key={idx} className="bg-[#1a1a1a] rounded-xl mb-8 mx-2 overflow-hidden">
            <div className="flex">
              {/* Impact Section (Left - 50%) */}
              <div className="w-1/2 p-12">
                <div className="flex items-center gap-2 mb-4">
                  {card.dots.map((color, i) => (
                    <Dot key={i} color={color} />
                  ))}
                  <span className="ml-2 text-[#aaaaaa]">{card.type}</span>
                </div>
                <h2 className="text-white text-lg font-sans mb-2">{card.title}</h2>
                <p className="text-[#aaaaaa] mb-6">{card.description}</p>
                <div className="flex gap-3 flex-wrap">
                  {card.links.map((link, i) => (
                    <LinkTag key={i} href={link.href}>{link.label}</LinkTag>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-[#2a2a2a]" />

              {/* Steps Section (Right - 50%) */}
              <div className="w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl mb-8">Steps</h3>
                  <div className="space-y-10 text-[#aaaaaa]">
                    {card.steps.map((step, i) => (
                      <label key={i} className="flex gap-4 items-start">
                        <input type="checkbox" className="mt-1 accent-pink-500" />
                        <span>{step}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Shared Footer */}
            <div className="flex justify-end gap-2 px-6 pb-4 pt-2 border-t border-[#2a2a2a]">
              <button className="px-4 py-1 text-sm bg-[#2a2a2a] rounded-md text-gray-400">Discard</button>
              <button className="px-4 py-1 text-sm bg-white text-black rounded-md">Mark as done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
