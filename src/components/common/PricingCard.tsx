import React from "react";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
};

export default function PricingCard({ title, price, features, popular }: PricingCardProps) {
  // Highlight color for each plan
  let titleColor = "#659999";
  if (title === "Pro") titleColor = "#f4791f";
  if (title === "Enterprise") titleColor = "#f4791f";

  let priceColor = "#659999";
  if (title === "Pro") priceColor = "#f4791f";
  if (title === "Enterprise") priceColor = "#f4791f";

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group",
        popular ? "border-[#f4791f]" : "border-[#E0E0E0]"
      )}
      style={{ minHeight: 360, maxWidth: 320, width: "100%" }}
    >
      {/* ...icon and badge handled in parent... */}
      {/* Removed plan title from inside the card */}
      <div
        className="p-24-bold mb-3 font-extrabold"
        style={{
          color: title === "Pro" || title === "Enterprise" ? "#f4791f" : "#659999",
          fontSize: "1.5rem",
          letterSpacing: "0.03em"
        }}
      >
        {price}
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="p-16-regular flex items-center gap-2" style={{ color: "#6D6D6D", fontSize: "0.97rem" }}>
            <svg width={16} height={16} fill="none" viewBox="0 0 20 20">
              <circle cx={10} cy={10} r={9} stroke="#f4791f" strokeWidth={2} fill="#fff5ec" />
              <path d="M7 10l2 2 4-4" stroke="#f4791f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "w-full py-2 px-4 rounded-md font-semibold transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm",
          popular
            ? "bg-[#f4791f] text-white hover:bg-[#d96a17]"
            : "bg-[#fff5ec] text-[#222] hover:bg-[#ffe7d1]"
        )}
      >
        Choose Plan
      </button>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
